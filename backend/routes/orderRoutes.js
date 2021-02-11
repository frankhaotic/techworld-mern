import express from "express";
const router = express.Router();

// Import Controller Methods
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id").put(protect, updateOrderToPaid);

export default router;
