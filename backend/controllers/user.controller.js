const User = require("../models/User");

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
  registeredEvents: user.registeredEvents,
  createdAt: user.createdAt,
});

const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .select("-password")
      .populate({
        path: "registeredEvents",
        populate: {
          path: "event",
          select: "name slug category date time venue status",
        },
      });

    if (!user) {
      throw Object.assign(new Error("User not found"), { statusCode: 404 });
    }

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: {
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      throw Object.assign(new Error("User not found"), { statusCode: 404 });
    }

    const allowedFields = [
      "name",
      "phone",
      "college",
      "city",
      "department",
      "yearOfStudy",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field];
      }
    });

    await user.save();

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

const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      throw Object.assign(new Error("User not found"), { statusCode: 404 });
    }

    const isMatch = await user.comparePassword(currentPassword);

    if (!isMatch) {
      throw Object.assign(new Error("Current password is incorrect"), {
        statusCode: 400,
      });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = 20;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find()
        .select("-password -resetPasswordToken -resetPasswordExpire -verificationToken")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const getUserProfile = async (req, res, next) => {
  return getProfile(req, res, next);
};

const updateUserProfile = async (req, res, next) => {
  return updateProfile(req, res, next);
};

const getUserRegistrations = async (req, res, next) => {
  try {
    const Registration = require("../models/Registration");

    const registrations = await Registration.find({ user: req.user._id })
      .populate("event")
      .sort({ registeredAt: -1 });

    res.status(200).json({
      success: true,
      message: "User registrations fetched successfully",
      data: {
        registrations,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteUserAccount = async (req, res, next) => {
  try {
    const Registration = require("../models/Registration");

    const user = await User.findById(req.user._id);

    if (!user) {
      throw Object.assign(new Error("User not found"), { statusCode: 404 });
    }

    const registrations = await Registration.find({ user: user._id }).select("_id event");

    await Promise.all(
      registrations.map(async (registration) => {
        const Event = require("../models/Event");
        const event = await Event.findById(registration.event);
        if (event) {
          event.registeredCount = Math.max((event.registeredCount || 0) - 1, 0);
          await event.save();
        }
      })
    );

    await Registration.deleteMany({ user: user._id });
    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  return getUsers(req, res, next);
};

const updateUserRole = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { role: req.body.role },
      { new: true }
    ).select("-password");

    if (!user) {
      throw Object.assign(new Error("User not found"), { statusCode: 404 });
    }

    res.status(200).json({
      success: true,
      message: "User role updated successfully",
      data: {
        user: formatUser(user),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  changePassword,
  getUsers,
  getUserProfile,
  updateUserProfile,
  getUserRegistrations,
  deleteUserAccount,
  getAllUsers,
  updateUserRole,
};
