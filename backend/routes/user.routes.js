const express = require("express");
const { body } = require("express-validator");
const validateRequest = require("../middleware/validate.middleware");
const { protect, adminOnly } = require("../middleware/auth.middleware");
const {
  getUserProfile,
  updateUserProfile,
  getUserRegistrations,
  deleteUserAccount,
  getAllUsers,
  updateUserRole,
} = require("../controllers/user.controller");

const router = express.Router();

// Protected routes (User)
router.get("/profile", protect, getUserProfile);

router.put(
  "/profile",
  protect,
  [
    body("name").optional().trim().isLength({ min: 2 }),
    body("phone").optional().trim(),
    body("college").optional().trim(),
    body("city").optional().trim(),
    body("department").optional(),
    body("yearOfStudy").optional(),
  ],
  validateRequest,
  updateUserProfile
);

router.get("/registrations", protect, getUserRegistrations);

router.delete("/account", protect, deleteUserAccount);

// Admin routes
router.get("/", protect, adminOnly, getAllUsers);

router.put(
  "/:userId/role",
  protect,
  adminOnly,
  [body("role").isIn(["user", "admin"]).withMessage("Invalid role")],
  validateRequest,
  updateUserRole
);

module.exports = router;
