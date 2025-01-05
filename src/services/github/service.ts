import { executeCommand } from "../../utils/command";
import { executeAxiosRequest } from "../../utils/api";
import { makeFolder, removeFolder } from "../../utils/file";
import { HubClient } from "../../utils/api";
import path from "path";
import { PATH } from "../../constants/constants";
import { HubProject } from "@/models/github/GitHub";

export class GitHubService {
    async cloneAndPushRepo(token: string, sourceRepoUrl: string, destinationRepoUrl: string) {
        const projectName = path.basename(sourceRepoUrl, ".git");
        const tempDir = makeFolder(PATH.GLOBAL.TEMP_FOLDER);

        try {
            const absoluteTempDir = path.resolve(tempDir);
            await executeCommand(`git clone ${sourceRepoUrl.replace("https://", `https://${token}@`)}`, absoluteTempDir);

            const projectPath = path.join(tempDir, projectName);
            await executeCommand(`git remote remove origin`, projectPath);

            await executeCommand(`git remote add origin ${destinationRepoUrl}`, projectPath);

            await executeCommand(`git push -u origin main`, projectPath);

            removeFolder(tempDir);
        } catch (error) {
            removeFolder(tempDir);
            throw error;
        }
    }

    async createRepo(url: string, token: string, name: string, description: string, isPrivate: boolean) {
        HubClient.defaults.url = "https://" + url;
        HubClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("hubclient", HubClient.defaults.headers);
        const repo = await executeAxiosRequest(HubClient, "/user/repos", "POST", {
            name: name,
            private: isPrivate,
            description: description,
        });
        return repo.clone_url;
    }
}
