
import { useState } from "react";
import axios from "axios";
import CustomerNavbar from "./Customernavbar";
import { User, Mail, Calendar, Bed, CheckCircle } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    roomtype: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.checkin || !formData.checkout || !formData.roomtype) {
      alert("All fields are required!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/bookings", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Room booked successfully!");
      setFormData({ name: "", email: "", checkin: "", checkout: "", roomtype: "" });
    } catch (error) {
      alert("Booking failed!");
    }
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Book a Room</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="flex items-center border rounded mb-3 p-2">
              <User size={20} className="text-[#D69E2E] mr-2" />
              <input 
                type="text" name="name" placeholder="Your Name" required 
                onChange={handleChange} value={formData.name} 
                className="w-full outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border rounded mb-3 p-2">
              <Mail size={20} className="text-[#D69E2E] mr-2" />
              <input 
                type="email" name="email" placeholder="Email" required 
                onChange={handleChange} value={formData.email} 
                className="w-full outline-none"
              />
            </div>

            {/* Check-in Date */}
            <div className="flex items-center border rounded mb-3 p-2">
              <Calendar size={20} className="text-[#D69E2E] mr-2" />
              <input 
                type="date" name="checkin" required 
                onChange={handleChange} value={formData.checkin} 
                className="w-full outline-none"
              />
            </div>

            {/* Check-out Date */}
            <div className="flex items-center border rounded mb-3 p-2">
              <Calendar size={20} className="text-[#D69E2E] mr-2" />
              <input 
                type="date" name="checkout" required 
                onChange={handleChange} value={formData.checkout} 
                className="w-full outline-none"
              />
            </div>

            {/* Room Type */}
            <div className="flex items-center border rounded mb-3 p-2">
              <Bed size={20} className="text-[#D69E2E] mr-2" />
              <select 
                name="roomtype" required 
                onChange={handleChange} value={formData.roomtype} 
                className="w-full outline-none bg-transparent"
              >
                <option value="">Select Room Type</option>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Studio">Studio</option>
                <option value="Suite">Suite</option>
              </select>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#D69E2E] text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-[#B8860B]"
            >
              <CheckCircle size={20} /> Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
