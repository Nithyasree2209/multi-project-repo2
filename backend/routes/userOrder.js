
const express = require("express");
const router = express.Router();
const UserOrder = require("../models/Userorder");

// 📌 POST route to store user order in MongoDB
router.post("/order", async (req, res) => {
  try {
    const { name, address, phone, orderType, paymentType, toy } = req.body;

    console.log("Received Order Data:", req.body); // Debugging Line

    // Validation for required fields
    if (!name || !address || !phone || !orderType || !paymentType || !toy) {
      console.log("❌ Validation Error: Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new order document and save it to MongoDB
    const newOrder = new UserOrder({
      name,
      address,
      phone,
      orderType,
      paymentType,
      toy,
    });

    await newOrder.save();
    console.log("✅ Order saved successfully:", newOrder);

    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// 📌 GET route to fetch orders by orderType
router.get("/:orderType", async (req, res) => {
  try {
    const { orderType } = req.params;

    const orders = await UserOrder.find({ orderType });

    if (!orders.length) {
      return res.status(404).json({ message: `No ${orderType} orders found` });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;

