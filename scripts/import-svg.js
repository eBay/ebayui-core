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

try {
    cp.execSync(`rm -r ${JSON.stringify(outputDir)}`);
} finally {
    fs.mkdirSync(outputDir);
}

for (const theme of fs.readdirSync(svgDir)) {
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
    if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);

    fs.writeFileSync(browserJSON, `${JSON.stringify({
        requireRemap: [{
            from: './ds6.marko',
            to: './ds4.marko',
            'if-not-flag': 'skin-ds6'
        }, {
            from: './ds4.marko',
            to: './ds6.marko',
            'if-flag': 'skin-ds6'
        }]
    }, null, 2)}\n`);

    for (const theme in themes) {
        if (!themes.hasOwnProperty(theme)) continue;
        const content = themes[theme];
        const filePath = path.join(iconFolder, `${theme}.marko`);
        fs.writeFileSync(filePath, `${content}\n`);
    }
}
