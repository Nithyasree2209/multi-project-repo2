
const express = require("express");
const bcrypt = require("bcryptjs");
const Employee = require("../models/User"); // Employee schema (User.js)

const router = express.Router();

// ===================================================
// @route   POST /api/auth
// @desc    Add a new employee
// @access  Public or Admin-only (adjust as needed)
// ===================================================
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      dob,
      doj,
      gender,
      address,
      position,
      password,
    } = req.body;

    // ✅ Check if employee already exists by email
    const existingEmployee = await Employee.findOne({ email } , { phone });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists." });
    }

    // ✅ Hash the password before saving to DB
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create a new employee document
    const newEmployee = new Employee({
      name,
      email,
      phone,
      dob,
      doj,
      gender,
      address,
      position,
      password: hashedPassword,
    });

    // ✅ Save to MongoDB
    await newEmployee.save();

    return res.status(201).json({ message: "Employee added successfully!" });
  } catch (error) {
    console.error("❌ Error adding employee:", error.message);
    return res.status(500).json({ message: "Server error. Failed to add employee." });
  }
});

// ===================================================
// @route   GET /api/auth
// @desc    Get all employees (without passwords)
// @access  Admin (adjust as needed)
// ===================================================
router.get("/", async (req, res) => {
  try {
    // ✅ Get all employees, excluding password
    const employees = await Employee.find().select("-password");

    return res.status(200).json(employees);
  } catch (error) {
    console.error("❌ Error fetching employees:", error.message);
    return res.status(500).json({ message: "Failed to fetch employees." });
  }
});

module.exports = router;
