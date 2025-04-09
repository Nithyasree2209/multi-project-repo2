// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// // Create User
// router.post("/add", async (req, res) => {
//   try {
//     const { name, address, phone } = req.body;
//     const newUser = new User({ name, address, phone });
//     await newUser.save();
//     res.status(201).json({ message: "User added successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding user", error });
//   }
// });

// // Fetch All Users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });

// module.exports = router;
