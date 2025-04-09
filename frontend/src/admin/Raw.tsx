import { useEffect, useState } from "react";
import Sidebar from "../admin/Sidebar";
import Navbar from "../admin/Navbar";

interface Expense {
  _id: string;
  date: string;
  thingsName: string;
  pricePerKg: string;
  totalKg: string;
  totalAmount: string;
  employeeName: string;
}

function Raw() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/expences");
        if (response.ok) {
          const data = await response.json();
          setExpenses(data);
        } else {
          console.error("Failed to fetch expenses");
        }
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchExpenses();
  }, []);

  // Function to delete a card from UI only
  const handleDelete = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense._id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 pt-20">  {/* Added pt-20 to prevent content hiding */}
        <Navbar />

        {/* Page Content */}
        <div className="p-5">
          <h1 className="text-2xl font-bold text-gray-800">Daily Wages</h1>

          {/* Increased space above cards using mt-8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {expenses.map((expense) => (
              <div
                key={expense._id}
                className="bg-white p-5 shadow-lg rounded-lg border border-gray-300 relative"
              >
                {/* Stylish h2 with gradient text */}
                <h2 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  {expense.thingsName}
                </h2>

                <p className="mt-2">
                  <span className="font-bold text-blue-600">📅 Date:</span>{" "}
                  {expense.date}
                </p>
                <p>
                  <span className="font-bold text-purple-600">👤 Employee:</span>{" "}
                  {expense.employeeName}
                </p>
                <p>
                  <span className="font-bold text-green-600">💰 Price per Kg:</span>{" "}
                  ₹{expense.pricePerKg}
                </p>
                <p>
                  <span className="font-bold text-orange-600">⚖️ Total Kg:</span>{" "}
                  {expense.totalKg} Kg
                </p>
                <p className="font-bold text-red-600 mt-3 border-t pt-2">
                  🏷️ Total Amount: ₹{expense.totalAmount}
                </p>

                {/* Delete Button with Golden Yellow Color */}
                <button
                  onClick={() => handleDelete(expense._id)}
                  className="mt-4 w-full bg-[#D69E2E] hover:bg-[#B8860B] text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  ❌ Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Raw;
