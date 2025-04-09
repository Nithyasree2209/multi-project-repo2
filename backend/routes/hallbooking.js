
const express = require("express");
const router = express.Router();
const HallBooking = require("../models/HallBooking");

// POST - Create new booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new HallBooking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: "Failed to book hall" });
  }
});

// GET - Fetch all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await HallBooking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

module.exports = router; // ✅ THIS IS IMPORTANT
