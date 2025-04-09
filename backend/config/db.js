const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "hms"
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.log("❌ MongoDB Connection Failed:", error)
        process.exit(1);
    }
}
module.exports = connectDB;
