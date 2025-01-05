import { Request, Response, NextFunction } from "express";

export function validMigrationHeaderMiddleware(req: Request, res: Response, next: NextFunction) {
    const { gitlabtoken, githubtoken } = req.headers;
    console.log("gitlabtoken", gitlabtoken);
    console.log("githubtoken", githubtoken);

    if (!gitlabtoken || !githubtoken) {
        res.status(401).json("Missing headers");
        return;
    }

    next();
}
