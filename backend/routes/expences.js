const express = require("express");
const Expense = require("../models/Expences");

const router = express.Router();

// Add Expense
router.post("/add", async (req, res) => {
    try {
        const newExpense = new Expense(req.body);
        await newExpense.save();
        res.status(201).json({ message: "Expense added successfully", data: newExpense });
    } catch (error) {
        res.status(500).json({ error: "Failed to add expense" });
    }
});

// Get all Expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch expenses" });
    }
});

module.exports = router;
