import { User } from "../../User";

export interface IUserRepository {
    createUser(user: User): Promise<User>;

    getUserByEmail(email: string): Promise<User | null>;
}