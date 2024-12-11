import { cloneAndPushProject } from "../../utils/command";

export class GitHubService {
    async migrateProject(sourceRepoUrl: string, destinationRepoUrl: string) {
        await cloneAndPushProject(sourceRepoUrl, destinationRepoUrl);
    }
}
