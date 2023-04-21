import * as fs from "fs";
import { execSync } from "child_process";
const files = ["package.json", "package-lock.json"];
const contents = files.map((file) => fs.readFileSync(file));
const args = process.argv.slice(2).join(" ");

try {
    execSync(`npm i ${args}`);
} finally {
    files.forEach((file, i) => fs.writeFileSync(file, contents[i]));
}
