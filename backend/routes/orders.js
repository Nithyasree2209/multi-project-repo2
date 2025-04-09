const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); 


router.post("/", async (req, res) => {
  try {
    const { tableNumber, juices, orderType, paymentMode } = req.body;

    const newOrder = new Order({
      tableNumber,
      juices,
      orderType,  
      paymentMode, 
    });


router.get("/:orderType", async (req, res) => {
  const { orderType } = req.params;

  try {
    const orders = await Order.find({ orderType });  
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});


const savedOrder = await newOrder.save();


res.status(201).json({
      message: "Order submitted successfully",
      newOrder: savedOrder,
    });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to submit order" });
  }
});

module.exports = router;
