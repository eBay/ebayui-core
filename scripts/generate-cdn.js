import { execSync } from "child_process";
import * as https from "https"; // or 'https' for https:// URLs
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";
import * as rimraf from "rimraf";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const versionPath = "src/common/cdn/versions.ts";

const cdnConfig = {
    shaka: {
        versionCommand:
            "npm list shaka-player --depth 1 | grep shaka-player | awk -F @ '{ print  $2 }'",
        generator: shakaGenerator,
    },
    highcharts: {
        versionCommand:
            "npm list highcharts --depth 1 | grep highcharts | awk -F @ '{ print  $2 }'",
        generator: highchartsGenerator,
    },
    modelViewer: {
        versionCommand:
            "npm list @google/model-viewer --depth 1 | grep google/model-viewer | awk -F @ '{ print  $3 }'",
        generator: threeDPlayerGenerator,
    },
};

function updateVersionFile(version) {
    const versionFile = path.join(rootDir, versionPath);
    const versionObject = Object.assign(
        {},
        {
            "//": "This is a generated file. Run generateCDN script file to update",
        },
        version,
    );
    const newVersion = `export const versions = ${JSON.stringify(
        versionObject,
    )};`;
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
        req.on("error", (err) => {
            reject({ statusCode: 0, error: err });
        });
        req.on("close", () => {
            resolve();
        });
    });
}

async function shakaGenerator({ version, cdnVersionPath }) {
    await download(getShakaUrl(version), cdnVersionPath, "shaka-player.ui.js");
    await download(getShakaCSSUrl(version), cdnVersionPath, "controls.css");
    // Remove define
    execSync(
        `sed -i '' -e 's/typeof define=="function"/typeof define=="w"/' ${cdnVersionPath}/shaka-player.ui.js`,
    );
}

async function threeDPlayerGenerator({ cdnVersionPath }) {
    await fs.promises.cp(
        `${rootDir}/node_modules/@google/model-viewer/dist/model-viewer.min.js`,
        `${cdnVersionPath}/model-viewer.min.js`,
    );
}

async function highchartsGenerator({ cdnVersionPath }) {
    await fs.promises.cp(
        `${rootDir}/node_modules/highcharts/highcharts.js`,
        `${cdnVersionPath}/highcharts.js`,
    );
    await fs.promises.cp(
        `${rootDir}/node_modules/highcharts/modules/accessibility.js`,
        `${cdnVersionPath}/accessibility.js`,
    );
    await fs.promises.cp(
        `${rootDir}/node_modules/highcharts/modules/pattern-fill.js`,
        `${cdnVersionPath}/pattern-fill.js`,
    );
}

async function run() {
    const versionObject = {};

    const cdnDir = path.join(rootDir, "_cdn", "ebayui");

    try {
        rimraf.sync(cdnDir);
        for (const key of Object.keys(cdnConfig)) {
            const { versionCommand, generator } = cdnConfig[key];

            const version = execSync(versionCommand, {
                encoding: "utf8",
            }).trim();

            versionObject[key] = version;

            const cdnVersionPath = path.join(cdnDir, key, `v${version}`);

            await fs.promises.mkdir(cdnVersionPath, { recursive: true });

            await generator({ cdnVersionPath, version });
        }
        updateVersionFile(versionObject);
    } catch (e) {
        console.error(e);
    }
}

run();
