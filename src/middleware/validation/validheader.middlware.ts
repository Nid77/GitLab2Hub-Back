import { Request, Response, NextFunction } from "express";

export function validMigrationHeaderMiddleware(req: Request, res: Response, next: NextFunction) {
    const { GITLABTOKEN, GITHUBTOKEN } = req.headers;

    if (!GITLABTOKEN || !GITHUBTOKEN) {
        res.status(401).json("INVALID HEADER");
        return;
    }

    next();
}
