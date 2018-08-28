/**
 * Loads DS4 and DS6 icons from skin and adds them to the ebay-icon symbols.
 */

const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const cheerio = require('cheerio');
const skinDir = path.dirname(require.resolve('@ebay/skin/package.json'));
const svgDir = path.join(skinDir, 'src/svg');
const outputDir = path.join(__dirname, '../../src/components/ebay-icon/symbols');
const missingSVG = fs.readFileSync(path.join(__dirname, 'missing.svg'), 'utf-8');
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

// map DS4 icons that should use the markup of a DS6 icon
const map4To6 = { 'arrow-down': 'chevron-down-bold' };
Object.keys(map4To6).forEach(ds4Name => {
    const ds6Name = map4To6[ds4Name];
    icons.get(ds6Name).ds4 = icons.get(ds4Name).ds4.replace(ds4Name, ds6Name);
});

for (const [name, themes] of icons) {
    const iconFolder = path.join(outputDir, name);
    const browserJSON = path.join(iconFolder, 'browser.json');
    const dependencies = [];

    if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);

    for (const theme of THEMES) {
        let content = themes[theme];

        if (content) {
            content += '\n';
        } else {
            const missingFile = './missing.js';
            const missingPath = path.join(iconFolder, missingFile);
            dependencies.push(Object.assign({ path: missingFile }, FLAGS[theme]));
            fs.writeFileSync(
                missingPath,
                `if (typeof window !== 'undefined') console.error('${theme} icon not found: ${name}');\n`
            );

            content = missingSVG.replace('{{name}}', name);
        }

        const filePath = path.join(iconFolder, `${theme}.marko`);
        fs.writeFileSync(filePath, content);
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
