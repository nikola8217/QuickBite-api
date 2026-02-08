import { NotAuthenticatedError } from "./errors/NotAuthenticatedError";

export const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new NotAuthenticatedError("JWT_SECRET is not defined in environment");
}