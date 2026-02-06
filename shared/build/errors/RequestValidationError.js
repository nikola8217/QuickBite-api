"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const AppError_1 = require("./AppError");
class RequestValidationError extends AppError_1.AppError {
    constructor(errors) {
        super("Invalid request parameters", 400);
        this.errors = errors;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}
exports.RequestValidationError = RequestValidationError;
