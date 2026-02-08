import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/NotAuthorizedError";

export const requireSuperAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(123);

    if (req.user?.role !== "SuperAdmin") {
        throw new NotAuthorizedError();
    }

    next();
};