////////////////////////////////////////////////////////////////
// Imports

// npm package imports
import express from "express";
import dotenv from "dotenv";

// custom files for import
import connectDB from "./config/db.js";
import products from "./data/products.js";

//////////////////////////////////////////////////////////////////
// Server Setup

// enable .env functionality
dotenv.config();

// connect to local MongoDB (from config/db.js)
connectDB();

// declare and initiate express application
const app = express();

//////////////////////////////////////////////////////////////////
// Routes

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
