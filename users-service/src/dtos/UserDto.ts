import { Role } from "../entities/enums/Role";
import { Status } from "../entities/enums/Status";

export interface UserDto {
    name: string;
    email: string;
    password: string;
    role: Role;
    status: Status;
}