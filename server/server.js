// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const dataRoutes = require("./routes/dataRoutes"); // Import your data routes

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/assigment")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use data routes
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
