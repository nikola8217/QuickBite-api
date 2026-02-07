import { AppError } from "./AppError";

export class InvalidCredentionalsError extends AppError {
    constructor(message = "Invalid credentionals") {
        super(message, 401); 
    }
}