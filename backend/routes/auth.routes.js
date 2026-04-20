const express = require("express");
const { body } = require("express-validator");
const validateRequest = require("../middleware/validate.middleware");
const { protect } = require("../middleware/auth.middleware");
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getCurrentUser,
  updateProfile,
} = require("../controllers/auth.controller");

const router = express.Router();

// Public routes
router.post(
  "/register",
  [
    body("name").trim().isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
    body("phone").optional().trim(),
    body("college").trim().notEmpty().withMessage("College is required"),
    body("city").optional().trim(),
    body("department").optional(),
    body("yearOfStudy").optional(),
  ],
  validateRequest,
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  login
);

router.post(
  "/forgot-password",
  [body("email").isEmail().withMessage("Invalid email address")],
  validateRequest,
  forgotPassword
);

router.post(
  "/reset-password/:token",
  [
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
    body("confirmPassword")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Passwords do not match"),
  ],
  validateRequest,
  resetPassword
);

// Protected routes
router.get("/me", protect, getCurrentUser);

router.put(
  "/update-profile",
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
  updateProfile
);

router.post("/logout", protect, logout);

module.exports = router;
