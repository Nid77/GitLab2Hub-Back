import { exec } from "child_process";
import path from "path";
import { makeFolder, removeFolder } from "./file";
import { PATH } from "../constants/constants";

function executeCommand(command: string, cwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(command, { cwd }, (error, stdout, stderr) => {
            if (error) {
                console.error(
                    `Erreur lors de l'exécution de la commande : ${command}`
                );
                console.error(stderr);
                reject(error);
                return;
            }
            console.log(`Commande réussie : ${command}`);
            console.log(stdout);
            resolve();
        });
    });
}

export async function cloneAndPushProject(
    sourceRepoUrl: string,
    destinationRepoUrl: string
) {
    const projectName = path.basename(sourceRepoUrl, ".git");
    makeFolder(PATH.GLOBAL.TEMP_FOLDER);
    const tempDir = path.resolve(__dirname, PATH.GLOBAL.TEMP_FOLDER);

    try {
        console.log("Cloning source repository...");
        await executeCommand(`git clone ${sourceRepoUrl}`, tempDir);

        const projectPath = path.join(tempDir, projectName);
        console.log("Init new repository...");
        await executeCommand(`git remote remove origin`, projectPath);
        await executeCommand(
            `git remote add origin ${destinationRepoUrl}`,
            projectPath
        );

        console.log("Pushing to the new repository...");
        await executeCommand(`git push -u origin main`, projectPath);

        console.log("Migration successful !");
        removeFolder(tempDir);
    } catch (error) {
        removeFolder(tempDir);
        console.error("Erreur while migrating project");
    }
}



