"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyTakenError = void 0;
const AppError_1 = require("./AppError");
class EmailAlreadyTakenError extends AppError_1.AppError {
    constructor(message = "Email is already in use") {
        super(message, 409);
    }
}
exports.EmailAlreadyTakenError = EmailAlreadyTakenError;
