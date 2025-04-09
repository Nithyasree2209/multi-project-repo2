import { useState } from "react";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";

const Salary = () => {
  const [salaryData, setSalaryData] = useState([
    { slNo: 1, date: "", name: "Bharathi", role: "", salary: 0, incentive: 0 },
    { slNo: 2, date: "", name: "Veyil", role: "", salary: 0, incentive: 0 },
    { slNo: 3, date: "", name: "Nithya", role: "", salary: 0, incentive: 0 },
  ]);

  const handleInputChange = (index: number, field: string, value: string | number) => {
    const updatedData = [...salaryData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setSalaryData(updatedData);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full overflow-hidden pl-64">
        <Navbar />
        <div className="p-5 w-full overflow-auto">
          <h2 className="text-2xl font-semibold mb-4">Employee Salary Details</h2>
          
          {/* Table Container with Rounded Borders */}
          <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
            <table className="w-full text-left divide-y divide-gray-300 rounded-xl overflow-hidden">
              
              {/* Table Header */}
              <thead className="bg-[#D69E2E] text-white">
                <tr>
                  <th className="px-4 py-3">Sl No</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Employee Name</th>
                  <th className="px-4 py-3">Employee Role</th>
                  <th className="px-4 py-3">Salary</th>
                  <th className="px-4 py-3">Incentive</th>
                  <th className="px-4 py-3">Total</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {salaryData.map((data, index) => (
                  <tr key={index} className="text-center bg-gray-50 hover:bg-[#f3d27a] transition-colors">
                    <td className="px-4 py-3">{data.slNo}</td>

                    {/* Date Input */}
                    <td className="px-4 py-3">
                      <input
                        type="date"
                        value={data.date}
                        onChange={(e) => handleInputChange(index, "date", e.target.value)}
                        className="p-2 rounded-md w-full text-center bg-white shadow-sm"
                      />
                    </td>

                    <td className="px-4 py-3">{data.name}</td>

                    {/* Role Input */}
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={data.role}
                        onChange={(e) => handleInputChange(index, "role", e.target.value)}
                        className="p-2 rounded-md w-full text-center bg-white shadow-sm"
                        placeholder="Enter Role"
                      />
                    </td>

                    {/* Salary Input */}
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={data.salary}
                        onChange={(e) => handleInputChange(index, "salary", Number(e.target.value))}
                        className="p-2 rounded-md w-full text-center bg-white shadow-sm"
                        placeholder="Enter Salary"
                      />
                    </td>

                    {/* Incentive Input */}
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={data.incentive}
                        onChange={(e) => handleInputChange(index, "incentive", Number(e.target.value))}
                        className="p-2 rounded-md w-full text-center bg-white shadow-sm"
                        placeholder="Enter Incentive"
                      />
                    </td>

                    {/* Total Salary */}
                    <td className="px-4 py-3 font-semibold">{data.salary + data.incentive}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
