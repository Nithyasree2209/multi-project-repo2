
import { useState } from "react";
import axios from "axios";
import CustomerNavbar from "./Customernavbar";

function Statersform() {
  const [tableNumber, setTableNumber] = useState("");
  const [orderType, setOrderType] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [items, setItems] = useState<Record<string, number>>({
    "Vegetable Soup": 0,
    "Chilli Paneer": 0,
    "Spring Roll": 0,
    "Paneer Pakoda": 0,
    "Potato Cheese Balls": 0,
    "Paneer Tikka": 0,
    "Aloo Pakoda": 0,
    "Chicken 65": 0,
  });

  const handleCheckboxChange = (item: string) => {
    setItems((prev) => ({
      ...prev,
      [item]: prev[item] === 0 ? 1 : 0,
    }));
  };

  const handleCountChange = (item: string, value: number) => {
    setItems((prev) => ({
      ...prev,
      [item]: value < 0 ? 0 : value,
    }));
  };

  const handleOrder = async () => {
    const selectedItems = Object.entries(items)
      .filter(([_, count]) => count > 0)
      .map(([name, count]) => ({ name, count }));

    const orderData = {
      tableNumber,
      orderType,
      paymentMode,
      selectedItems,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/starterorder/starter-order",
        orderData
      );
      console.log("✅ Order saved:", response.data);
      alert("Order placed successfully!");

      // Optional: Reset form after submission
      setTableNumber("");
      setOrderType("");
      setPaymentMode("");
      setItems((prev) =>
        Object.fromEntries(Object.keys(prev).map((key) => [key, 0]))
      );
    } catch (error: any) {
      console.error("❌ Error saving order:", error.response?.data || error.message);
      alert("Failed to place order!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <CustomerNavbar />

      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-center">Starters Order Form</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Table Number:</label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter table number"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Order Type:</label>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Order Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Mode of Payment:</label>
          <select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Payment Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Menu Items:</label>
          {Object.entries(items).map(([item, count]) => (
            <div key={item} className="flex items-center justify-between mb-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={count > 0}
                  onChange={() => handleCheckboxChange(item)}
                />
                <span>{item}</span>
              </label>
              {count > 0 && (
                <input
                  type="number"
                  min="0"
                  value={count}
                  onChange={(e) =>
                    handleCountChange(item, parseInt(e.target.value) || 0)
                  }
                  className="w-16 p-1 border rounded"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleOrder}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default Statersform;
