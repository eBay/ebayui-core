const fs = require('fs');
const del = require('del');

const pathPrefix = `${ __dirname }/..`;

// remove files created by prepublish
del.sync([`${pathPrefix}/*.browser.json`, `${pathPrefix}/dist`]);

// undo marko.json changes made by prepublish
const markoConfigPath = `${pathPrefix}/marko.json`;
const markoConfig = require(markoConfigPath);
Object.keys(markoConfig).forEach((key) => {
    const tagConfig = markoConfig[key];

    if (tagConfig.renderer) {
        tagConfig.renderer = tagConfig.renderer.replace('./dist', './src');
    }

    if (tagConfig.transformer) {
        tagConfig.transformer = tagConfig.transformer.replace('./dist', './src');
    }
});
fs.writeFileSync(markoConfigPath, `${JSON.stringify(markoConfig, null, 4)}\n`);
