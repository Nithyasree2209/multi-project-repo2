
import { useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  Lock,
  CheckCircle,
} from "lucide-react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AddEmployee: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    doj: "",
    gender: "Male",
    address: "",
    position: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setSuccess("Employee added successfully!");
        setError(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          dob: "",
          doj: "",
          gender: "Male",
          address: "",
          position: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError("Failed to add employee.");
        setSuccess(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Error occurred while adding employee.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="max-w-2xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#D69E2E]">
            Add Employee
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField
              icon={<User />}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-medium">Date of Birth:</label>
                <InputField
                  icon={<Calendar />}
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="font-medium">Date of Joining:</label>
                <InputField
                  icon={<Calendar />}
                  name="doj"
                  type="date"
                  value={formData.doj}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <InputField
              icon={<Mail />}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <InputField
                  icon={<Lock />}
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex-1">
                <InputField
                  icon={<Lock />}
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            <InputField
              icon={<Phone />}
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <InputField
                  icon={<Briefcase />}
                  name="position"
                  type="text"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position"
                  required
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center border p-3 rounded-lg bg-gray-50">
                  <span className="text-[#D69E2E]">
                    <User />
                  </span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full outline-none ml-3 bg-transparent"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <InputField
              icon={<MapPin />}
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />

            <button
              type="submit"
              className="bg-[#D69E2E] text-white p-3 rounded-lg hover:bg-[#B68A1A] transition flex items-center gap-2"
              disabled={loading}
            >
              <CheckCircle className="w-5 h-5 ml-70" />
              {loading ? "Adding..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{
  icon: React.ReactNode;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}> = ({ icon, name, type, value, onChange, placeholder, required }) => {
  return (
    <div className="flex items-center border p-3 rounded-lg bg-gray-50 w-full">
      <span className="text-[#D69E2E]">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full outline-none ml-3 bg-transparent"
      />
    </div>
  );
};

export default AddEmployee;
