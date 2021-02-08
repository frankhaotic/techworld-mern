import express from "express";
const router = express.Router();

// Import Controller Methods
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// router.route("/profile").put(protect, updateUserProfile)

export default router;
