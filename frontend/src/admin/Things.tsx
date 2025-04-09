
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";
import { CookingPot } from "lucide-react";

// ✅ Interface for Thing
interface Thing {
  _id: string;
  serialNo: number;
  thingsName: string;
  noOfThings: number;
  shopName: string;
  shopLocation: string;
  employeeName: string;
}

// ✅ Convert Number to Roman Numerals
const convertToRoman = (num: number): string => {
  const romanNumerals: { [key: number]: string } = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII",
    9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX",
    70: "LXX", 80: "LXXX", 90: "XC", 100: "C"
  };

  if (romanNumerals[num]) return romanNumerals[num];

  let roman = "";
  const keys = Object.keys(romanNumerals)
    .map(Number)
    .sort((a, b) => b - a);

  for (const key of keys) {
    while (num >= key) {
      roman += romanNumerals[key];
      num -= key;
    }
  }

  return roman;
};

function Things() {
  const [thingsData, setThingsData] = useState<Thing[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // ✅ Fetch Things Data from Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/things")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setThingsData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch things data");
        setLoading(false);
      });
  }, []);

  // ✅ Remove Item from UI State (Does Not Delete from MongoDB)
  const handleRemoveFromUI = (id: string) => {
    setThingsData(thingsData.filter((thing) => thing._id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64 pt-20 px-6 overflow-hidden">
        <Navbar />

        {/* ✅ Centering Add Button */}
        <div className="flex justify-end">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#D69E2E] text-white rounded-md hover:bg-[#B68A1A] transition"
            onClick={() => navigate("/add-things")}
          >
            <CookingPot size={20} /> ADD THINGS
          </button>
        </div>

        {/* ✅ Table Container */}
        <div className="mt-5 bg-white p-6 shadow-lg rounded-lg overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-center text-[#D69E2E]">Things List</h2>

          {/* ✅ Loading & Error Handling */}
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : thingsData.length === 0 ? (
            <p className="text-center text-gray-500">No Data Available</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-[#D69E2E] text-white text-sm uppercase">
                    <th className="border border-gray-300 px-4 py-2 rounded-tl-lg">S No</th>
                    <th className="border border-gray-300 px-4 py-2">Things Name</th>
                    <th className="border border-gray-300 px-4 py-2">No of Things</th>
                    <th className="border border-gray-300 px-4 py-2">Shop Name</th>
                    <th className="border border-gray-300 px-4 py-2">Shop Location</th>
                    <th className="border border-gray-300 px-4 py-2">Employee Name</th>
                    <th className="border border-gray-300 px-4 py-2 rounded-tr-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {thingsData.map((thing) => (
                    <tr key={thing._id} className="text-center border-t hover:bg-[#FDE68A] transition duration-300">
                      <td className="border border-gray-300 px-4 py-2">{convertToRoman(thing.serialNo)}</td>
                      <td className="border border-gray-300 px-4 py-2">{thing.thingsName}</td>
                      <td className="border border-gray-300 px-4 py-2">{thing.noOfThings}</td>
                      <td className="border border-gray-300 px-4 py-2">{thing.shopName}</td>
                      <td className="border border-gray-300 px-4 py-2">{thing.shopLocation}</td>
                      <td className="border border-gray-300 px-4 py-2">{thing.employeeName}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleRemoveFromUI(thing._id)}
                          className="bg-white text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                        >
                          ❌
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Things;
