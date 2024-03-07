import * as fs from "fs";
import { fileURLToPath } from "url";
import * as path from "path";
import { deleteSync } from "del";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

// remove files created by prepublish
deleteSync([path.join(rootDir, "*.browser.json"), path.join(rootDir, "dist")]);

// undo marko.json changes made by prepublish
const markoConfigPath = path.join(rootDir, "/marko.json");
fs.writeFileSync(
    markoConfigPath,
    fs.readFileSync(markoConfigPath, "utf-8").replace(/\.\/dist\//g, "./src/"),
);
