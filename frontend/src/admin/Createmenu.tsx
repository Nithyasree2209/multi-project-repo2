
import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function CreateMenu() {
  const [menu, setMenu] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/menu", menu);
      if (response.status === 201) {
        setSuccess("Menu created successfully!");
        setMenu({ breakfast: "", lunch: "", dinner: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error creating menu:", error);
      setError("Failed to create menu. Please try again.");
    }
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
    <div className="flex justify-center items-center min-h-screen mt-10 bg-white">
      <div className="max-w-lg w-full bg-[#2D3748] p-8 rounded-xl shadow-lg">
        
        {/* Back to Dashboard Button */}
        <div className="mb-6">
          <button
          onClick={() => window.location.href = "/dashboard"} 
          className="px-4 py-2 text-white bg-[#D69E2E] rounded-lg hover:bg-[#B68A1A] transition flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1A202C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
            </button>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#D69E2E] mb-6">
          🍽️ Meal Selection Form
        </h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        {success && <p className="text-green-400 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Breakfast */}
          <div>
            <label className="block text-[#D69E2E] font-semibold mb-2">Breakfast</label>
            <select 
              name="breakfast" 
              value={menu.breakfast} 
              onChange={handleChange} 
              className="w-full p-3 bg-[#1A202C] text-white border border-[#D69E2E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D69E2E]" 
              required>
              <option value="">Select Breakfast</option>
              <option value="Pancakes">Pancakes</option>
              <option value="Omelette">Omelette</option>
              <option value="Fruit Salad">Fruit Salad</option>
            </select>
          </div>

          {/* Lunch */}
          <div>
            <label className="block text-[#D69E2E] font-semibold mb-2">Lunch</label>
            <select 
              name="lunch" 
              value={menu.lunch} 
              onChange={handleChange} 
              className="w-full p-3 bg-[#1A202C] text-white border border-[#D69E2E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D69E2E]" 
              required>
              <option value="">Select Lunch</option>
              <option value="Rice & Curry">Rice & Curry</option>
              <option value="Pasta">Pasta</option>
              <option value="Grilled Chicken">Grilled Chicken</option>
            </select>
          </div>

          {/* Dinner */}
          <div>
            <label className="block text-[#D69E2E] font-semibold mb-2">Dinner</label>
            <select 
              name="dinner" 
              value={menu.dinner} 
              onChange={handleChange} 
              className="w-full p-3 bg-[#1A202C] text-white border border-[#D69E2E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D69E2E]" 
              required>
              <option value="">Select Dinner</option>
              <option value="Soup & Bread">Soup & Bread</option>
              <option value="Steak">Steak</option>
              <option value="Salad">Salad</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
          type="submit" 
          className="w-full bg-[#D69E2E] text-white py-3 rounded-lg hover:bg-[#B68A1A] transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Submit Menu
            </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateMenu;
