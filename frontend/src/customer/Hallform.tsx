import React, { useState } from "react";
import CustomerNavbar from "./Customernavbar";

const HallForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/hallbooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Booking Successful:", data);
      alert("Party Hall Booked Successfully!");
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        requests: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Booking Failed. Please try again.");
    }
  };

  return (
    <div>
        <CustomerNavbar />
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Party Hall Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="flex items-center border p-2 rounded">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5.121 17.804A10.955 10.955 0 0112 15c2.21 0 4.258.637 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center border p-2 rounded">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 12l-4 4-4-4m8-4l-4 4-4-4" />
          </svg>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full outline-none"
            required
          />
        </div>

        {/* Date */}
        <div className="flex items-center border p-2 rounded">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>

        {/* Time */}
        <div className="flex items-center border p-2 rounded">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3M12 6a9 9 0 100 18 9 9 0 000-18z" />
          </svg>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>

        {/* Guests */}
        <div className="flex items-center border p-2 rounded">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM21 7a3 3 0 11-6 0 3 3 0 016 0zM3 7a3 3 0 116 0 3 3 0 01-6 0z" />
          </svg>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            className="w-full outline-none"
            required
          />
        </div>

        {/* Requests */}
        <div className="flex items-start border p-2 rounded">
          <svg className="w-5 h-5 text-gray-400 mr-2 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
          </svg>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            placeholder="Special Requests"
            rows={4}
            className="w-full outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </div>
    </div>
  );
};

export default HallForm;
