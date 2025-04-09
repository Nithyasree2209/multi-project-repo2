
import { Trash } from 'lucide-react'; // Import Trash icon
import { useState, useEffect } from 'react';
import CustomerNavbar from '../../customer/Customernavbar';

const Online = () => {
  // Initialize state to store online orders
  const [onlineOrders, setOnlineOrders] = useState<any[]>([]);

  // Fetch online orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Assuming the backend is running locally on port 5000
        const response = await fetch('http://localhost:5000/api/orders/Online');
        const data = await response.json();

        // Check if data is not empty and set it
        if (Array.isArray(data)) {
          setOnlineOrders(data); // Set the fetched orders to state
        } else {
          console.error('Received invalid data from the API:', data);
        }
      } catch (error) {
        console.error('Error fetching online orders:', error);
      }
    };

    fetchOrders(); // Call the function to fetch orders on component mount
  }, []); // Empty dependency array ensures it runs once when the component mounts

  // Function to handle the delete action (remove order from UI only)
  const handleDelete = (orderId: string) => {
    // Remove the order from the state (UI only)
    const updatedOrders = onlineOrders.filter((order) => order._id !== orderId);
    setOnlineOrders(updatedOrders); // Update the state with the filtered orders

    // Save deleted orders in localStorage (to persist across reloads)
    const deletedOrders = JSON.parse(localStorage.getItem('deletedOrders') || '[]');
    deletedOrders.push(orderId);
    localStorage.setItem('deletedOrders', JSON.stringify(deletedOrders));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <CustomerNavbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Online Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {onlineOrders.length > 0 ? (
            onlineOrders.map((order: any) => (
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

                {/* Delete Button */}
                <div className="flex mt-4 justify-center">
                  <button
                    onClick={() => handleDelete(order._id)} // Trigger delete on click
                    className="bg-red-500 text-white p-2 rounded-md flex items-center"
                  >
                    <Trash className="w-5 h-5 mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No online orders available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Online;


