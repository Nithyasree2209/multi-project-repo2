const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    min: 1,
  },
});

const bakeryOrderSchema = new mongoose.Schema(
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
    selectedItems: {
      type: [itemSchema],
      required: true,
      validate: (val) => val.length > 0,
    },
  },
  {
    timestamps: true,
  }
);

const BakeryOrder = mongoose.model("BakeryOrder", bakeryOrderSchema);
module.exports = BakeryOrder; // ✅ Use CommonJS export
