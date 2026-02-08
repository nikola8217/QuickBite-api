import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthenticatedError } from "../errors/NotAuthenticatedError";
import { UserPayload } from "../types/express";

export const requireAuth = (jwtSecret: string) => {

    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;

        if (!authHeader?.startsWith("Bearer ")) {
        return next(new NotAuthenticatedError());
        }

        const token = authHeader.split(" ")[1];

        try {
            const payload = jwt.verify(token, jwtSecret) as UserPayload;

            req.user = payload;

            next();
        } catch (err) {
            console.log(err);
            return next(new NotAuthenticatedError());
        }
    };

};
