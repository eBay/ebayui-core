/* eslint-disable compat/compat */

import { execSync } from 'child_process';
import * as https from 'https'; // or 'https' for https:// URLs
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import * as path from 'path';
import rimraf from 'rimraf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

function updateJsonFile(version) {
    const versionFile = path.join(rootDir, 'src/components/ebay-video/versions.json');
    const videoVersions = {
        '//': 'This is a generated file. Run script file to update',
        shaka: version,
    };
    const newVersion = JSON.stringify(videoVersions);
    fs.writeFileSync(versionFile, newVersion);
}

function getShakaUrl(version) {
    return `https://ajax.googleapis.com/ajax/libs/shaka-player/${version}/shaka-player.ui.js`;
}
function getShakaCSSUrl(version) {
    return `https://ajax.googleapis.com/ajax/libs/shaka-player/${version}/controls.css`;
}

function download(url, dir, fileName) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(`${dir}/${fileName}`);
        const req = https.get(url, (response) => {
            response.pipe(file);
        });
        req.on('error', (err) => {
            reject({ statusCode: 0, error: err });
        });
        req.on('close', () => {
            resolve();
        });
    });
}

async function run() {
    const version = execSync(
        "npm list shaka-player --depth 1 | grep shaka-player | awk -F @ '{ print  $2 }'",
        { encoding: 'utf8' }
    ).trim();
    const cdnDir = path.join(rootDir, '_cdn', 'ebayui');
    const playerPath = path.join(cdnDir, 'shaka', `v${version}`);

    try {
        rimraf.sync(cdnDir);
        updateJsonFile(version);
        await fs.promises.mkdir(playerPath, { recursive: true });
        await download(getShakaUrl(version), playerPath, 'shaka-player.ui.js');
        await download(getShakaCSSUrl(version), playerPath, 'controls.css');
        // Remove define
        execSync(
            `sed -i '' -e 's/typeof define=="function"/typeof define=="w"/' ${playerPath}/shaka-player.ui.js`
        );
    } catch (e) {
        console.error(e);
    }
}

run();
