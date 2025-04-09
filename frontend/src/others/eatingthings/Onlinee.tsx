
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerNavbar from "../../customer/Customernavbar";
import { MdDelete, MdRoomService, MdPayment, MdLocalBar } from "react-icons/md"; // ✅ Changed icons

const OnlineOrderrs = () => {
  const [onlineOrderrs, setOnlineOrderrs] = useState<any[]>([]);

  useEffect(() => {
    const fetchOnlineOrderrs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders/online");

        const deletedOrders = JSON.parse(localStorage.getItem("deletedOrders") || "[]");
        const filteredOrders = response.data.orders.filter(
          (order: any) => !deletedOrders.includes(order._id)
        );

        setOnlineOrderrs(filteredOrders);
      } catch (error) {
        console.error("Error fetching online orders:", error);
      }
    };

    fetchOnlineOrderrs();
  }, []);

  const handleDelete = (orderId: string) => {
    const deletedOrders = JSON.parse(localStorage.getItem("deletedOrders") || "[]");
    deletedOrders.push(orderId);
    localStorage.setItem("deletedOrders", JSON.stringify(deletedOrders));

    setOnlineOrderrs((prevOrders) =>
      prevOrders.filter((order) => order._id !== orderId)
    );
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="p-5">
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
          Online Juice Orders
        </h2>

        {onlineOrderrs.length === 0 ? (
          <p className="text-center text-gray-500">No online orders yet!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {onlineOrderrs.map((order: any) => (
              <div key={order._id} className="border p-4 rounded-lg shadow-md relative bg-white">
                <div className="flex items-center gap-2 mb-2 bg-blue-100 p-2 rounded">
                  <MdRoomService size={20} className="text-blue-600" />
                  <h3 className="font-bold text-blue-800">Table: {order.tableNumber}</h3>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <MdPayment size={20} className="text-green-600" />
                  <p className="text-gray-700">Payment Mode: {order.paymentMode}</p>
                </div>

                <div className="mb-2">
                  <div className="font-bold text-orange-700 mb-1">Juices:</div>
                  <ul>
                    {order.juices.map((juice: any, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-orange-600">
                        <MdLocalBar size={18} />
                        {juice.name} (x{juice.count})
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-2 right-2">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
     
    </div>
  );
};

export default OnlineOrderrs;
