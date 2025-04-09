
import { useNavigate } from "react-router-dom";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";
import profilephoto from "../assets/profile.png";
import { useState, useEffect } from "react";
import axios from "axios";

interface Menu {
  _id: string;
  breakfast?: string;
  lunch: string;
  dinner: string;
}

interface User {
  email: string;
  loginTime: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loggedInUsers, setLoggedInUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    const fetchLoggedInUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/logins");
        setLoggedInUsers(response.data);
      } catch (error) {
        console.error("Error fetching logged-in users:", error);
      }
    };

    fetchMenu();
    fetchLoggedInUsers();
  }, []);

  const handleDeleteMenu = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      setMenus((prevMenus) => prevMenus.filter((menu) => menu._id !== id));
    } catch (error) {
      console.error("Error deleting menu:", error);
    }
  };

  const handleDeleteLogin = (email: string) => {
    setLoggedInUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  };

  return (
    <div className="flex h-screen bg-[#FAF3E0]">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[250px] pt-16">
        <Navbar />
        <div className="bg-[#FAF3E0] overflow-y-auto h-full p-6">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8 max-w-5xl mx-auto flex items-center gap-6 w-full">
            <img
              src={profilephoto}
              alt="Admin"
              className="w-20 h-20 rounded-full object-cover border-2 border-[#B8860B]"
            />
            <div>
              <h5 className="text-2xl font-bold text-[#4B3621]">Welcome to Admin Dashboard</h5>
              <p className="text-gray-700">"Luxury is not about money, it's about experience."</p>
            </div>
            <div className="ml-auto flex flex-col gap-4">
              <button
                onClick={() => navigate("/add-menu")}
                className="px-5 py-2 bg-[#B8860B] text-white rounded-lg hover:bg-[#9C760C] shadow-md"
              >
                Add New Menu 🍽️
              </button>
              <button
                onClick={() => navigate("/add-employee")}
                className="px-5 py-2 bg-[#B8860B] text-white rounded-lg hover:bg-[#9C760C] shadow-md"
              >
                Add Employee 👨‍💼
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
              <h2 className="text-xl font-semibold text-[#4B3621] p-4 bg-[#B8860B] text-white">
                Today's Hotel Menu
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="bg-[#9C760C] text-white">
                    <th className="p-3">Breakfast</th>
                    <th className="p-3">Lunch</th>
                    <th className="p-3">Dinner</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.length > 0 ? (
                    menus.map((menu) => (
                      <tr key={menu._id} className="text-center hover:bg-[#FDE68A]">
                        <td className="p-2">{menu.breakfast || "N/A"}</td>
                        <td className="p-2">{menu.lunch}</td>
                        <td className="p-2">{menu.dinner}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteMenu(menu._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            ❌
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-4 text-center text-gray-500">
                        No menu available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-white w-full shadow-lg mt-6 rounded-lg overflow-hidden">
              <h2 className="text-xl font-semibold text-[#4B3621] p-4 bg-[#B8860B] text-white">
                Logged-in Users
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="bg-[#9C760C] text-white">
                    <th className="p-3">Email</th>
                    <th className="p-3">Login Time</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loggedInUsers.length > 0 ? (
                    loggedInUsers.map((user) => (
                      <tr key={user.email} className="text-center hover:bg-[#FDE68A]">
                        <td className="p-2">{user.email}</td>
                        <td className="p-2">{new Date(user.loginTime).toLocaleString()}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteLogin(user.email)}
                            className="text-red-600 hover:text-red-800"
                          >
                            ❌
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-4 text-center text-gray-500">
                        No users logged in
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
