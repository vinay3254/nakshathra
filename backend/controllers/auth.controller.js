const crypto = require("crypto");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const {
  sendEmail,
  buildWelcomeEmailTemplate,
  buildResetPasswordEmailTemplate,
} = require("../utils/sendEmail");

const formatUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  college: user.college,
  city: user.city,
  department: user.department,
  yearOfStudy: user.yearOfStudy,
  role: user.role,
  isVerified: user.isVerified,
  createdAt: user.createdAt,
});

const register = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      college,
      city,
      department,
      yearOfStudy,
    } = req.body;

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      throw Object.assign(new Error("Email already registered"), {
        statusCode: 400,
      });
    }

    const user = await User.create({
      name,
      email,
      phone,
      password,
      college,
      city,
      department,
      yearOfStudy,
    });

    const token = generateToken(user._id);

    try {
      await sendEmail({
        to: user.email,
        subject: "Welcome to Nakshatra 2026",
        html: buildWelcomeEmailTemplate({ name: user.name }),
      });
    } catch (emailError) {
      console.error(`Welcome email failed for ${user.email}: ${emailError.message}`);
    }

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        token,
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user || !(await user.comparePassword(password))) {
      throw Object.assign(new Error("Invalid credentials"), { statusCode: 401 });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Current user fetched successfully",
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(200).json({
        success: true,
        message: "If an account exists, a reset link has been sent",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;

    try {
      await sendEmail({
        to: user.email,
        subject: "Nakshatra 2026 Password Reset",
        html: buildResetPasswordEmailTemplate({
          name: user.name,
          resetUrl,
        }),
      });
    } catch (emailError) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });

      throw Object.assign(
        new Error("Unable to send password reset email at the moment"),
        { statusCode: 500 }
      );
    }

    return res.status(200).json({
      success: true,
      message: "If an account exists, a reset link has been sent",
    });
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    }).select("+password");

    if (!user) {
      throw Object.assign(new Error("Invalid or expired reset token"), {
        statusCode: 400,
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const { name, phone, college, city, department, yearOfStudy } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (phone) updateData.phone = phone;
    if (college) updateData.college = college;
    if (city) updateData.city = city;
    if (department) updateData.department = department;
    if (yearOfStudy) updateData.yearOfStudy = yearOfStudy;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  forgotPassword,
  resetPassword,
  updateProfile,
};
