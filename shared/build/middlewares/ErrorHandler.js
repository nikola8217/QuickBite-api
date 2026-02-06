"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../errors/AppError");
const RequestValidationError_1 = require("../errors/RequestValidationError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof RequestValidationError_1.RequestValidationError) {
        return res.status(err.statusCode).json({
            message: err.message,
            errors: err.errors
        });
    }
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
};
exports.errorHandler = errorHandler;
