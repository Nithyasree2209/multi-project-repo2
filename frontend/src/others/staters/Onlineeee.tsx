import { useEffect, useState } from "react";
import axios from "axios";

function Onlineeee() {
  const [onlineOrders, setOnlineOrders] = useState([]);

  useEffect(() => {
    const fetchOnlineOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/starterorder/starter-orders/Online");
        setOnlineOrders(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch online orders:", err);
      }
    };
    fetchOnlineOrders();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Online Orders</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {onlineOrders.map((order: any) => (
          <div key={order._id} className="bg-white shadow-lg rounded-lg p-4 border">
            <p><strong>Table No:</strong> {order.tableNumber}</p>
            <p><strong>Order Type:</strong> {order.orderType}</p>
            <p><strong>Payment:</strong> {order.paymentMode}</p>
            <p className="mt-2 font-medium">Items:</p>
            <ul className="list-disc list-inside">
              {order.selectedItems.map((item: any, idx: number) => (
                <li key={idx}>{item.name} x {item.count}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Onlineeee;
