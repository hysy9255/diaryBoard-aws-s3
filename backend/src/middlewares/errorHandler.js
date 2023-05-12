const multer = require("multer");

const globalErrorHandler = (error, req, res, next) => {
  res.status(error.statusCode || 400).json({ message: error.message });
};

const multerErrorHandler = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.json({
        message: "file is too large",
      });
    }
  }
};

module.exports = { globalErrorHandler, multerErrorHandler };
