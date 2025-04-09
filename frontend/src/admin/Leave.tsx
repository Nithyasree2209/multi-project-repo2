
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AdminSidebar from "./Sidebar";

interface LeaveRequest {
  _id: string;
  employeeName: string;
  employeeEmail: string;
  reason: string;
  startDate: string;
  endDate: string;
  status?: string;
}

const AdminLeave = () => {
  const [leaves, setLeaves] = useState<LeaveRequest[]>([]);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  useEffect(() => {
    fetchLeaves();
    loadDeletedLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/leave");
      const data = await response.json();
      setLeaves(data);
    } catch (error) {
      console.error("Error fetching leaves:", error);
    }
  };

  const loadDeletedLeaves = () => {
    const deleted = localStorage.getItem("deletedLeaves");
    if (deleted) {
      setDeletedIds(JSON.parse(deleted));
    }
  };

  const updateLeaveStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/leave/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update leave status");
      }

      setLeaves((prevLeaves) =>
        prevLeaves.map((leave) =>
          leave._id === id ? { ...leave, status } : leave
        )
      );
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };

  const deleteLeaveFromUI = (id: string) => {
    const updatedDeletedIds = [...deletedIds, id];
    setDeletedIds(updatedDeletedIds);
    localStorage.setItem("deletedLeaves", JSON.stringify(updatedDeletedIds));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-full bg-gray-800 text-white">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <div className="fixed w-full z-10">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="p-5 pt-20 overflow-y-auto h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Admin Leave Requests</h1>

          {/* Grid for Leave Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Accepted Leaves */}
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-3">Accepted Leaves</h2>
              {leaves
                .filter((leave) => leave.status === "Accepted" && !deletedIds.includes(leave._id))
                .map((leave) => (
                  <div key={leave._id} className="bg-white p-3 rounded-lg shadow mb-2 flex justify-between">
                    <div>
                      <p><strong>Name:</strong> {leave.employeeName}</p>
                      <p><strong>Email:</strong> {leave.employeeEmail}</p>
                      <p><strong>Reason:</strong> {leave.reason}</p>
                      <p><strong>Start:</strong> {leave.startDate}</p>
                      <p><strong>End:</strong> {leave.endDate}</p>
                    </div>
                    {/* Delete Icon */}
                    <button onClick={() => deleteLeaveFromUI(leave._id)} className="text-red-500 hover:text-red-700">
                      🗑️
                    </button>
                  </div>
                ))}
            </div>

            {/* Pending Leaves */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-yellow-700 mb-3">Pending Leaves</h2>
              {leaves
                .filter((leave) => (!leave.status || leave.status === "Pending") && !deletedIds.includes(leave._id))
                .map((leave) => (
                  <div key={leave._id} className="bg-white p-3 rounded-lg shadow mb-2 flex justify-between">
                    <div>
                      <p><strong>Name:</strong> {leave.employeeName}</p>
                      <p><strong>Email:</strong> {leave.employeeEmail}</p>
                      <p><strong>Reason:</strong> {leave.reason}</p>
                      <p><strong>Start:</strong> {leave.startDate}</p>
                      <p><strong>End:</strong> {leave.endDate}</p>
                      <div className="flex gap-2 mt-2">
                        <button onClick={() => updateLeaveStatus(leave._id, "Accepted")} className="bg-green-500 text-white px-4 py-2 rounded">
                          Accept
                        </button>
                        <button onClick={() => updateLeaveStatus(leave._id, "Rejected")} className="bg-red-500 text-white px-4 py-2 rounded">
                          Reject
                        </button>
                      </div>
                    </div>
                    {/* Delete Icon */}
                    <button onClick={() => deleteLeaveFromUI(leave._id)} className="text-red-500 hover:text-red-700">
                      🗑️
                    </button>
                  </div>
                ))}
            </div>

            {/* Rejected Leaves */}
            <div className="bg-red-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-red-700 mb-3">Rejected Leaves</h2>
              {leaves
                .filter((leave) => leave.status === "Rejected" && !deletedIds.includes(leave._id))
                .map((leave) => (
                  <div key={leave._id} className="bg-white p-3 rounded-lg shadow mb-2 flex justify-between">
                    <div>
                      <p><strong>Name:</strong> {leave.employeeName}</p>
                      <p><strong>Email:</strong> {leave.employeeEmail}</p>
                      <p><strong>Reason:</strong> {leave.reason}</p>
                      <p><strong>Start:</strong> {leave.startDate}</p>
                      <p><strong>End:</strong> {leave.endDate}</p>
                    </div>
                    {/* Delete Icon */}
                    <button onClick={() => deleteLeaveFromUI(leave._id)} className="text-red-500 hover:text-red-700">
                      🗑️
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* No Leave Requests Message */}
          {leaves.filter((leave) => !deletedIds.includes(leave._id)).length === 0 && (
            <p className="text-center mt-6 text-gray-600 text-lg">No leave requests found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLeave;
