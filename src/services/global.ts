import { PATH } from "../constants/constants";
import { executeCommand } from "../utils/command";
import { makeFolder, removeFolder } from "../utils/file";
import path from "path";

export class GlobalService {
    async cloneAndPushRepo(sourceRepoUrl: string, destinationRepoUrl: string) {
        const projectName = path.basename(sourceRepoUrl, ".git");
        const tempDir = makeFolder(PATH.GLOBAL.TEMP_FOLDER);

        try {
            const absoluteTempDir = path.resolve(tempDir);
            await executeCommand(`git clone ${sourceRepoUrl}`, absoluteTempDir);

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
}
