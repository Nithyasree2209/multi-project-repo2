// import image from "../assets/delux.jpg";
// import img from "../assets/suite.webp";
// import standard from "../assets/standard.jpg"
// import studio from "../assets/suite.webp"
// import CustomerNavbar from "./Customernavbar";
// import { Link } from "react-router-dom";

// function Rooms() {
//   return (
//     <div>
//       <CustomerNavbar />
//       <div className=" flex ml-5 mt-10">
//       <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
//         <img className="w-100 h-50 shadow-lg" src={studio} alt="Profile" />
//         <p className="mt-4 text-center">Studio Room</p>
//         <p className="mt-4 text-center">Per Day = 3000</p>
        
//         {/* Navigate to Dashboard on Login */}
//         <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
//           Login
//         </Link>
//       </div>
//       <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
//         <img className="w-100 h-50 shadow-lg" src={image} alt="Profile" />
//         <p className="mt-4 text-center">Delux Room</p>
//         <p className="mt-4 text-center">Per Day = 1000</p>
        
//         {/* Navigate to Dashboard on Login */}
//         <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
//           Login
//         </Link>
//       </div>
//       <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
//         <img className="w-100 h-50 shadow-lg" src={img} alt="Profile" />
//         <p className="mt-4 text-center">Standard Room</p>
//         <p className="mt-4 text-center">Per Day = 1000</p>
        
//         {/* Navigate to Dashboard on Login */}
//         <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
//           Login
//         </Link>
//       </div>
//       <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
//         <img className="w-100 h-50 shadow-lg" src={standard} alt="Profile" />
//         <p className="mt-4 text-center">Suite Room</p>
//         <p className="mt-4 text-center">Per day = 2500</p>
        
//         {/* Navigate to Dashboard on Login */}
//         <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
//           Login
//         </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Rooms;





import { useEffect, useState } from "react";
import axios from "axios";
import image from "../assets/delux.jpg";
import img from "../assets/suite.webp";
import standard from "../assets/standard.jpg";
import studio from "../assets/suite.webp";
import CustomerNavbar from "./Customernavbar";
import { Link } from "react-router-dom";

interface HallBooking {
  _id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  requirements: string;
}

function Rooms() {
  const [bookings, setBookings] = useState<HallBooking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hallbooking");
        console.log("Fetched hall bookings:", response.data);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching hall bookings", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <CustomerNavbar />

      {/* Existing Room Cards */}
      <div className="flex flex-wrap gap-6 ml-5 mt-10">
        {/* Studio Room */}
        <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
          <img className="w-100 h-48 shadow-lg object-cover" src={studio} alt="Studio Room" />
          <p className="mt-4 text-center">Studio Room</p>
          <p className="mt-2 text-center">Per Day = ₹3000</p>
          <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Login
          </Link>
        </div>

        {/* Delux Room */}
        <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
          <img className="w-100 h-48 shadow-lg object-cover" src={image} alt="Delux Room" />
          <p className="mt-4 text-center">Delux Room</p>
          <p className="mt-2 text-center">Per Day = ₹1000</p>
          <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Login
          </Link>
        </div>

        {/* Standard Room */}
        <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
          <img className="w-100 h-48 shadow-lg object-cover" src={img} alt="Standard Room" />
          <p className="mt-4 text-center">Standard Room</p>
          <p className="mt-2 text-center">Per Day = ₹1000</p>
          <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Login
          </Link>
        </div>

        {/* Suite Room */}
        <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
          <img className="w-100 h-48 shadow-lg object-cover" src={standard} alt="Suite Room" />
          <p className="mt-4 text-center">Suite Room</p>
          <p className="mt-2 text-center">Per Day = ₹2500</p>
          <Link to="/bookingform" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Login
          </Link>
        </div>
      </div>

      {/* Party Hall Booking Cards */}
      <h2 className="text-2xl font-bold mt-12 ml-5 text-purple-900">Party Hall Bookings</h2>
      <div className="flex flex-wrap gap-6 ml-5 mt-6 mb-10">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="w-80 p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Booked by: {booking.name}</h3>
              <p className="text-sm text-gray-600">📧 {booking.email}</p>
              <p className="mt-1 text-sm text-gray-600">📅 Date: {booking.date}</p>
              <p className="mt-1 text-sm text-gray-600">⏰ Time: {booking.time}</p>
              <p className="mt-1 text-sm text-gray-600">👥 Guests: {booking.guests}</p>
              <p className="mt-1 text-sm text-gray-600">📝 Requirements: {booking.requirements}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 ml-5">No party hall bookings found.</p>
        )}
      </div>
    </div>
  );
}

export default Rooms;
