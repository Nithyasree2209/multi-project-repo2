
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Mail, Calendar, BedDouble, Trash2, User } from "lucide-react";
// import Navbar from "../admin/Navbar";
// import Sidebar from "./Osidebar";
// import Partyhall from "./partyhall/Partyhall";

// interface Booking {
//   _id: string;
//   name: string;
//   email: string;
//   checkin: string;
//   checkout: string;
//   roomtype: string;
// }

// const Room = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/bookings");
//         setBookings(response.data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };
//     fetchBookings();

//     const savedDeletedIds = JSON.parse(localStorage.getItem("deletedBookings") || "[]");
//     setDeletedIds(new Set(savedDeletedIds));
//   }, []);

//   const handleDelete = (id: string) => {
//     const updatedDeletedIds = new Set([...deletedIds, id]);
//     setDeletedIds(updatedDeletedIds);
//     localStorage.setItem("deletedBookings", JSON.stringify([...updatedDeletedIds]));
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-6 ml-64 sticky top-0 z-50 bg-white shadow">
//         <Navbar />
        
//         {/* === Room Bookings Section === */}
//         <h2 className="text-3xl font-bold mb-2 text-gray-800">🏨 Room Bookings</h2>

//         <div className="flex justify-center mb-6">
//           <h2 className="text-3xl font-extrabold text-center mb-6 mt-5 bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
//             Rooms
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {bookings.length > 0 ? (
//             bookings
//               .filter((booking) => !deletedIds.has(booking._id))
//               .map((booking) => (
//                 <div
//                   key={booking._id}
//                   className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all relative"
//                 >
//                   <h3 className="font-bold text-xl text-blue-700 flex items-center gap-2">
//                     <User className="text-blue-500" /> {booking.name}
//                   </h3>

//                   <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
//                     <Mail className="text-gray-500" /> {booking.email}
//                   </p>

//                   <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
//                     <Calendar className="text-green-500" />
//                     <span className="font-semibold">Check-in:</span>{" "}
//                     {new Date(booking.checkin).toLocaleDateString()}
//                   </p>

//                   <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
//                     <Calendar className="text-red-500" />
//                     <span className="font-semibold">Check-out:</span>{" "}
//                     {new Date(booking.checkout).toLocaleDateString()}
//                   </p>

//                   <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
//                     <BedDouble className="text-purple-500" />
//                     <span className="font-semibold">Room Type:</span>{" "}
//                     <span className="text-gray-900 font-medium">{booking.roomtype}</span>
//                   </p>

//                   <button
//                     onClick={() => handleDelete(booking._id)}
//                     className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
//                     title="Delete Booking"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               ))
//           ) : (
//             <p className="text-gray-700 text-center col-span-full">No bookings available</p>
//           )}
//         </div>

//         {/* === Party Hall Bookings Section === */}
//         <div className="mt-12">
//           <Partyhall />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Room;





import { useState, useEffect } from "react";
import axios from "axios";
import { Mail, Calendar, BedDouble, Trash2, User } from "lucide-react";
import Navbar from "../admin/Navbar";
import Sidebar from "./Osidebar";
import Partyhall from "./partyhall/Partyhall";

interface Booking {
  _id: string;
  name: string;
  email: string;
  checkin: string;
  checkout: string;
  roomtype: string;
}

const Room = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();

    const savedDeletedIds = JSON.parse(localStorage.getItem("deletedBookings") || "[]");
    setDeletedIds(new Set(savedDeletedIds));
  }, []);

  const handleDelete = (id: string) => {
    const updatedDeletedIds = new Set([...deletedIds, id]);
    setDeletedIds(updatedDeletedIds);
    localStorage.setItem("deletedBookings", JSON.stringify([...updatedDeletedIds]));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 h-screen flex flex-col">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* === Room Bookings Section === */}
          <h2 className="text-3xl font-bold mb-2 text-gray-800">🏨 Room Bookings</h2>

          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-extrabold text-center mb-6 mt-5 bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Rooms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.length > 0 ? (
              bookings
                .filter((booking) => !deletedIds.has(booking._id))
                .map((booking) => (
                  <div
                    key={booking._id}
                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all relative"
                  >
                    <h3 className="font-bold text-xl text-blue-700 flex items-center gap-2">
                      <User className="text-blue-500" /> {booking.name}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                      <Mail className="text-gray-500" /> {booking.email}
                    </p>

                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                      <Calendar className="text-green-500" />
                      <span className="font-semibold">Check-in:</span>{" "}
                      {new Date(booking.checkin).toLocaleDateString()}
                    </p>

                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                      <Calendar className="text-red-500" />
                      <span className="font-semibold">Check-out:</span>{" "}
                      {new Date(booking.checkout).toLocaleDateString()}
                    </p>

                    <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                      <BedDouble className="text-purple-500" />
                      <span className="font-semibold">Room Type:</span>{" "}
                      <span className="text-gray-900 font-medium">{booking.roomtype}</span>
                    </p>

                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                      title="Delete Booking"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))
            ) : (
              <p className="text-gray-700 text-center col-span-full">No bookings available</p>
            )}
          </div>

          {/* === Party Hall Bookings Section === */}
          <div className="mt-12">
            <Partyhall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
