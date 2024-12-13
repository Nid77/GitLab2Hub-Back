import { Request, Response, NextFunction } from "express";
import { ERROR_MESSAGE } from "../constants/constants";

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
    const secretToken = process.env.AUTH_TOKEN;
    const authorization = req.headers["authorization"];

    if (!authorization) {
        res.status(403).json({
            error: ERROR_MESSAGE.MIDDLEWARE.TOKEN_MISSING,
        });
        return;
    }
    if (authorization !== `Bearer ${secretToken}`) {
        res.status(403).json({
            error: ERROR_MESSAGE.MIDDLEWARE.INVALID_TOKEN,
        });
        return;
    }

    next();
}
