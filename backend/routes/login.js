
const express = require("express");
const router = express.Router();
const Login = require("../models/Login");  

// ✅ Route to record login timestamp
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newLogin = new Login({ email });
    await newLogin.save();

    res.status(201).json({ message: "Login recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Route to fetch all login records
router.get("/", async (req, res) => {
  try {
    const logins = await Login.find().sort({ loginTime: -1 }); // Fetch latest logins first
    res.json(logins);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;



