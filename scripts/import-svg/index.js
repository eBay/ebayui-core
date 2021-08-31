/* eslint-disable compat/compat */

/**
 * Loads DS4 and DS6 icons from skin and adds them to the ebay-icon symbols.
 */

const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const cheerio = require('cheerio');
const minify = require('html-minifier').minify;
const util = require('../../src/common/ds-util');
const skinDir = path.dirname(require.resolve('@ebay/skin/package.json'));
const svgDir = path.join(skinDir, 'src/svg');
const outputBaseDir = path.join(__dirname, '../../src/components');
const markoTagJson = require('../../src/components/ebay-icon/marko-tag.json');
const icons = new Map();
const programIcons = new Map();

const THEME_NAMES = util.dsIconThemes;
const htmlMinifierOptions = {
    keepClosingSlash: true,
    removeAttributeQuotes: true,
    removeOptionalTags: true,
    collapseWhitespace: true,
};

const missingSVG = JSON.stringify(
    minify(fs.readFileSync(path.join(__dirname, 'missing.svg'), 'utf-8'), htmlMinifierOptions)
);

function getOutputDir(fileName) {
    return path.join(outputBaseDir, `ebay-${fileName}`, 'icons');
}

function setupDir(fileName) {
    const outputDir = getOutputDir(fileName);
    cp.execSync(`rm -rf ${JSON.stringify(outputDir)}`);
    fs.mkdirSync(outputDir);
}

setupDir('icon');
setupDir('program-badge');

// Remove unused tags in markoTag
delete markoTagJson.migrator;
delete markoTagJson.transformer;
delete markoTagJson['@_name'];
delete markoTagJson['@_themes'];

function addIcons(fileName, iconMap) {
    for (const theme of THEME_NAMES) {
        const svgFile = path.join(svgDir, `${fileName}.svg`);
        const svgContent = fs.readFileSync(svgFile, 'utf-8');
        const $ = cheerio.load(svgContent);

        for (const el of Array.from($('symbol'))) {
            const $symbol = $(el);
            const name = $symbol.attr('id').replace(/^(?:svg-)?icon-/, '');
            const symbolContent = minify($.html($symbol), htmlMinifierOptions);

            if (iconMap.has(name)) {
                iconMap.get(name)[theme] = symbolContent;
            } else {
                iconMap.set(name, { [theme]: symbolContent });
            }
        }
    }
}
addIcons('icons', icons);
addIcons('program-badges', programIcons);

function generateFile(type, iconMap) {
    for (const [name, themes] of iconMap) {
        const postfixName = type === 'icon' ? '-icon' : '';
        const iconFolder = path.join(getOutputDir(type), `ebay-${name}${postfixName}`);
        const browserJSON = path.join(iconFolder, 'browser.json');
        const markoTag = path.join(iconFolder, 'marko-tag.json');
        const index = path.join(iconFolder, 'index.marko');

        if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);

        for (const theme of THEME_NAMES) {
            const shortTheme = util.getDSVersion(theme);
            const filePath = path.join(iconFolder, util.dsFilenames[shortTheme]);
            const content = themes[theme]
                ? `module.exports = function() {
    // eslint-disable-next-line max-len,quotes
    return ${JSON.stringify(themes[theme])};
};`
                : `module.exports = function() {
    if (typeof window !== 'undefined') {
        console.error('${theme} icon not found: ${name}');
    }
    // eslint-disable-next-line max-len,quotes
    return ${missingSVG.replace('{{name}}', name)};
};`;

            fs.writeFileSync(filePath, `${content.trim()}\n`);
        }

        fs.writeFileSync(
            browserJSON,
            `${JSON.stringify(
                {
                    requireRemap: util.requireRemap,
                },
                null,
                2
            )}\n`
        );
        fs.writeFileSync(markoTag, `${JSON.stringify(markoTagJson, null, 2)}\n`);

        // eslint-disable-next-line max-len
        fs.writeFileSync(
            index,
            `import symbol from "./symbol.js";\nimport symbolDS4 from "./symbol[ds-4].js";\n<ebay-icon ...input _name="${name}" _type="${type}" _themes=[symbol, symbolDS4]/>\n`
        );
    }
}

generateFile('icon', icons);
generateFile('program-badge', programIcons);
