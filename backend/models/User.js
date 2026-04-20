const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const departmentOptions = [
  "CSE",
  "ISE",
  "ECE",
  "EEE",
  "MECH",
  "CIVIL",
  "MBA",
  "Other",
];

const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "PG"];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  college: {
    type: String,
    required: [true, "College is required"],
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  department: {
    type: String,
    enum: departmentOptions,
    required: [true, "Department is required"],
  },
  yearOfStudy: {
    type: String,
    enum: yearOptions,
    required: [true, "Year of study is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  registeredEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function savePassword(next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.methods.comparePassword = async function comparePassword(
  enteredPassword
) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
