import { Request, Response } from "express";

export class GitLabController {
    async get(req: Request, res: Response) {
        res.status(200).json({ message: "GitLab API !" });
    }
}
