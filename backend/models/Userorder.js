const mongoose = require("mongoose");

const userOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  orderType: { type: String, required: true },
  paymentType: { type: String, required: true },
  status: { type: String, default: 'online' },
  toy: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model("UserOrder", userOrderSchema);
