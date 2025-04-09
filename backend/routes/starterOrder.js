
const express = require("express");
const StarterOrder = require("../models/StarterOrder"); // ✅ FIXED: CommonJS import

const router = express.Router();

// POST: Submit new starter order
router.post("/starter-order", async (req, res) => {
  try {
    const { tableNumber, orderType, paymentMode, selectedItems } = req.body;

    const newOrder = new StarterOrder({
      tableNumber,
      orderType,
      paymentMode,
      selectedItems,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to save order", error: error.message });
  }
});

// GET: Fetch all starter orders
// GET: Fetch starter orders based on orderType
router.get("/starter-orders/:type", async (req, res) => {
  try {
    const orderType = req.params.type; // Online or Offline
    const orders = await StarterOrder.find({ orderType }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error: error.message });
  }
});


module.exports = router; // ✅ FIXED: Use CommonJS export
