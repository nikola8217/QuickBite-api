"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const RequestValidationError_1 = require("../errors/RequestValidationError");
const validateRequest = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        const errors = result.array({ onlyFirstError: true }).map(err => ({
            message: err.msg
        }));
        throw new RequestValidationError_1.RequestValidationError(errors);
    }
    next();
};
exports.validateRequest = validateRequest;
