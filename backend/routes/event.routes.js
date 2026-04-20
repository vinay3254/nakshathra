const express = require("express");
const { body } = require("express-validator");
const validateRequest = require("../middleware/validate.middleware");
const { protect, adminOnly } = require("../middleware/auth.middleware");
const {
  getEvents,
  getEventBySlug,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventStats,
} = require("../controllers/event.controller");

const router = express.Router();

// Public routes
router.get("/", getEvents);
router.get("/:slug", getEventBySlug);
router.get("/stats/overview", protect, adminOnly, getEventStats);

// Protected routes (Admin only)
router.post(
  "/",
  protect,
  adminOnly,
  [
    body("name").trim().notEmpty().withMessage("Event name is required"),
    body("description").trim().notEmpty().withMessage("Description is required"),
    body("category").trim().notEmpty().withMessage("Category is required"),
    body("date").isISO8601().withMessage("Valid date is required"),
    body("venue").optional().trim(),
    body("status")
      .optional()
      .isIn(["draft", "open", "closed", "completed"])
      .withMessage("Invalid status"),
  ],
  validateRequest,
  createEvent
);

router.put(
  "/:id",
  protect,
  adminOnly,
  [
    body("name").optional().trim(),
    body("description").optional().trim(),
    body("category").optional().trim(),
    body("date").optional().isISO8601(),
    body("venue").optional().trim(),
    body("status")
      .optional()
      .isIn(["draft", "open", "closed", "completed"])
      .withMessage("Invalid status"),
  ],
  validateRequest,
  updateEvent
);

router.delete("/:id", protect, adminOnly, deleteEvent);

module.exports = router;
