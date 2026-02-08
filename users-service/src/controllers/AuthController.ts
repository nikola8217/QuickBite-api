import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/UserService";
import { UserRequest } from "../requests/UserRequest";
import { AuthService } from "../services/AuthService";
import { LoginUserRequest } from "../requests/LoginUserRequest";

export class AuthController {
    constructor(private authService: AuthService) {
        this.login = this.login.bind(this);
    }

    async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const dto = LoginUserRequest.toDto(req);

            const token = await this.authService.loginUser(dto);

            res.status(200).json({
                message: "You have successfully logged in",
                token
            });
        } catch (error) {
            next(error);
        }
    }
}