
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Connect MongoDB
connectDB()
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Import routes
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");
const thingsRoutes = require("./routes/things");
const leaveRoutes = require("./routes/leave");
const loginRoutes = require("./routes/login");
const expenseRoutes = require("./routes/expences");
const bookingRoutes = require("./routes/booking");
const userOrderRoutes = require("./routes/orders");
const bakeryOrderRoutes = require("./routes/bakeryOrder");
const hallBookingRoutes = require("./routes/hallbooking");
const starterOrderRoutes = require("./routes/starterOrder.js");

// API check route
app.get("/api", (req, res) => {
  res.json({ message: "API is working!", status: "success" });
});

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/things", thingsRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/logins", loginRoutes);
app.use("/api/expences", expenseRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/orders", userOrderRoutes);
app.use("/api/bakeryOrders", bakeryOrderRoutes);
app.use("/api/hallbooking", hallBookingRoutes);
app.use("/api/starterorder", starterOrderRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
