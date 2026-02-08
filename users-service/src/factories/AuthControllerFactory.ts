import { UserRepository } from "../repositories/UserRepository";
import { PasswordHasher } from "../libs/PasswordHasher";
import { AuthController } from "../controllers/AuthController";
import { TokenGenerator } from "../libs/TokenGenerator";
import { AuthService } from "../services/AuthService";

export function createAuthController(): AuthController {
    const userRepository = new UserRepository();
    const passwordHasher = new PasswordHasher();
    const tokenGenerator = new TokenGenerator();
    
    const authService = new AuthService(userRepository, passwordHasher, tokenGenerator);

    return new AuthController(authService);
}