import { Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbarr = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
      {/* Welcome Message */}
      <h1 className="text-xl font-semibold">Welcome Employee!</h1>

      {/* Notification & Logout Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-full hover:bg-purple-700">
          <Bell className="w-6 h-6" />
          {/* Notification Badge (can be dynamic later) */}
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Logout Button */}
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg flex items-center gap-2">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbarr;
