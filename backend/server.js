////////////////////////////////////////////////////////////////
// Imports

// npm package imports
import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// custom files for import
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// api routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

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

// setup the body-parser
app.use(express.json());

//////////////////////////////////////////////////////////////////
// Routes

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

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
