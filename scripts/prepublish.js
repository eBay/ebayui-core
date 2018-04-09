const execSync = require('child_process').execSync;
const fs = require('fs');

function isFile(obj) {
    try {
        return fs.lstatSync(obj.path).isFile();
    } catch (e) {
        return false;
    }
}

// create top level browser.json files to map to nested ones
fs.readdirSync(`${__dirname}/../src/components`).forEach(component => {
    if (component.startsWith('ebay-')) {
        fs.writeFileSync(`${component}.browser.json`, `{"dependencies":["./dist/components/${component}"]}`);
    }
});

// run babel
execSync('babel src --out-dir dist --copy-files --ignore test/,*.marko.js');

// replace src/ with dist/ in browser.json files
fs.readdirSync(`${__dirname}/../dist/components`).map(component => ({
    path: `${__dirname}/../dist/components/${component}/browser.json`
})).filter(isFile).map(obj => {
    const data = fs.readFileSync(obj.path, 'utf-8');
    fs.writeFileSync(obj.path, data.replace('src/components', 'dist/components'), 'utf-8');
});

// update marko.json
const markoConfigPath = `${__dirname}/../marko.json`;
const markoConfig = require(markoConfigPath);
Object.keys(markoConfig).forEach((key) => {
    const tagConfig = markoConfig[key];

    if (tagConfig.renderer) {
        tagConfig.renderer = tagConfig.renderer.replace('./src', './dist');
    }

    if (tagConfig.transformer) {
        tagConfig.transformer = tagConfig.transformer.replace('./src', './dist');
    }
});
fs.writeFileSync(markoConfigPath, JSON.stringify(markoConfig));
