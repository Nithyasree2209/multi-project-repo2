import { Bell, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <nav className="w-283 bg-[#2D3748] fixed ml-1 top-0 left-55 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Welcome Message */}
      <div className="flex items-center space-x-2">
  <User className="h-6 w-6 text-[#D69E2E] hover:text-red-800" />
  <h1 className="text-xl  font-semibold text-[#D69E2E]">Welcome To <span className="text-white font-bold">DNV HOTEL's</span></h1>
</div>
      {/* Notification & Logout Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-full hover:bg-purple-700">
          <Bell className="w-6 h-6" />
          {/* Notification Badge (can be dynamic later) */}
          <span className="absolute top-0 right-0 bg-[#D69E2E] text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Logout Button */}
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-[#D69E2E] hover:bg-red-700 rounded-lg flex items-center gap-2">
          <LogOut className="w-5 h- " />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;