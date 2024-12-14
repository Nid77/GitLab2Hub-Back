import { Request, Response } from "express";
import { GitHubService } from "../services/github/service";
import { migrationModel } from "../models/github/MigrationModel";

export class GitHubController {
    async migrate(req: Request, res: Response) {
        const model = migrationModel.parse(req.body);
        const { githubtoken } = req.headers;
        const gitHubService = new GitHubService();
        try {
            const destinationUrl = await gitHubService.createRepo(
                model.gitHubUrl,
                githubtoken as string,
                model.name,
                model.description,
                model.private
            );
            await gitHubService.cloneAndPushRepo(githubtoken as string, model.sourceRepoUrl, destinationUrl);
            res.status(200).json("Migration successful");
        } catch (error) {
            console.error(error);
            res.status(500).json("Error while migrating");
        }
    }
}
