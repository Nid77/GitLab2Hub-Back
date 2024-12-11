import { Request, Response } from "express";
import { GitHubService } from "../services/github/service";

export class GitHubController {
    async get(req: Request, res: Response) {
        res.status(200).json({ message: "GitHub API !" });
    }

    async migrate(req: Request, res: Response) {
        const { sourceRepoUrl, destinationRepoUrl } = req.body;
        const gitHubService = new GitHubService();
        try {
            await gitHubService.migrateProject(
                sourceRepoUrl,
                destinationRepoUrl
            );
            res.status(200).json({ message: "Migrate to GitHub!" });
        } catch (error) {
            res.status(500).json({
                message: "Error while migrating to GitHub !",
            });
        }
    }
}
