
const express = require("express");
const Booking = require("../models/Booking"); // Ensure correct import

const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
    try {
        const { name, email, checkin, checkout, roomtype } = req.body;

        if (!name || !email || !checkin || !checkout || !roomtype) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newBooking = new Booking({
            name,
            email,
            checkin,
            checkout,
            roomtype,
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
        console.error("Booking Error:", error);
        res.status(500).json({ error: "Booking failed" });
    }
});

// Get all bookings
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error });
    }
});

module.exports = router;

