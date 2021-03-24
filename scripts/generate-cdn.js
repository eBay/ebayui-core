/* eslint-disable compat/compat */

const execSync = require('child_process').execSync;
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const rootDir = path.join(__dirname, '..');

function updateJsonFile(version) {
    const versionFile = path.join(rootDir, 'src/components/ebay-video/versions.json');
    const videoVersions = {
        '//': 'This is a generated file. Run script file to update',
        shaka: version
    };
    const newVersion = JSON.stringify(videoVersions);
    fs.writeFileSync(versionFile, newVersion);
}

function getShakaUrl(version) {
    return `https://ajax.googleapis.com/ajax/libs/shaka-player/${version}/shaka-player.compiled.js`;
}

function download(url, dir) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(`${dir}/shaka-player.compiled.js`);
        const req = https.get(url, (response) => {

            response.pipe(file);

        });
        req.on('error', (err) => {
            reject({ statusCode: 0, error: err });
        });
        req.on('close', () => {
            resolve();
        })
    });
}

async function run() {
    const version = execSync('npm list shaka-player --depth 1 | grep shaka-player | awk -F @ \'{ print  $2 }\'',
        { encoding: 'utf8' }).trim();
    const cdnDir = path.join(rootDir, '_cdn', 'ebayui');
    const playerPath = path.join(cdnDir, 'shaka', `v${version}`);

    try {
        rimraf.sync(cdnDir);
        updateJsonFile(version);
        await fs.promises.mkdir(playerPath, { recursive: true });
        await download(getShakaUrl(version), playerPath);
        // Remove define
        execSync(`sed -i '' -e 's/typeof define=="function"/typeof define=="w"/' ${playerPath}/shaka-player.compiled.js`)
    } catch (e) {
        console.error(e);
    }
}

run();
