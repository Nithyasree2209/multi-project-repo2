const mongoose = require("mongoose");

const hallBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: String, required: true },
  requests: { type: String }
});

module.exports = mongoose.model("HallBooking", hallBookingSchema);
