import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parentDir = "../src/components/";
const versionsPath = "../ds-versions.json";

async function walkDirs() {
    fs.promises
        .readdir(path.resolve(__dirname, parentDir))
        .then(async (items) => {
            const versionsRaw = await fs.promises.readFile(
                path.resolve(__dirname, versionsPath),
                "utf-8",
            );
            const versions = JSON.parse(versionsRaw);
            items.forEach(async (item) => {
                const itemPath = path.resolve(
                    __dirname,
                    path.join(parentDir, item),
                );
                const stats = await fs.promises.stat(itemPath);
                if (
                    stats.isDirectory() &&
                    !itemPath.includes("components/components")
                ) {
                    const key =
                        itemPath.split("/")[itemPath.split("/").length - 1];
                    const value = versions[key.split("-").slice(1).join("-")];
                    // get value from json
                    if (value !== undefined) {
                        const readmePath = path.resolve(
                            __dirname,
                            path.join(itemPath, "/README.md"),
                        );
                        await addVersionAndWrite(readmePath, value);
                    } else {
                        // eslint-disable-next-line no-console
                        console.log("not in ds-versions.json: ", key);
                    }
                }
            });
        });
}

async function readFile(readmePath) {
    return await fs.promises.readFile(readmePath, "utf-8");
}

async function addVersionAndWrite(myFilePath, newVersion) {
    const h1Regex = /\<h1/;
    const preContent = await readFile(myFilePath);
    const lines = preContent.split("\n");
    let finalAdditions = "";
    if (lines[0].match(h1Regex)) {
        lines[5] = `        DS v${newVersion}`;
    } else {
        const componentTitle = lines[0].split(" ")[1];
        finalAdditions = `<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ${componentTitle}
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v${newVersion}
    </span>
</h1>\n`;
    }

    let finalFile;
    if (finalAdditions !== "") {
        finalFile = finalAdditions.concat(lines.slice(1).join("\n"));
    } else {
        finalFile = lines.join("\n");
    }
    await fs.promises.writeFile(
        path.resolve(__dirname, myFilePath),
        finalFile,
        "utf-8",
    );
}

async function run() {
    walkDirs();
}

run();
