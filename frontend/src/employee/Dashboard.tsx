
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaUtensils, FaMoneyBillWave, FaShoppingCart, FaTable, FaEdit, FaTrash } from "react-icons/fa"; // Import icons
// import Sidebarr from "./Sidebarr";
// import Navbarr from "./Navbarr";
// import chef from "../assets/cheff.png"; // Import local image

// // Define the Menu type
// interface MenuType {
//   breakfast: string;
//   lunch: string;
//   dinner: string;
// }

// // Define the Order type
// interface Order {
//   _id: string;
//   tableNumber: string;
//   orderType: string;
//   paymentMode: string;
//   selectedItems: { name: string; count: number }[];
// }

// const Dashboard = () => {
//   const [menus, setMenus] = useState<MenuType[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const fetchMenus = async () => {
//       try {
//         const response = await axios.get<MenuType[]>("http://localhost:5000/api/menu");
//         setMenus(response.data);
//       } catch (error) {
//         console.error("Failed to fetch menu:", error);
//       }
//     };

//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get<Order[]>("http://localhost:5000/api/bakeryOrders/bakery-orders");
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Failed to fetch bakery orders:", error);
//       }
//     };

//     fetchMenus();
//     fetchOrders();
//   }, []);

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Navbar */}
//       <Navbarr />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebarr />

//         {/* Dashboard Content */}
//         <div className="flex-1 pt-6 ml-60 mt-10 relative">
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
//             Employee Dashboard
//           </h1>

//           {/* Menu Table Wrapper */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-3/4">
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Today's Menu
//             </h2>
//             <table className="w-full border rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-[#D69E2E] text-white text-lg">
//                   <th className="p-3">Breakfast</th>
//                   <th className="p-3">Lunch</th>
//                   <th className="p-3">Dinner</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {menus.length > 0 ? (
//                   menus.map((menu, index) => (
//                     <tr
//                       key={index}
//                       className="text-center text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 hover:bg-[#f3d27a] dark:hover:bg-gray-600 transition"
//                     >
//                       <td className="p-3">{menu.breakfast || "N/A"}</td>
//                       <td className="p-3">{menu.lunch || "N/A"}</td>
//                       <td className="p-3">{menu.dinner || "N/A"}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={3} className="p-4 text-center text-gray-500 dark:text-gray-400">
//                       No menu available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Bakery Orders Section */}
//           <div className="mt-10">
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Recent Bakery Orders
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {orders.length > 0 ? (
//                 orders.map((order) => (
//                   <div
//                     key={order._id}
//                     className="bg-white p-5 rounded-xl shadow-md relative transition transform hover:scale-105 hover:shadow-lg"
//                   >
//                     {/* Delete Icon in Top-Right */}
//                     <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">
//                       <FaTrash />
//                     </button>

//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
//                       <FaTable className="text-[#D69E2E]" /> Table: {order.tableNumber}
//                     </h3>
//                     <p className="text-sm text-gray-800 dark:text-gray-300 flex items-center gap-2">
//                     <FaUtensils className="text-green-500" />
//                       <span className="font-semibold">Order Type:</span>
//                       {order.orderType}
//                     </p>
//                     <p className="text-sm text-gray-800 dark:text-gray-300 flex items-center gap-2">
//                     <FaMoneyBillWave className="text-blue-500" />
//                       <span className="font-semibold">Payment:</span>
//                        {order.paymentMode}
//                     </p>
//                     <h4 className="mt-3 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
//                       <FaShoppingCart className="text-red-500" /> Items:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-4 mt-1">
//                       {order.selectedItems.map((item, index) => (
//                         <li key={index} className="text-sm">
//                           {item.name} - {item.count}
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Update Button with Icon */}
//                     <button
//                       className="mt-4 w-full flex items-center justify-center gap-2 bg-[#D69E2E] text-white py-2 rounded-lg font-semibold transition duration-300 hover:bg-[#b8860b] dark:hover:bg-[#a77d05]"
//                     >
//                       <FaEdit /> Update
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500 dark:text-gray-400">No orders available</p>
//               )}
//             </div>
//           </div>

//           {/* Chef Image (Positioned to Right) */}
//           <div className="absolute top-16 right-6 md:right-12">
//             <img
//               src={chef}
//               alt="Chef"
//               className="w-44 md:w-52 h-64 md:h-80 rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUtensils,
  FaMoneyBillWave,
  FaShoppingCart,
  FaTable,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Sidebarr from "./Sidebarr";
import Navbarr from "./Navbarr";
import chef from "../assets/cheff.png";

// Define the Menu type
interface MenuType {
  breakfast: string;
  lunch: string;
  dinner: string;
}

// Define the Order type
interface Order {
  _id: string;
  tableNumber: string;
  orderType: string;
  paymentMode: string;
  selectedItems: { name: string; count: number }[];
}

// Starter Order type
interface StarterOrder {
  _id: string;
  tableNumber: string;
  orderType: string;
  paymentMode: string;
  selectedItems: { name: string; count: number }[];
  createdAt: string;
}

const Dashboard = () => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [starterOrders, setStarterOrders] = useState<StarterOrder[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get<MenuType[]>("http://localhost:5000/api/menu");
        setMenus(response.data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get<Order[]>(
          "http://localhost:5000/api/bakeryOrders/bakery-orders"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch bakery orders:", error);
      }
    };

    const fetchStarterOrders = async () => {
      try {
        const response = await axios.get<StarterOrder[]>(
          "http://localhost:5000/api/starterorder/starter-orders"
        );
        setStarterOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch starter orders:", error);
      }
    };

    fetchMenus();
    fetchOrders();
    fetchStarterOrders();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Navbarr />
      <div className="flex flex-1">
        <Sidebarr />
        <div className="flex-1 pt-6 ml-60 mt-10 relative">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
            Employee Dashboard
          </h1>

          {/* Today's Menu Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Today's Menu
            </h2>
            <table className="w-full border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#D69E2E] text-white text-lg">
                  <th className="p-3">Breakfast</th>
                  <th className="p-3">Lunch</th>
                  <th className="p-3">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {menus.length > 0 ? (
                  menus.map((menu, index) => (
                    <tr
                      key={index}
                      className="text-center text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 hover:bg-[#f3d27a] dark:hover:bg-gray-600 transition"
                    >
                      <td className="p-3">{menu.breakfast || "N/A"}</td>
                      <td className="p-3">{menu.lunch || "N/A"}</td>
                      <td className="p-3">{menu.dinner || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-gray-500 dark:text-gray-400">
                      No menu available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Bakery Orders Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Bakery Orders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-white p-5 rounded-xl shadow-md relative transition transform hover:scale-105 hover:shadow-lg"
                  >
                    <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">
                      <FaTrash />
                    </button>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaTable className="text-[#D69E2E]" /> Table: {order.tableNumber}
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-gray-300 flex items-center gap-2">
                      <FaUtensils className="text-green-500" />
                      <span className="font-semibold">Order Type:</span> {order.orderType}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-300 flex items-center gap-2">
                      <FaMoneyBillWave className="text-blue-500" />
                      <span className="font-semibold">Payment:</span> {order.paymentMode}
                    </p>
                    <h4 className="mt-3 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaShoppingCart className="text-red-500" /> Items:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-4 mt-1">
                      {order.selectedItems.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item.name} - {item.count}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#D69E2E] text-white py-2 rounded-lg font-semibold transition duration-300 hover:bg-[#b8860b] dark:hover:bg-[#a77d05]">
                      <FaEdit /> Update
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No orders available</p>
              )}
            </div>
          </div>

          {/* ✅ Starter Orders Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Starter Orders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starterOrders.length > 0 ? (
                starterOrders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-white p-5 rounded-xl shadow-md relative transition transform hover:scale-105 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaTable className="text-[#D69E2E]" /> Table: {order.tableNumber}
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-gray-300 flex items-center gap-2">
                      <FaUtensils className="text-green-500" />
                      <span className="font-semibold">Order Type:</span> {order.orderType}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-300 flex items-center gap-2">
                      <FaMoneyBillWave className="text-blue-500" />
                      <span className="font-semibold">Payment:</span> {order.paymentMode}
                    </p>
                    <h4 className="mt-3 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaShoppingCart className="text-red-500" /> Items:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-4 mt-1">
                      {order.selectedItems.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item.name} - {item.count}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No starter orders available</p>
              )}
            </div>
          </div>

          {/* Chef Image */}
          <div className="absolute top-16 right-6 md:right-12">
            <img
              src={chef}
              alt="Chef"
              className="w-44 md:w-52 h-64 md:h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
