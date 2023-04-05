import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// strip out template.marko entries per https://github.com/marko-js/marko-cli/issues/70
const nycOutputPath = `${__dirname}/../.nyc_output`;
fs.readdirSync(nycOutputPath).forEach((file) => {
    const filePath = `${nycOutputPath}/${file}`;
    if (file.endsWith(".json")) {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        let needToWrite = false;
        Object.keys(data).forEach((entry) => {
            if (
                entry.endsWith(".marko") ||
                entry.includes("/mock") ||
                entry.includes("/test-utils")
            ) {
                delete data[entry];
                needToWrite = true;
            }
        });
        if (needToWrite) {
            fs.writeFileSync(filePath, JSON.stringify(data));
        }
    }
});
