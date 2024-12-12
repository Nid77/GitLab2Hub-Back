import { Request, Response } from "express";
import { GitHubService } from "../services/github/service";

export class GitHubController {
    async migrate(req: Request, res: Response) {
        const { sourceRepoUrl, destinationRepoUrl } = req.body;
        const gitHubService = new GitHubService();
        try {
            await gitHubService.migrateProject(
                sourceRepoUrl,
                destinationRepoUrl
            );
            res.status(200).json("Migrate to GitHub!");
        } catch (error) {
            res.status(500).json("Error while migrating to GitHub !");
        }
    }
}
