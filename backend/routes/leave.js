
const express = require("express");
const router = express.Router();
const Leave = require("../models/leave");

// Submit Leave Request
router.post("/", async (req, res) => {
  try {
    const { employeeName, employeeEmail, reason, startDate, endDate } = req.body;

    if (!employeeName || !employeeEmail || !reason || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newLeave = new Leave({ employeeName, employeeEmail, reason, startDate, endDate, status: "Pending" });
    await newLeave.save();

    res.status(201).json({ message: "Leave request submitted successfully", leave: newLeave });
  } catch (error) {
    console.error("Error submitting leave request:", error);
    res.status(500).json({ message: "Error submitting leave request", error });
  }
});

// Get All Leave Requests
router.get("/", async (req, res) => {
  try {
    const leaves = await Leave.find().sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    console.error("Error fetching leave requests:", error);
    res.status(500).json({ message: "Error fetching leave requests", error });
  }
});

// ✅ Update Leave Status (Accept/Reject)
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    if (!status || (status !== "Accepted" && status !== "Rejected")) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedLeave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedLeave) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.json({ message: "Leave status updated successfully", leave: updatedLeave });
  } catch (error) {
    console.error("Error updating leave status:", error);
    res.status(500).json({ message: "Error updating leave status", error });
  }
});

module.exports = router;
