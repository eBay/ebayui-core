const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const rootDir = path.join(__dirname, '..');

async function readMarkoJSON() {
    return await fs.promises.readFile(path.join(rootDir, 'marko.json'), 'utf-8');
}

async function run() {
    const preContent = await readMarkoJSON();

    execSync('npm run postpublish');

    const postContent = await readMarkoJSON();
    if (preContent !== postContent) {
        console.error(
            'marko.json file changed, publish files are checked in. Run "npm run postpublish" to fix.'
        );
        process.exit(1);
    }
}

run();
