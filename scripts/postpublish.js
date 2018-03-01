const fs = require('fs');
const del = require('del');

const pathPrefix = `${ __dirname }/..`;

// remove files created by prepublish
del.sync([`${pathPrefix}/*.browser.json`, `${pathPrefix}/dist`]);

// undo marko.json changes made by prepublish
fs.writeFileSync(`${pathPrefix}/marko.json`, '{\n    "tags-dir": "./src/components"\n}\n');
