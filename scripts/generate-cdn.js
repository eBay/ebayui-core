/* eslint-disable compat/compat */

const execSync = require('child_process').execSync;
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const rootDir = path.join(__dirname, '..');

function updateJsonFile(version) {
    const versionFile = path.join(rootDir, 'src/components/ebay-video/versions.json');
    const videoVersions = {
        '//': 'This is a generated file. Run script file to update',
        dashjs: version
    };
    const newVersion = JSON.stringify(videoVersions);
    fs.writeFileSync(versionFile, newVersion);
}

function getDashUrl(version) {
    return `http://cdn.dashjs.org/v${version}/dash.all.min.js`;
}

function download(url, dir) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(`${dir}/dashjs.min.js`);
        const req = http.get(url, (response) => {
            response.pipe(file);
            resolve();
        });
        req.on('error', (err) => {
            reject({ statusCode: 0, error: err });
        });
    });
}

async function run() {
    const version = execSync('npm list dashjs --depth 1 | grep dashjs | awk -F @ \'{ print  $2 }\'',
        { encoding: 'utf8' }).trim();
    const cdnDir = path.join(rootDir, '_cdn', 'ebayui');
    const dashPath = path.join(cdnDir, 'dashjs', `v${version}`);

    try {
        rimraf.sync(cdnDir);
        updateJsonFile(version);
        await fs.promises.mkdir(dashPath, { recursive: true });
        await download(getDashUrl(version), dashPath);
    } catch (e) {
        console.error(e);
    }
}

run();
