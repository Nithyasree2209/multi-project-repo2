import React, { useState, useEffect } from "react";
import CustomerNavbar from "../../customer/Customernavbar";

// Offline Orders Page
const Offline = () => {
  const [offlineOrders, setOfflineOrders] = useState<any[]>([]);

  useEffect(() => {
    // Fetch offline orders from the server
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders/Offline");
        const data = await response.json();
        setOfflineOrders(data);
      } catch (error) {
        console.error("Error fetching offline orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <CustomerNavbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Offline Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offlineOrders.length > 0 ? (
            offlineOrders.map((order: any) => (
              <div
                key={order._id}
                className="bg-white p-4 border border-gray-300 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg"
              >
                <div className="flex">
                  {/* Left-side content (bold) */}
                  <div className="flex-1 pr-4">
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">{order.toy.title}</h4>
                    <p className="text-gray-600 mb-1 font-bold">💲 Price: ${order.toy.price}</p>
                    <p className="text-gray-600 mb-1 font-bold">⭐ Rating: {order.toy.rating}</p>
                    <p className="text-gray-600 mb-1 font-bold">👤 Name: {order.name}</p>
                    <p className="text-gray-600 mb-1 font-bold">📞 Phone: {order.phone}</p>
                    <p className="text-gray-600 mb-1 font-bold">🏠 Address: {order.address}</p>
                  </div>

                  {/* Right-side content */}
                  <div className="flex-1 pl-4">
                    {/* Toy Image */}
                    <img
                      src={order.toy.image}
                      alt={order.toy.title}
                      className="w-full h-40 object-cover mb-4 rounded-md"
                    />
                    {/* Bolded Order Type and Payment Type */}
                    <p className="text-gray-600 mb-1 flex items-center font-bold">
                      <span className="mr-2">📦</span> Order Type: {order.orderType}
                    </p>
                    <p className="text-gray-600 mb-1 flex items-center font-bold">
                      <span className="mr-2">💳</span> Payment Type: {order.paymentType}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No offline orders available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offline;
