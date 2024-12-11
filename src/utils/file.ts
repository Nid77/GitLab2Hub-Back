import fs from 'fs';

export function makeFolder(tempDir: string) {
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
        console.log(`Temp directory created at: ${tempDir}`);
    } else {
        console.log(`Temp directory already exists at: ${tempDir}`);
    }
}

export function removeFolder(tempDir: string) {
    if (fs.existsSync(tempDir)) {
        fs.rmdirSync(tempDir, { recursive: true });
        console.log(`Temp directory removed at: ${tempDir}`);
    } else {
        console.log(`Temp directory does not exist at: ${tempDir}`);
    }
}
