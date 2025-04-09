const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    date: { type: String, required: true },
    thingsName: { type: String, required: true },
    pricePerKg: { type: String, required: true },
    totalKg: { type: String, required: true },
    totalAmount: { type: String, required: true },
    employeeName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);
