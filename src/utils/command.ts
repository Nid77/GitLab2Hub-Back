import { exec } from "child_process";
import path from "path";
import { makeFolder, removeFolder } from "./file";
import { PATH } from "../constants/constants";

export function executeCommand(command: string, cwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(command, { cwd }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error while executing command : ${command}`);
                console.error(stderr);
                reject(error);
                return;
            }
            console.log(`Excecute command : ${command}`);
            console.log(stdout);
            resolve();
        });
    });
}
