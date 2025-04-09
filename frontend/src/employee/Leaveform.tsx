import { useState } from "react";
import { User, Mail, Calendar, FileText, Send } from "lucide-react"; // Import icons

interface LeaveFormProps {
  onLeaveSubmitted: () => Promise<void>;
}

const LeaveForm: React.FC<LeaveFormProps> = ({ onLeaveSubmitted }) => {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeEmail: "",
    reason: "",
    startDate: "",
    endDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Leave request submitted successfully!");
        setFormData({ employeeName: "", employeeEmail: "", reason: "", startDate: "", endDate: "" });

        await onLeaveSubmitted();
      } else {
        setMessage("❌ Failed to submit leave request.");
      }
    } catch (error) {
      console.error("Error submitting leave request:", error);
      setMessage("⚠️ An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center gap-2">
        <FileText size={24} className="text-gray-800" /> Apply for Leave
      </h2>

      {message && (
        <p className="text-center text-sm font-semibold mb-3 p-2 rounded-md bg-gray-100 text-gray-800 shadow-sm">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Employee Name */}
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-800" size={20} />
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Employee Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-800" size={20} />
          <input
            type="email"
            name="employeeEmail"
            value={formData.employeeEmail}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Start and End Date */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <label className="block text-sm font-medium text-gray-600">From:</label>
            <Calendar className="absolute left-3 top-[42px] text-gray-800" size={20} />
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          <div className="flex-1 relative">
            <label className="block text-sm font-medium text-gray-600">To:</label>
            <Calendar className="absolute left-3 top-[42px] text-gray-800" size={20} />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Reason for Leave */}
        <div className="relative">
          <FileText className="absolute left-3 top-3 text-gray-800" size={20} />
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for Leave"
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none h-24"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
        type="submit"
        className="w-full bg-[#9C760C] hover:bg-[#7A5A0A] text-white p-3 rounded-lg font-medium 
        shadow-md transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
          <Send size={20} className="text-gray-800" />
          Submit Leave Request
        </button>
      </form>
    </div>
  );
};

export default LeaveForm;
