const notFound = (req, res, next) => {
  next(
    Object.assign(new Error(`Route ${req.originalUrl} not found`), {
      statusCode: 404,
    })
  );
};

const errorHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error";

  if (error.name === "CastError") {
    statusCode = 404;
    message = "Resource not found";
  }

  if (error.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(error.errors)
      .map((item) => item.message)
      .join(", ");
  }

  if (error.code === 11000) {
    statusCode = 400;
    message = "Already exists";
  }

  if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Unauthorized";
  }

  const payload = {
    success: false,
    message,
  };

  if (process.env.NODE_ENV === "development") {
    payload.stack = error.stack;
  }

  res.status(statusCode).json(payload);
};

module.exports = {
  notFound,
  errorHandler,
};
