const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api", chatRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("College Chatbot Backend is Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
