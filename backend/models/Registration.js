const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: [true, "Event is required"],
  },
  teamName: {
    type: String,
    trim: true,
  },
  teamMembers: [
    {
      name: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        lowercase: true,
        trim: true,
      },
      college: {
        type: String,
        trim: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "confirmed",
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

registrationSchema.index({ user: 1, event: 1 }, { unique: true });

module.exports = mongoose.model("Registration", registrationSchema);
