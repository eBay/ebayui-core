const fs = require('fs');
const path = require('path');
const del = require('del');
const rootDir = path.join(__dirname, '..');

// remove files created by prepublish
del.sync([path.join(rootDir, '*.browser.json'), path.join(rootDir, 'dist')]);

// undo marko.json changes made by prepublish
const markoConfigPath = path.join(rootDir, '/marko.json');
fs.writeFileSync(
    markoConfigPath,
    fs.readFileSync(markoConfigPath, 'utf-8').replace(/\.\/dist\//g, './src/')
);
