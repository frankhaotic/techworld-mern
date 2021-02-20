import express from "express";
const router = express.Router();

// Import Controller Methods
import {
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productControllers.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct);

export default router;
