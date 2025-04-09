const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
    roomtype: {
      type: [String],
      required: true,
      enum: ["Standard", "Deluxe", "Studio", "Suite"]
    },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
