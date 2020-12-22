const fs = require('fs');
const path = require('path');
const parentDir = '../src/components/';
const versionsPath = '../ds-versions.json';

async function walkDirs() {
    fs.promises.readdir(path.resolve(__dirname, parentDir)).then(async(items) => {
        const versionsRaw = await fs.promises.readFile(path.resolve(__dirname, versionsPath), 'utf-8');
        const versions = JSON.parse(versionsRaw);
        // eslint-disable-next-line compat/compat
        await Promise.all(items.map(async(item) => {
            const itemPath = path.resolve(__dirname, path.join(parentDir, item));
            const stats = await fs.promises.stat(itemPath);
            if (stats.isDirectory() && !itemPath.includes('components/components')) {
                const key = itemPath.split('/')[itemPath.split('/').length - 1];
                const value = versions[key.split('-').slice(1).join('-')];
                // get value from json
                if (value !== undefined) {
                    const readmePath = path.resolve(__dirname, path.join(itemPath, '/README.md'));
                    await addVersionAndWrite(readmePath, value);
                } else {
                    // eslint-disable-next-line no-console
                    console.log('not in ds-versions.json: ', key);
                }
            }
        }));
    });
}

async function readFile(readmePath) {
    return await fs.promises.readFile(readmePath, 'utf-8');
}

async function addVersionAndWrite(myFilePath, newVersion) {
    const regex = /\b v*/;
    const preContent = await readFile(myFilePath);
    const lines = preContent.split('\n');
    let finalFirstLine;
    // eslint-disable-next-line eqeqeq
    if (lines[0].match(regex) == null) {
        finalFirstLine = lines[0].concat(` v${newVersion}`);
    } else {
        finalFirstLine = lines[0].slice(0, lines[0].match(regex).index).concat(` v${newVersion}`);
    }
    lines[0] = finalFirstLine;
    await fs.promises.writeFile(path.resolve(__dirname, myFilePath), lines.join('\n'), 'utf-8');
}

async function run() {
    walkDirs();
}

run();
