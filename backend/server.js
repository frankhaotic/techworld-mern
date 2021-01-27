////////////////////////////////////////////////////////////////
// Imports

// npm package imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// custom files for import
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// api routes
import productRoutes from "./routes/productRoutes.js";

//////////////////////////////////////////////////////////////////
// Server Setup

// define server port
const PORT = process.env.PORT || 5000;

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

app.use("/api/products", productRoutes);

//////////////////////////////////////////////////////////////////
// Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
