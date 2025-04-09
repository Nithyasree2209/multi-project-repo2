
import { useState } from "react";
import axios from "axios";  // Import axios
import CustomerNavbar from "./Customernavbar";  // Your custom navbar component

const JuiceOrderForm = () => {
  const [tableNumber, setTableNumber] = useState("");
  const [orderType, setOrderType] = useState("online");  // State for order type
  const [paymentMode, setPaymentMode] = useState("online");  // State for payment mode
  const [juices, setJuices] = useState([
    { name: "Apple Juice", selected: false, count: 1 },
    { name: "Fruit Juice", selected: false, count: 1 },
    { name: "Mango Juice", selected: false, count: 1 },
    { name: "Pineapple Juice", selected: false, count: 1 },
    { name: "Beatroot Juice", selected: false, count: 1 },
    { name: "Coconut Juice", selected: false, count: 1 },
    { name: "Grape Juice", selected: false, count: 1 },
    { name: "Guava Juice", selected: false, count: 1 },
  ]);

  // Handle checkbox change (when user selects/unselects a juice)
  const handleCheckboxChange = (index: number) => {
    setJuices((prevJuices) =>
      prevJuices.map((juice, i) =>
        i === index ? { ...juice, selected: !juice.selected } : juice
      )
    );
  };

  // Handle the count change for a juice
  const handleCountChange = (index: number, value: number) => {
    setJuices((prevJuices) =>
      prevJuices.map((juice, i) =>
        i === index ? { ...juice, count: value } : juice
      )
    );
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter selected juices for the order
    const selectedJuices = juices.filter((juice) => juice.selected);
    
    // Prepare the order data to be sent to the backend
    const orderData = {
      tableNumber,
      juices: selectedJuices,
      orderType, // Order type (online/offline)
      paymentMode, // Payment mode (online/cash_on_delivery)
    };

    try {
      // Sending POST request to backend to save the order
      const response = await axios.post("http://localhost:5000/api/orders", orderData);
      
      // If successful, display the success message and reset the form
      console.log("Order submitted:", response.data);
      alert("Order submitted successfully!");
      
      // Optionally reset the form here
      setTableNumber("");
      setOrderType("online");
      setPaymentMode("online");
      setJuices(juices.map(juice => ({ ...juice, selected: false })));

    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order.");
    }
  };

  return (
    <div>
      <CustomerNavbar />
      <form onSubmit={handleSubmit} className="p-5 bg-white shadow-md rounded-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Juice Order Form</h2>

        {/* Table Number Input */}
        <div className="mb-4">
          <label className="block font-medium">Table Number:</label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Order Type Dropdown */}
        <div className="mb-4">
          <label className="block font-medium">Order Type:</label>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        {/* Mode of Payment Dropdown */}
        <div className="mb-4">
          <label className="block font-medium">Mode of Payment:</label>
          <select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="online">Online</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Juice Checkboxes with Count */}
        <div className="mb-4">
          <label className="block font-medium">Select Juices:</label>
          {juices.map((juice, index) => (
            <div key={juice.name} className="flex items-center gap-4 mt-2">
              <input
                type="checkbox"
                checked={juice.selected}
                onChange={() => handleCheckboxChange(index)}
                className="w-4 h-4"
              />
              <span className="flex-1">{juice.name}</span>
              {juice.selected && (
                <input
                  type="number"
                  value={juice.count}
                  min="1"
                  onChange={(e) => handleCountChange(index, Number(e.target.value))}
                  className="w-16 p-1 border rounded-md text-center"
                />
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default JuiceOrderForm;

