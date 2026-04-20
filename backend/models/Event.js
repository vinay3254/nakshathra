const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Event name is required"],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    index: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ["Technical", "Cultural", "Gaming", "Workshop", "Flagship"],
    required: [true, "Event category is required"],
  },
  description: {
    type: String,
    trim: true,
  },
  icon: {
    type: String,
    trim: true,
  },
  prize: {
    type: String,
    trim: true,
  },
  teamSize: {
    min: {
      type: Number,
      default: 1,
      min: 1,
    },
    max: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
    trim: true,
  },
  venue: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["open", "closed", "upcoming"],
    default: "open",
  },
  maxParticipants: {
    type: Number,
    min: 1,
  },
  registeredCount: {
    type: Number,
    default: 0,
    min: 0,
  },
  accentColor: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", eventSchema);
