import { NavLink } from "react-router-dom";
import { LayoutDashboard, Briefcase, Megaphone, Package, DollarSign } from "lucide-react";

function Sidebarr() {
  return (
    <div className="fixed top-0 left-0 h-screen w-56 bg-gray-900 text-white flex flex-col p-5 shadow-lg">
      {/* Sidebar Header */}
      <h2 className="text-xl font-bold mb-6">Employee Panel</h2>

      {/* Sidebar Menu */}
      <nav className="space-y-4">
        <NavLink to="/employee/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/my-profile" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md">
          <Briefcase size={20} />
          <span>My Profile</span>
        </NavLink>
        <NavLink to="/employee/leaveform" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md">
          <Megaphone size={20} />
          <span>Apply for Leave</span>
        </NavLink>
        <NavLink to="/employee/salary-details" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md">
          <Package size={20} />
          <span>Salary Details</span>
        </NavLink>
        <NavLink to="/employee/Expences" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md">
          <Package size={20} />
          <span>Expences</span>
        </NavLink>
        <NavLink to="/employee/settings" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md">
          <DollarSign size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebarr;
