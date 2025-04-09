import React, { useEffect, useState } from "react";
import {
  Mail,
  Calendar,
  Clock,
  Users,
  StickyNote,
  User,
  Trash2,
} from "lucide-react";

interface Booking {
  _id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  requests?: string;
}

const Partyhall: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hallbooking");
        const data = await response.json();
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch hall bookings:", error);
        setLoading(false);
      }
    };

    fetchBookings();

    const savedDeletedIds = JSON.parse(
      localStorage.getItem("deletedHallBookings") || "[]"
    );
    setDeletedIds(new Set(savedDeletedIds));
  }, []);

  const handleDelete = (id: string) => {
    const updatedDeletedIds = new Set([...deletedIds, id]);
    setDeletedIds(updatedDeletedIds);
    localStorage.setItem(
      "deletedHallBookings",
      JSON.stringify([...updatedDeletedIds])
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center mb-6">
        <h2 className="text-3xl font-extrabold text-center mb-6 mt-5 bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
          Party Hall Bookings
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings
            .filter((booking) => !deletedIds.has(booking._id))
            .map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 relative"
              >
                <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                  <User className="text-blue-500" /> {booking.name}
                </h2>

                <p className="text-gray-700 mt-2 flex items-center gap-2">
                  <Mail className="text-gray-500" />
                  <span>{booking.email}</span>
                </p>

                <p className="text-gray-700 mt-2 flex items-center gap-2">
                  <Calendar className="text-green-500" />
                  <span>{booking.date}</span>
                </p>

                <p className="text-gray-700 mt-2 flex items-center gap-2">
                  <Clock className="text-yellow-500" />
                  <span>{booking.time}</span>
                </p>

                <p className="text-gray-700 mt-2 flex items-center gap-2">
                  <Users className="text-purple-500" />
                  <span>{booking.guests} guests</span>
                </p>

                {booking.requests && (
                  <p className="text-gray-700 mt-2 flex items-center gap-2">
                    <StickyNote className="text-pink-500" />
                    <span>{booking.requests}</span>
                  </p>
                )}

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow"
                  title="Delete Booking"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Partyhall;
