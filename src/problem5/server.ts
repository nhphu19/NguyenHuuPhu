import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/dbs/index";
import resourceRoutes from "./src/routes/resource.routes";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to database
connectDB();

// Use resource routes
app.use("/api/resources", resourceRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
