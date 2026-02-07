import { AppError } from "./AppError";

export class UserNotActiveError extends AppError {
    constructor(message = "User not active") {
        super(message, 403); 
    }
}