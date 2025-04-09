import { useEffect, useState } from "react";
import axios from "axios";
import { MdTableRestaurant, MdPayment } from "react-icons/md";

function Oflineeee() {
  const [offlineOrders, setOfflineOrders] = useState([]);

  useEffect(() => {
    const fetchOfflineOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/starterorder/starter-orders/Offline");
        setOfflineOrders(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch offline orders:", err);
      }
    };
    fetchOfflineOrders();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
        Offline Staters Orders
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {offlineOrders.map((order: any) => (
          <div key={order._id} className="bg-white shadow-lg rounded-xl p-4 border border-green-200 hover:shadow-xl transition duration-300">
            {/* Table Number */}
            <div className="flex items-center gap-2 mb-2 bg-green-100 p-2 rounded">
              <MdTableRestaurant size={22} className="text-green-600" />
              <p className="font-semibold text-green-800">Table No: {order.tableNumber}</p>
            </div>

            {/* Payment Mode */}
            <div className="flex items-center gap-2 mb-3 bg-blue-100 p-2 rounded">
              <MdPayment size={22} className="text-blue-600" />
              <p className="text-blue-800 font-medium">Payment: {order.paymentMode}</p>
            </div>

            {/* Items */}
            <div>
              <p className="text-pink-700 font-semibold mb-1">Items:</p>
              <ul className="list-disc list-inside text-pink-600">
                {order.selectedItems.map((item: any, idx: number) => (
                  <li key={idx}>
                    {item.name} x {item.count}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Oflineeee;
