////////////////////////////////////////////////////////////////
// Imports

// npm package imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// custom files for import
import connectDB from "./config/db.js";

// api routes
import productRoutes from './routes/productRoutes.js'

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

app.use("/api/products", productRoutes)



const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
