import { Request } from "express";
import { UserDto } from "../dtos/UserDto";
import { Role } from "../entities/enums/Role";
import { Status } from "../entities/enums/Status";

export class UserRequest {
    static toDto(req: Request): UserDto {
        return {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role ?? Role.CUSTOMER,
            status: Status.ACTIVE
        };
    }
}