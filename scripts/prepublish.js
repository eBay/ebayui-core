import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const componentInputDir = path.join(rootDir, 'src/components');

// run babel
execSync('babel --env-name prod src --out-dir dist --copy-files');

// create top level browser.json files to map to nested ones
fs.readdirSync(componentInputDir)
    .filter((folder) => folder.startsWith('ebay-'))
    .forEach((component) => {
        fs.writeFileSync(
            path.join(rootDir, `${component}.browser.json`),
            JSON.stringify(
                {
                    dependencies: [`./dist/components/${component}`],
                },
                null,
                4
            )
        );
    });

// update marko.json
const markoConfigPath = path.join(rootDir, 'marko.json');
fs.writeFileSync(
    markoConfigPath,
    fs.readFileSync(markoConfigPath, 'utf-8').replace(/\.\/src\//g, './dist/')
);
