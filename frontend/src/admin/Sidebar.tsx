
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Briefcase, Megaphone, Package, DollarSign, Bolt, CalendarCheck, MoreHorizontal } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-56 h-screen fixed top-0 left-0 bg-[#2D3748] text-white flex flex-col p-4 shadow-lg">
      {/* Sidebar Header */}
      <h2 className="text-xl text-[#D69E2E] font-bold mb-6">Admin Panel</h2>

      {/* Sidebar Menu */}
      <nav className="space-y-3">
        <NavLink to="/admin/dashboard" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <LayoutDashboard className="text-[#D69E2E]" size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/employee" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <Users className="text-[#D69E2E]" size={20} />
          <span>Employees</span>
        </NavLink>
        <NavLink to="/admin/things" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <Briefcase className="text-[#D69E2E]" size={20} />
          <span>Things</span>
        </NavLink>
        <NavLink to="/admin/advertisement" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <Megaphone className="text-[#D69E2E]" size={20} />
          <span>Advertisement</span>
        </NavLink>
        <NavLink to="/admin/raw-material" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <Package className="text-[#D69E2E]" size={20} />
          <span>Raw Material</span>
        </NavLink>
        <NavLink to="/admin/salary" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <DollarSign className="text-[#D69E2E]" size={20} />
          <span>Salary</span>
        </NavLink>
        <NavLink to="/admin/electricity-bill" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <Bolt className="text-[#D69E2E]" size={20} />
          <span>Electricity Bill</span>
        </NavLink>
        <NavLink to="/admin/leave" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <CalendarCheck className="text-[#D69E2E]" size={20} />
          <span>Leave</span>
        </NavLink>
        <NavLink to="/admin/others" className="flex items-center gap-2 p-2 hover:bg-[#4A5568] hover:text-[#D69E2E] rounded-md">
          <MoreHorizontal className="text-[#D69E2E]" size={20} />
          <span>Others</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
