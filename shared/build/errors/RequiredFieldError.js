"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldError = void 0;
const AppError_1 = require("./AppError");
class RequiredFieldError extends AppError_1.AppError {
    constructor(message = "Field is required") {
        super(message, 400);
    }
}
exports.RequiredFieldError = RequiredFieldError;
