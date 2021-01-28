import express from "express";
const router = express.Router();

// Import Controller Methods
import {
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
