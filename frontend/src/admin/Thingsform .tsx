
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThingsForm = () => {
  const [formData, setFormData] = useState({
    serialNo: "",
    thingsName: "",
    noOfThings: "",
    shopName: "",
    shopLocation: "",
    employeeName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/things", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form Submitted Successfully!");
        navigate("/things"); 
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Things Entry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={key === "noOfThings" ? "number" : "text"}
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            placeholder={key}
            className="w-full p-2 border rounded-md"
            required
          />
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThingsForm;
