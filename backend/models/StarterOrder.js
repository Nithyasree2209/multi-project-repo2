const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
});

const starterOrderSchema = new mongoose.Schema(
  {
    tableNumber: {
      type: String,
      required: true,
    },
    orderType: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },
    paymentMode: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },
    selectedItems: [itemSchema],
  },
  {
    timestamps: true,
  }
);

const StarterOrder = mongoose.model("StarterOrder", starterOrderSchema);

module.exports = StarterOrder; // ✅ FIXED: Use CommonJS style
