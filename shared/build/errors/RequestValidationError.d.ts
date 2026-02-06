import { AppError } from "./AppError";
export interface ValidationErrorItem {
    message: string;
}
export declare class RequestValidationError extends AppError {
    readonly errors: ValidationErrorItem[];
    constructor(errors: ValidationErrorItem[]);
}
