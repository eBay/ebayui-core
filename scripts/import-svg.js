/**
 * Loads DS4 and DS6 icons from skin and adds them to the ebay-icon symbols.
 */

const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const cheerio = require('cheerio');
const skinDir = path.dirname(require.resolve('@ebay/skin/package.json'));
const svgDir = path.join(skinDir, 'src/svg');
const outputDir = path.join(__dirname, '../src/components/ebay-icon/symbols');
const icons = new Map();
const FLAGS = {
    ds4: { 'if-not-flag': 'skin-ds6' },
    ds6: { 'if-flag': 'skin-ds6' }
};
const THEMES = Object.keys(FLAGS);

cp.execSync(`rm -rf ${JSON.stringify(outputDir)}`);
fs.mkdirSync(outputDir);

for (const theme of THEMES) {
    const svgFile = path.join(svgDir, theme, 'icons.svg');
    const svgContent = fs.readFileSync(svgFile, 'utf-8');
    const $ = cheerio.load(svgContent);

    for (const el of Array.from($('symbol'))) {
        const $symbol = $(el);
        const name = $symbol.attr('id').replace(/^(?:svg-)?icon-/, '');
        const symbolContent = $.html($symbol);

        if (icons.has(name)) {
            icons.get(name)[theme] = symbolContent;
        } else {
            icons.set(name, { [theme]: symbolContent });
        }
    }
}

for (const [name, themes] of icons) {
    const iconFolder = path.join(outputDir, name);
    const browserJSON = path.join(iconFolder, 'browser.json');
    const dependencies = [];

    if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);

    for (const theme of THEMES) {
        const content = themes[theme];

        if (!content) {
            const missingFile = './missing.js';
            const missingPath = path.join(iconFolder, missingFile);
            dependencies.push(Object.assign({ path: missingFile }, FLAGS[theme]));
            fs.writeFileSync(
                missingPath,
                `if (typeof window !== 'undefined') console.error('${theme} icon not found: ${name}');\n`
            );
        } else {
            const filePath = path.join(iconFolder, `${theme}.marko`);
            fs.writeFileSync(filePath, `${content}\n`);
        }
    }

    fs.writeFileSync(browserJSON, `${JSON.stringify({
        dependencies,
        requireRemap: [
            Object.assign({
                from: './ds6.marko',
                to: './ds4.marko'
            }, FLAGS.ds4),
            Object.assign({
                from: './ds4.marko',
                to: './ds6.marko'
            }, FLAGS.ds6)
        ]
    }, null, 2)}\n`);
}
