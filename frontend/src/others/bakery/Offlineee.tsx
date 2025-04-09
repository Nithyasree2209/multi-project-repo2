import { useEffect, useState } from "react";
import axios from "axios";
import { MdTableRestaurant, MdPayment, MdFastfood } from "react-icons/md";

interface Item {
  name: string;
  count: number;
}

interface BakeryOrder {
  _id: string;
  tableNumber: string;
  orderType: string;
  paymentMode: string;
  selectedItems: Item[];
  createdAt: string;
}

function Offlineeee() {
  const [offlineOrders, setOfflineOrders] = useState<BakeryOrder[]>([]);

  useEffect(() => {
    const fetchOfflineOrders = async () => {
      try {
        const res = await axios.get<BakeryOrder[]>("http://localhost:5000/api/bakeryOrders/Offline");
        setOfflineOrders(res.data);
      } catch (error) {
        console.error("Failed to fetch offline orders:", error);
      }
    };

    fetchOfflineOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Offline Bakery Orders</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offlineOrders.map((order) => (
          <div key={order._id} className="bg-white shadow-lg rounded-lg p-5">
            <div className="mb-3 flex items-center space-x-2 text-lg font-semibold">
              <MdTableRestaurant className="text-blue-500" />
              <span>Table No: {order.tableNumber}</span>
            </div>
            <div className="mb-2 flex items-center space-x-2">
              <MdPayment className="text-green-500" />
              <span>Payment: {order.paymentMode}</span>
            </div>
            <div className="mb-2 flex items-center space-x-2">
              <MdFastfood className="text-orange-500" />
              <span>Items:</span>
            </div>
            <ul className="list-disc list-inside">
              {order.selectedItems.map((item, index) => (
                <li key={index}>
                  {item.name} × {item.count}
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-3">
              Ordered on: {new Date(order.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offlineeee;
