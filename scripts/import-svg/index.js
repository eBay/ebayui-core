/**
 * Loads DS4 and DS6 icons from skin and adds them to the ebay-icon symbols.
 */

const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const cheerio = require('cheerio');
const formatHTML = require('diffable-html');
const skinDir = path.dirname(require.resolve('@ebay/skin/package.json'));
const svgDir = path.join(skinDir, 'src/svg');
const outputDir = path.join(__dirname, '../../src/components/ebay-icon/symbols');
const missingSVG = formatHTML(fs.readFileSync(path.join(__dirname, 'missing.svg'), 'utf-8'));
const icons = new Map();
const THEMES = {
    ds4: {
        flags: { 'if-not-flag': 'skin-ds6' },
        file: './index.marko'
    },
    ds6: {
        flags: { 'if-flag': 'skin-ds6' },
        file: './index[skin-ds6].marko'
    }
};

const THEME_NAMES = Object.keys(THEMES);

cp.execSync(`rm -rf ${JSON.stringify(outputDir)}`);
fs.mkdirSync(outputDir);

for (const theme of THEME_NAMES) {
    const svgFile = path.join(svgDir, theme, 'icons.svg');
    const svgContent = fs.readFileSync(svgFile, 'utf-8');
    const $ = cheerio.load(svgContent);

    for (const el of Array.from($('symbol'))) {
        const $symbol = $(el);
        const name = $symbol.attr('id').replace(/^(?:svg-)?icon-/, '');
        const symbolContent = formatHTML($.html($symbol));

        if (icons.has(name)) {
            icons.get(name)[theme] = symbolContent;
        } else {
            icons.set(name, { [theme]: symbolContent });
        }
    }
}

// map DS4 icons that should use the markup of a DS6 icon
const map4To6 = { 'arrow-down': 'chevron-down-bold' };
Object.keys(map4To6).forEach(ds4Name => {
    const ds6Name = map4To6[ds4Name];
    icons.get(ds6Name).ds4 = icons.get(ds4Name).ds4.replace(ds4Name, ds6Name);
});

for (const [name, themes] of icons) {
    const iconFolder = path.join(outputDir, name);
    const browserJSON = path.join(iconFolder, 'browser.json');

    if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);

    for (const theme of THEME_NAMES) {
        const filePath = path.join(iconFolder, THEMES[theme].file);
        const content = themes[theme] || (
            `<% if (typeof window !== 'undefined') console.error('${theme} icon not found: ${name}') %>\n${
                missingSVG.replace('{{name}}', name)
            }`
        );

        fs.writeFileSync(filePath, `${content.trim()}\n`);
    }

    fs.writeFileSync(browserJSON, `${JSON.stringify({
        requireRemap: [
            Object.assign({
                from: THEMES.ds6.file,
                to: THEMES.ds4.file
            }, THEMES.ds4.flags),
            Object.assign({
                from: THEMES.ds4.file,
                to: THEMES.ds6.file
            }, THEMES.ds6.flags)
        ]
    }, null, 2)}\n`);
}
