/* eslint-disable compat/compat */

/**
 * Loads DS4 and DS6 icons from skin and adds them to the ebay-icon symbols.
 */

import * as fs from "fs";
import * as cp from "child_process";
import * as path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import cheerio from "cheerio";
import { minify } from "html-minifier";
import markoTagJson from "../src/components/ebay-icon/marko-tag.json";
// import markoTagJson from "../src/components/ebay-icon/marko-tag.json" assert { type: "json" };
const require = createRequire(import.meta.url);

const skinDir = path.dirname(require.resolve("@ebay/skin/package.json"));
const svgDir = path.join(skinDir, "src/svg");
const defs = {};
const defsMap = new Map();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputBaseDir = path.join(__dirname, "../src/components");
const examplesMap = {};

const htmlMinifierOptions = {
    keepClosingSlash: true,
    removeAttributeQuotes: true,
    removeOptionalTags: true,
    collapseWhitespace: true,
};

function getOutputDir(fileName) {
    return path.join(outputBaseDir, `ebay-${fileName}`, "icons");
}

function getExamples(fileName) {
    return path.join(
        outputBaseDir,
        `ebay-${fileName}`,
        "examples",
        "all.marko",
    );
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
div.icon-examples`,
    );
}

// Remove unused tags in markoTag
delete markoTagJson.migrator;
delete markoTagJson.transformer;
delete markoTagJson["@_name"];
delete markoTagJson["@_themes"];

function defToObject(def) {
    const attributes = def.attr();
    const children = Array.from(def.children()).map((child) => {
        const attribs = child.attribs;
        return {
            name: child.name,
            attr: {
                ...attribs,
            },
        };
    });
    const data = {
        children,
        name: def[0].name,
        attr: {
            ...attributes,
        },
    };
    return data;
}

function addIcons(component, iconMap) {
    let svgFile = path.join(svgDir, `icons.svg`);
    if (component === "flag") {
        svgFile = path.join(svgDir, `flags.svg`);
    }
    const svgContent = fs.readFileSync(svgFile, "utf-8");
    const $ = cheerio.load(svgContent);

    for (const el of $("defs").children()) {
        const $def = $(el);
        defs[$def.attr("id")] = $def;
    }

    for (const el of Array.from($("symbol"))) {
        const $symbol = $(el);
        if ($symbol.attr("id").startsWith(component)) {
            const name = $symbol.attr("id").replace(/^(?:svg-)?icon-/, "");
            if ($symbol.html().indexOf("url(#") > -1) {
                // Find matching def
                for (const def of Object.keys(defs)) {
                    if ($symbol.html().indexOf(`url(#${def})`) > -1) {
                        defsMap.set(name, defToObject(defs[def]));
                    }
                }
            }
            const symbolContent = minify($.html($symbol), htmlMinifierOptions);

            iconMap.set(name, symbolContent);
        }
    }
}
function generateFile(type, iconMap) {
    for (const [name, themes] of iconMap) {
        let postfixName = "";
        if (type === "icon") {
            postfixName = "-icon";
        }
        const iconDef = defsMap.has(name) ? defsMap.get(name) : null;
        const iconFolder = path.join(
            getOutputDir(type),
            `ebay-${name}${postfixName}`,
        );
        const markoTag = path.join(iconFolder, "marko-tag.json");
        const index = path.join(iconFolder, "index.marko");

        if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);
        const filePath = path.join(iconFolder, "symbol.ts");
        const content = `export function symbol() {
    // eslint-disable-next-line max-len,quotes
    return ${JSON.stringify(themes)};
};`;

        fs.writeFileSync(filePath, `${content.trim()}\n`);

        if (iconDef) {
            const defPath = path.join(iconFolder, "def.ts");
            const contentDef = `export function def() {
    // eslint-disable-next-line max-len,quotes
    return ${JSON.stringify(iconDef)};
};`;

            fs.writeFileSync(defPath, `${contentDef.trim()}\n`);
        }

        fs.writeFileSync(
            markoTag,
            `${JSON.stringify(markoTagJson, null, 2)}\n`,
        );

        if (type === "image-placeholder") {
            // don't write index for image placeholder
            continue;
        }

        // eslint-disable-next-line max-len
        fs.writeFileSync(
            index,
            `import { symbol } from "./symbol";
${iconDef ? 'import { def } from "./def"' : ""}
import type { Input as IconInput } from "../../${
                type === "icon" ? "" : "../ebay-icon/"
            }component-browser"
export type Input = Omit<IconInput, \`_\${string}\`>;
<ebay-icon ...input _name="${name}" _type="${type}" _themes=symbol${
                iconDef ? " _def=def" : ""
            }/>
`,
        );
    }
}

function generateExamples(type, iconMap) {
    const exampleFile = path.join(getExamples(type));
    const file = fs.readFileSync(exampleFile, "utf-8");
    const exampleHTML = [];
    for (const name of iconMap) {
        const postfixName = type === "icon" ? "-icon" : "";
        const iconName = `ebay-${name}${postfixName}`;
        exampleHTML.push(`    div
        span.icon
            ${iconName}
        span.text
            -- ${iconName}\n`);
    }
    fs.writeFileSync(exampleFile, `${file}\n${exampleHTML.join("\n")}`);
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

setupDir("icon");
setupDir("star-rating");
setupDir("image-placeholder");
setupDir("flag");

generateIcon("icon");
generateIcon("star-rating");
generateIcon("image-placeholder");
generateIcon("flag");

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
