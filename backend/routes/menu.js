const express = require("express");
const Menu = require("../models/Menu"); // Import Menu model
const router = express.Router();

// Create a new menu
router.post("/", async (req, res) => {
  try {
    const { breakfast, lunch, dinner } = req.body;

    if (!breakfast || !lunch || !dinner) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMenu = new Menu({ breakfast, lunch, dinner });
    await newMenu.save();

    res.status(201).json({ message: "Menu created successfully!" });
  } catch (error) {
    console.error("Error creating menu:", error);
    res.status(500).json({ error: "Failed to create menu" });
  }
});

// Get all menus
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find().sort({ createdAt: -1 });
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menus" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the menu item
    const deletedMenu = await Menu.findByIdAndDelete(id);

    if (!deletedMenu) {
      return res.status(404).json({ error: "Menu not found" });
    }

    res.status(200).json({ message: "Menu deleted successfully!" });
  } catch (error) {
    console.error("Error deleting menu:", error);
    res.status(500).json({ error: "Failed to delete menu" });
  }
});


module.exports = router;
