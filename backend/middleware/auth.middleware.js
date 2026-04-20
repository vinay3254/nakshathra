const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";

    if (!authHeader.startsWith("Bearer ")) {
      throw Object.assign(new Error("Unauthorized"), { statusCode: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      throw Object.assign(new Error("Unauthorized"), { statusCode: 401 });
    }

    req.user = user;
    next();
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 401;
    }

    next(error);
  }
};

const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return next(
      Object.assign(new Error("Admin access required"), { statusCode: 403 })
    );
  }

  next();
};

module.exports = {
  protect,
  adminOnly,
};
