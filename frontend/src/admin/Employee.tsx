
import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";

type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  doj: string;
  gender: string;
  address: string;
  position: string;
};

const Employee = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get deleted IDs from localStorage
  const getDeletedIds = (): string[] => {
    const stored = localStorage.getItem("deletedEmployeeIds");
    return stored ? JSON.parse(stored) : [];
  };

  const saveDeletedIds = (ids: string[]) => {
    localStorage.setItem("deletedEmployeeIds", JSON.stringify(ids));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth");

        // Filter out deleted users
        const deletedIds = getDeletedIds();
        const filteredUsers = response.data.filter(
          (user: UserType) => !deletedIds.includes(user._id)
        );

        setUsers(filteredUsers);
        setLoading(false);
      } catch (error: any) {
        setError("Failed to fetch employees.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user._id !== id);
    setUsers(updatedUsers);

    const deletedIds = getDeletedIds();
    deletedIds.push(id);
    saveDeletedIds(deletedIds);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="p-6 overflow-auto h-[calc(100vh-4rem)] ml-[16rem]">
          <h1 className="text-2xl font-bold mb-4">Employee Management</h1>

          <div className="mt-6 bg-white w-full shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold text-[#4B3621] p-4 bg-[#B8860B] text-white">
              Employee List
            </h2>

            {loading ? (
              <p className="text-blue-500 p-4">Loading...</p>
            ) : error ? (
              <p className="text-red-500 p-4">{error}</p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-[#9C760C] text-white text-left">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">DOB</th>
                    <th className="p-3">DOJ</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Position</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr
                        key={user._id}
                        className="hover:bg-[#FDE68A] text-sm text-left"
                      >
                        <td className="p-3">{user.name}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">{user.phone}</td>
                        <td className="p-3">
                          {new Date(user.dob).toLocaleDateString()}
                        </td>
                        <td className="p-3">
                          {new Date(user.doj).toLocaleDateString()}
                        </td>
                        <td className="p-3">{user.gender}</td>
                        <td className="p-3">{user.address}</td>
                        <td className="p-3">{user.position}</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="text-red-500 hover:text-red-700"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className="p-4 text-center text-gray-500">
                        No employees found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;

