import { Request, Response } from 'express';

export class GitHubController{
    async get(req: Request, res: Response) {
        res.status(200).json({ message: "GitHub API !" })
    }

}