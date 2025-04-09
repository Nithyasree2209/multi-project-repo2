import { useEffect, useState } from "react";
import Navbar from "./Navbarr";
import Sidebar from "./Sidebarr";
import LeaveForm from "./Leaveform";

interface LeaveData {
  _id: string;
  employeeName: string;
  employeeEmail: string;
  reason: string;
  startDate: string;
  endDate: string;
  status: string;
}

const Leave = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveData[]>([]);

  const fetchLeaveRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/leave");
      if (!response.ok) {
        throw new Error("Failed to fetch leave requests");
      }
      const data = await response.json();
      setLeaveRequests(data);
    } catch (error) {
      console.error("Error fetching leave requests:", error);
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Push content to the right to avoid overlap */}
      <div className="flex-1 ml-56">
        {/* Navbar - Fixed at the top */}
        <Navbar />

        <div className="p-6 pt-20">
          {/* Leave Form Section */}
          <div className="mb-8">
            <LeaveForm onLeaveSubmitted={fetchLeaveRequests} />
          </div>

          {/* Leave Requests Section */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 ml-8">My Leave Requests</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-8">
              {leaveRequests.map((leave) => (
                <div key={leave._id} className="p-5 bg-white shadow-md rounded-lg border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-700">{leave.employeeName}</h2>
                  <p className="text-gray-600 text-sm">{leave.employeeEmail}</p>
                  <p className="mt-2 font-medium text-gray-800">Reason: {leave.reason}</p>
                  <p className="text-sm text-gray-500">
                    From: <span className="font-semibold">{leave.startDate}</span> - To: <span className="font-semibold">{leave.endDate}</span>
                  </p>
                  <p
                    className={`mt-3 px-4 py-1 inline-block text-sm font-semibold rounded-full text-white ${
                      leave.status === "Pending"
                        ? "bg-yellow-500"
                        : leave.status === "Accepted"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {leave.status}
                  </p>
                </div>
              ))}
            </div>

            {leaveRequests.length === 0 && (
              <p className="text-center mt-6 text-gray-600 text-lg">No leave requests found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
