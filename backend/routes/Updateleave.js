const express = require("express");
const Leave = require("../models/leave"); // Import Leave model
const router = express.Router();

// Update leave status
router.put("/leave/:id", async (req, res) => {
    try {
        const { leaveStatus } = req.body; // Changed from "status" to "leaveStatus"
        const updatedLeave = await Leave.findByIdAndUpdate(
            req.params.id,
            { leaveStatus }, // Update field name
            { new: true }
        );

        if (!updatedLeave) {
            return res.status(404).json({ message: "Leave request not found" });
        }

        res.json(updatedLeave);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
