
const mongoose = require("mongoose");

const thingSchema = new mongoose.Schema({
  serialNo: { type: String, required: true },
  thingsName: { type: String, required: true },
  noOfThings: { type: Number, required: true },
  shopName: { type: String, required: true },
  shopLocation: { type: String, required: true },
  employeeName: { type: String, required: true },
}, { timestamps: true }); // ✅ Add timestamps

module.exports = mongoose.model("Thing", thingSchema);
