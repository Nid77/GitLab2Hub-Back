import fs from "fs";

export function makeFolder(tempDir: string): string {
    try {
        if (!fs.existsSync(tempDir)) {
            var path = fs.mkdirSync(tempDir, { recursive: true });
            if (path) {
                console.log(`Temp directory created at: ${tempDir}`);
                return path;
            }
            throw new Error("Not getting path of temp directory");
        }
        return tempDir;
    } catch (error) {
        console.log(`Error while creating temp directory at: ${tempDir}`);
        throw error;
    }
}

export function removeFolder(tempDir: string): void {
    try {
        if (fs.existsSync(tempDir)) {
            fs.rmdirSync(tempDir, { recursive: true });
            console.log(`Temp directory removed at: ${tempDir}`);
        }
    } catch (error) {
        console.log(`Error while removing temp directory at: ${tempDir}`);
        throw error;
    }
}
