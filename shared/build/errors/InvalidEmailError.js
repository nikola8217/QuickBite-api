"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmailError = void 0;
const AppError_1 = require("./AppError");
class InvalidEmailError extends AppError_1.AppError {
    constructor(message = "Email is invalid") {
        super(message, 400);
    }
}
exports.InvalidEmailError = InvalidEmailError;
