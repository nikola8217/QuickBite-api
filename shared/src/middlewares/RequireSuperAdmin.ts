import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/NotAuthorizedError";

export const requireSuperAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.user?.role !== "SuperAdmin") {
        return next(new NotAuthorizedError("Missing SuperAdmin role"));
    }

    next();
};