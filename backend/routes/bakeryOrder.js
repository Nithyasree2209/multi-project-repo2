const express = require("express");
const router = express.Router();
const BakeryOrder = require("../models/BakeryOrder");

// @route   POST /api/bakery-orders
router.post("/bakery-orders", async (req, res) => {
  try {
    const { tableNumber, orderType, paymentMode, selectedItems } = req.body;

    const newOrder = new BakeryOrder({
      tableNumber,
      orderType,
      paymentMode,
      selectedItems,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
});

// @route   GET /api/bakery-orders
// @desc    Get all bakery orders
// @access  Public
router.get("/:orderType", async (req, res) => {
  const { orderType } = req.params;
  try {
    const orders = await BakeryOrder.find({ orderType });
    res.status(200) .json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

module.exports = router;