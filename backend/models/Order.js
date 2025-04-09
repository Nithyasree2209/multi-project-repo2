const mongoose = require("mongoose");

const juiceOrderSchema = new mongoose.Schema({
  tableNumber: {
    type: String,
    required: true,
  },
  juices: [
    {
      name: String,
      selected: Boolean,
      count: {
        type: Number,
        min: 1,
        default: 1,
      },
    },
  ],
  orderType: {
    type: String,
    enum: ["online", "offline"],  // Limiting the options to 'online' or 'offline'
    required: true,
  },
  paymentMode: {
    type: String,
    enum: ["online", "cash_on_delivery"],  // Limiting the options to 'online' or 'cash_on_delivery'
    required: true,
  },
});

const Order = mongoose.model("Order", juiceOrderSchema);

module.exports = Order;
