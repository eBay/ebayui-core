const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const rootDir = path.join(__dirname, '..');
const componentInputDir = path.join(rootDir, 'src/components');

// run babel
execSync('babel src --out-dir dist --copy-files --ignore test/,*.marko.js');

// create top level browser.json files to map to nested ones
fs
    .readdirSync(componentInputDir)
    .filter(folder => folder.startsWith('ebay-'))
    .forEach(component => {
        fs.writeFileSync(
            path.join(rootDir, `${component}.browser.json`),
            JSON.stringify({
                dependencies: [
                    `./dist/components/${component}`
                ]
            }, null, 4)
        );
    });

// update marko.json
const markoConfigPath = path.join(rootDir, 'marko.json');
fs.writeFileSync(
    markoConfigPath,
    fs.readFileSync(markoConfigPath, 'utf-8').replace(/\.\/src\//g, './dist/')
);
