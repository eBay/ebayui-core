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
const examplesMap = {};

const htmlMinifierOptions = {
    keepClosingSlash: true,
    removeAttributeQuotes: true,
    removeOptionalTags: true,
    collapseWhitespace: true,
};

function getOutputDir(fileName) {
    return path.join(outputBaseDir, `ebay-${fileName}`, 'icons');
}

function getExamples(fileName) {
    return path.join(outputBaseDir, `ebay-${fileName}`, 'examples', 'all.marko');
}

function setupDir(fileName) {
    const outputDir = getOutputDir(fileName);
    const example = getExamples(fileName);
    cp.execSync(`rm -rf ${JSON.stringify(outputDir)}`);
    cp.execSync(`rm -rf ${JSON.stringify(example)}`);
    fs.mkdirSync(outputDir);
    fs.writeFileSync(
        example,
        `class {}
div.icon-examples`
    );
}

// Remove unused tags in markoTag
delete markoTagJson.migrator;
delete markoTagJson.transformer;
delete markoTagJson['@_name'];
delete markoTagJson['@_themes'];

function addIcons(component, iconMap) {
    const svgFile = path.join(svgDir, `icons.svg`);
    const svgContent = fs.readFileSync(svgFile, 'utf-8');
    const $ = cheerio.load(svgContent);

    for (const el of Array.from($('symbol'))) {
        const $symbol = $(el);
        if ($symbol.attr('id').startsWith(component)) {
            const name = $symbol.attr('id').replace(/^(?:svg-)?icon-/, '');
            const symbolContent = minify($.html($symbol), htmlMinifierOptions);

            iconMap.set(name, symbolContent);
        }
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

function generateExamples(type, iconMap) {
    const exampleFile = path.join(getExamples(type));
    const file = fs.readFileSync(exampleFile, 'utf-8');
    const exampleHTML = [];
    for (const name of iconMap) {
        const postfixName = type === 'icon' ? '-icon' : '';
        const iconName = `ebay-${name}${postfixName}`;
        exampleHTML.push(`    div
        span.icon
            ${iconName}
        span.text
            -- ${iconName}\n`);
    }
    fs.writeFileSync(exampleFile, `${file}\n${exampleHTML.join('\n')}`);
}

function generateIcon(componentName) {
    const icons = new Map();
    addIcons(componentName, icons);
    generateFile(componentName, icons);
    examplesMap[componentName] = examplesMap[componentName] || [];
    for (const [name] of icons) {
        examplesMap[componentName].push(name);
    }
}

setupDir('icon');
setupDir('program-badge');
setupDir('star-rating');

generateIcon('icon');
generateIcon('program-badge');
generateIcon('star-rating');

Object.keys(examplesMap).forEach((componentName) => {
    examplesMap[componentName].sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    generateExamples(componentName, examplesMap[componentName]);
});
