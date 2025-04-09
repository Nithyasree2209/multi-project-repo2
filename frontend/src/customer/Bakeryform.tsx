
import React, { useState } from "react";
import axios from "axios";
import bakeryImg from "../assets/bakery.jpg"; // Import local image

const BakeryForm: React.FC = () => {
  const [tableNumber, setTableNumber] = useState("");
  const [orderType, setOrderType] = useState("Online");
  const [paymentMode, setPaymentMode] = useState("Online");
  const [items, setItems] = useState([
    { name: "Cake", selected: false, count: 1 },
    { name: "Pastry", selected: false, count: 1 },
    { name: "Bread", selected: false, count: 1 },
    { name: "Cookies", selected: false, count: 1 },
    { name: "Donut", selected: false, count: 1 }, // New
    { name: "Macaron", selected: false, count: 1 }, // New
    { name: "Pizza", selected: false, count: 1 }, // New
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedItems = items
      .filter((item) => item.selected)
      .map((item) => ({ name: item.name, count: item.count }));

    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    const formData = { tableNumber, orderType, paymentMode, selectedItems };

    try {
      await axios.post("http://localhost:5000/api/bakeryOrders/bakery-orders", formData);
      alert("Order submitted successfully!");

      // Reset form
      setTableNumber("");
      setOrderType("Online");
      setPaymentMode("Online");
      setItems(items.map((item) => ({ ...item, selected: false, count: 1 })));
    } catch (err) {
      console.error("Error submitting:", err);
      alert("Failed to submit order.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Bakery Order Form</h2>
        <img src={bakeryImg} alt="Bakery" className="w-full h-40 object-cover rounded mb-4" />

        <form onSubmit={handleSubmit}>
          {/* Table Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Table Number</label>
            <input
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter table number"
              required
            />
          </div>

          {/* Order Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Order Type</label>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* Payment Mode */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Payment Mode</label>
            <select
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
            >
              <option value="Online">Online</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          {/* Select Items */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Items</label>
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() =>
                      setItems(
                        items.map((itm, i) =>
                          i === index ? { ...itm, selected: !itm.selected } : itm
                        )
                      )
                    }
                    className="mr-2"
                  />
                  {item.name}
                </label>
                {item.selected && (
                  <input
                    type="number"
                    value={item.count}
                    onChange={(e) =>
                      setItems(
                        items.map((itm, i) =>
                          i === index ? { ...itm, count: parseInt(e.target.value) || 1 } : itm
                        )
                      )
                    }
                    min="1"
                    className="w-16 border p-1 rounded-md"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BakeryForm;
