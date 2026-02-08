import { IUserRepository } from "./ports/IUserRepository";
import { UserDto } from "../dtos/UserDto";
import { EmailAlreadyTakenError } from "@quickbiteapp/shared";
import { IPasswordHasher } from "./ports/IPasswordHasher";
import { User } from "../entities/User";
import { randomUUID } from "crypto";
import { UserResponse } from "../responses/UserResponse";

export class UserService {
    constructor(private userRepository: IUserRepository, private passwordHasher: IPasswordHasher) {}

    async createUser(dto: UserDto): Promise<UserResponse> {
        const emailIsTaken = await this.userRepository.getUserByEmail(dto.email);

        if (emailIsTaken) throw new EmailAlreadyTakenError();

        const passwordHash = await this.passwordHasher.hash(dto.password);

        const user = new User(
            randomUUID(),
            dto.name,
            dto.email,
            passwordHash,
            dto.role,
            dto.status
        );

        const createdUser = await this.userRepository.createUser(user);

        return {
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            role: createdUser.role
        }
    }
}