const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const formattedErrors = errors.array().map((error) => ({
    field: error.path || error.param,
    message: error.msg,
  }));

  return res.status(400).json({
    success: false,
    message: "Validation failed",
    data: {
      errors: formattedErrors,
    },
  });
};

module.exports = validateRequest;
