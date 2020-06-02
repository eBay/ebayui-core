const fs = require('fs');
// check that paths exist as directories
function isDirectory(obj) {
    return obj.sources.every(path => {
        try {
            return fs.lstatSync(path).isDirectory();
        } catch (e) {
            return false;
        }
    });
}

// returns components that have an examples/ directory
function getComponentsWithExamples(root) {
    const componentsPath = `${__dirname}/../${root}/components`;
    return fs.readdirSync(componentsPath).map(component => ({
        name: component,
        sources: [`${componentsPath}/${component}`, `${componentsPath}/${component}/examples`]
    })).filter(isDirectory).map(obj => obj.name);
}

module.exports = { isDirectory, getComponentsWithExamples };
