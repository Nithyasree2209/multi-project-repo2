
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true },
  loginTime: { type: Date, default: Date.now }
});

// Avoid redefining the model
const Login = mongoose.models.Login || mongoose.model("Login", loginSchema);

module.exports = Login;
