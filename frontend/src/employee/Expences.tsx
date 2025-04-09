
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { Upload, FileText, Calendar, Package, DollarSign, Layers, User, Send } from "lucide-react"; 
import Navbarr from "../employee/Navbarr";
import Sidebarr from "../employee/Sidebarr";

const Expenses = () => {
  const [image, setImage] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const [formData, setFormData] = useState({
    date: "",
    thingsName: "",
    pricePerKg: "",
    totalKg: "",
    totalAmount: "",
    employeeName: "",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleExtractText = async () => {
    if (!image) return;

    try {
      const { data } = await Tesseract.recognize(image, "eng", {
        logger: (m) => console.log(m),
      });

      console.log("Extracted Text:", data.text);
      setExtractedText(data.text);
      processExtractedText(data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  const processExtractedText = (text: string) => {
    let extractedData: any = { ...formData };
    const lines = text.split("\n").map((line) => line.trim().toLowerCase());

    lines.forEach((line) => {
      if (/date[:\s]/i.test(line)) {
        const match = line.match(/\d{4}[-/]\d{2}[-/]\d{2}/);
        if (match) extractedData.date = match[0];
      }
      if (/(things name|product|item)/i.test(line)) {
        extractedData.thingsName = line.split(":").slice(1).join(":").trim();
      }
      if (/price per kg|rate per kg|price[:\s]/i.test(line)) {
        const match = line.match(/(\d+(\.\d+)?)/);
        if (match) extractedData.pricePerKg = match[0];
      }
      if (/total kg|quantity[:\s]/i.test(line)) {
        const match = line.match(/(\d+(\.\d+)?)/);
        if (match) extractedData.totalKg = match[0];
      }
      if (/total amount|amount[:\s]/i.test(line)) {
        const match = line.match(/(\d+(\.\d+)?)/);
        if (match) extractedData.totalAmount = match[0];
      }
      if (/employee name|purchased by|buyer[:\s]/i.test(line)) {
        extractedData.employeeName = line.split(":").slice(1).join(":").trim();
      }
    });

    console.log("Processed Data:", extractedData);
    setFormData(extractedData);
  };

  const submitData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/expences/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebarr />

      {/* Main Content Area */}
      <div className="flex flex-col mt-10 flex-1 ml-60 p-6">
        <Navbarr />

        <div className="mt-10 ml-10">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <FileText size={24} className="text-blue-500" /> Upload Daily Wages Bill
          </h1>

          {/* Image Upload & Extract Button (Aligned in one row) */}
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex items-center border rounded-lg w-full max-w-lg p-2">
              <Upload size={24} className="text-green-500 mr-2" />
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full outline-none" />
            </div>
              
              {/* Extract Button Below the File Input */}
              <button onClick={handleExtractText} className="bg-[#9C760C] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600">
                <FileText size={20} /> Proceed
              </button>
            </div>

          {/* Extracted Text Display */}
          <pre className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg w-full max-w-lg overflow-auto">
            {extractedText}
          </pre>

          {/* Extracted Details Form */}
          <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Layers size={24} className="text-purple-500" /> Extracted Details
          </h2>
          <div className="mt-2 space-y-4 w-full max-w-lg">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  {key === "date" && <Calendar size={20} />}
                  {key === "thingsName" && <Package size={20} />}
                  {key === "pricePerKg" && <DollarSign size={20} />}
                  {key === "totalKg" && <Layers size={20} />}
                  {key === "totalAmount" && <DollarSign size={20} />}
                  {key === "employeeName" && <User size={20} />}
                </span>
                <input
                  type="text"
                  placeholder={key}
                  value={value}
                  className="w-full pl-10 p-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  readOnly
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button onClick={submitData} className="mt-4 bg-[#9C760C] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
            <Send size={20} /> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
