import { Request, Response } from "express";
import { GitHubService } from "../services/github/service";
import { GlobalService } from "../services/global";
import { migrationModel } from "../models/github/MigrationModel";

export class GitHubController {
    async migrate(req: Request, res: Response) {
        const model = migrationModel.parse(req.body);
        const { githubtoken,gitlabtoken } = req.headers;
        const gitHubService = new GitHubService();
        const globalService = new GlobalService();

        try {
            // const destinationUrl = await gitHubService.createRepo(
            //     model.gitHubUrl,
            //     githubtoken as string,
            //     model.name,
            //     model.description,
            //     model.private
            // );
            const url = "https://github.com/Nid77/Angular-Rayan-.git";

            await globalService.cloneAndPushRepo(model.sourceRepoUrl.replace("https://", `https://oauth2:${gitlabtoken}@`), url.replace("https://", `https://${githubtoken}@`));
            res.status(200).json("Migration successful");
        } catch (error) {
            console.error(error);
            res.status(500).json("Error while migrating");
        }
    }
}
