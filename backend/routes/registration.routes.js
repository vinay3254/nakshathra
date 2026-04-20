const express = require("express");
const { body } = require("express-validator");
const validateRequest = require("../middleware/validate.middleware");
const { protect, adminOnly } = require("../middleware/auth.middleware");
const {
  createRegistration,
  getAllRegistrations,
  getUserRegistrations,
  getRegistrationById,
  updateRegistration,
  cancelRegistration,
  getEventRegistrations,
} = require("../controllers/registration.controller");

const router = express.Router();

// Protected routes (User)
router.post(
  "/",
  protect,
  [
    body("eventId").notEmpty().withMessage("Event ID is required"),
    body("teamName").optional().trim(),
    body("teamMembers").optional().isArray().withMessage("Team members must be an array"),
  ],
  validateRequest,
  createRegistration
);

router.get("/me", protect, getUserRegistrations);
router.get("/user/me", protect, getUserRegistrations);

// Admin routes
router.get("/all", protect, adminOnly, getAllRegistrations);
router.get("/event/:eventId/registrations", protect, adminOnly, getEventRegistrations);

// Shared routes
router.get("/:id", protect, getRegistrationById);

router.put(
  "/:id",
  protect,
  [body("status").optional().isIn(["confirmed", "cancelled"])],
  validateRequest,
  updateRegistration
);

router.delete("/:id", protect, cancelRegistration);

module.exports = router;
