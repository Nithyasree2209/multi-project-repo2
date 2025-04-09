
const express = require("express");
const Things = require("../models/Things"); // ✅ Ensure correct model import
const router = express.Router();

// ✅ Create a new thing
router.post("/", async (req, res) => {
  try {
    const { serialNo, thingsName, noOfThings, shopName, shopLocation, employeeName } = req.body;

    if (!serialNo || !thingsName || !noOfThings || !shopName || !shopLocation || !employeeName) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newThing = new Things({ serialNo, thingsName, noOfThings, shopName, shopLocation, employeeName });
    await newThing.save();

    res.status(201).json({ message: "Thing added successfully!", thing: newThing });
  } catch (error) {
    console.error("Error creating thing:", error);
    res.status(500).json({ error: "Failed to add thing" });
  }
});

// ✅ Get all things
router.get("/", async (req, res) => {
  try {
    const things = await Things.find().sort({ createdAt: -1 });

    if (!things || things.length === 0) {
      return res.status(404).json({ error: "No things found" });
    }

    res.json(things);
  } catch (error) {
    console.error("Error fetching things:", error);
    res.status(500).json({ error: "Failed to fetch things" });
  }
});

// ✅ Delete a thing by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedThing = await Things.findByIdAndDelete(id);

    if (!deletedThing) {
      return res.status(404).json({ error: "Thing not found" });
    }

    res.json({ message: "Thing deleted successfully!" });
  } catch (error) {
    console.error("Error deleting thing:", error);
    res.status(500).json({ error: "Failed to delete thing" });
  }
});

module.exports = router;
