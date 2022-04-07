/* eslint-disable compat/compat */

/**
 * Loads DS4 and DS6 icons from skin and adds them to the ebay-icon symbols.
 */

import * as fs from 'fs';
import * as cp from 'child_process';
import * as path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import cheerio from 'cheerio';
import { minify } from 'html-minifier';
import markoTagJson from '../src/components/ebay-icon/marko-tag.json';
const require = createRequire(import.meta.url);

const skinDir = path.dirname(require.resolve('@ebay/skin/package.json'));
const svgDir = path.join(skinDir, 'src/svg');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputBaseDir = path.join(__dirname, '../src/components');

const htmlMinifierOptions = {
    keepClosingSlash: true,
    removeAttributeQuotes: true,
    removeOptionalTags: true,
    collapseWhitespace: true,
};

function getOutputDir(fileName) {
    return path.join(outputBaseDir, `ebay-${fileName}`, 'icons');
}

function setupDir(fileName) {
    const outputDir = getOutputDir(fileName);
    cp.execSync(`rm -rf ${JSON.stringify(outputDir)}`);
    fs.mkdirSync(outputDir);
}

// Remove unused tags in markoTag
delete markoTagJson.migrator;
delete markoTagJson.transformer;
delete markoTagJson['@_name'];
delete markoTagJson['@_themes'];

function addIcons(fileName, iconMap) {
    const svgFile = path.join(svgDir, `${fileName}.svg`);
    const svgContent = fs.readFileSync(svgFile, 'utf-8');
    const $ = cheerio.load(svgContent);

    for (const el of Array.from($('symbol'))) {
        const $symbol = $(el);
        const name = $symbol.attr('id').replace(/^(?:svg-)?icon-/, '');
        const symbolContent = minify($.html($symbol), htmlMinifierOptions);

        iconMap.set(name, symbolContent);
    }
}
function generateFile(type, iconMap) {
    for (const [name, themes] of iconMap) {
        const postfixName = type === 'icon' ? '-icon' : '';
        const iconFolder = path.join(getOutputDir(type), `ebay-${name}${postfixName}`);
        const markoTag = path.join(iconFolder, 'marko-tag.json');
        const index = path.join(iconFolder, 'index.marko');

        if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);
        const filePath = path.join(iconFolder, 'symbol.js');
        const content = `export function symbol() {
    // eslint-disable-next-line max-len,quotes
    return ${JSON.stringify(themes)};
};`;

        fs.writeFileSync(filePath, `${content.trim()}\n`);

        fs.writeFileSync(markoTag, `${JSON.stringify(markoTagJson, null, 2)}\n`);

        // eslint-disable-next-line max-len
        fs.writeFileSync(
            index,
            `import { symbol } from "./symbol.js";\n<ebay-icon ...input _name="${name}" _type="${type}" _themes=symbol/>\n`
        );
    }
}

function generateIcon(filename, componentName) {
    const icons = new Map();
    setupDir(componentName);
    addIcons(filename, icons);
    generateFile(componentName, icons);
}

generateIcon('icons', 'icon');
generateIcon('program-badges', 'program-badge');
generateIcon('star-rating', 'star-rating');
