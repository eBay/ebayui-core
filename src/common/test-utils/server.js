const cheerio = require('cheerio');
const expect = require('chai').expect;
const prettyPrint = require('marko-prettyprint').prettyPrintAST;
const markoCompiler = require('marko/compiler');
let CompileContext;
let Builder;

try {
    // v3 paths
    CompileContext = require('marko/compiler/CompileContext');
    Builder = require('marko/compiler/Builder');
} catch (e) {
    // v4 paths
    const target = require('marko/env').isDebug ? 'src' : 'dist';
    CompileContext = require(`marko/${target}/compiler/CompileContext`);
    Builder = require(`marko/${target}/compiler/Builder`);
}

/**
 * Get Cheerio instance based on output object from rendering
 * @param {Object} output
 */
function getCheerio(output) {
    return cheerio.load(output.html.toString());
}

/**
 * Create input to be used for rendering through test utils
 * @param {Object} input: additional input to use with test utils
 * @param {String} arrayKey: if provided, assign input as a single-entry array (for marko nested tags)
 * @param {String} baseInput: if provided, use as base for additional input
 * @param {String} parentInput: use to modify base input of parent, rather than that of arrayKey
 */
function setupInput(input, arrayKey, baseInput, parentInput = {}) {
    let newInput = baseInput ? Object.assign(baseInput, input) : input;

    if (arrayKey) {
        newInput = Object.assign(parentInput, { [arrayKey]: [newInput] });
    }

    return newInput;
}

function testClassAndStyle(context, selector, arrayKey, baseInput, parentInput) {
    [
        { input: { class: { class1: true, class2: true } }, test: '.class1.class2' },
        { input: { style: { color: 'red' } }, test: '[style*="color:red"]' }
    ].forEach(scenario => {
        const input = setupInput(scenario.input, arrayKey, baseInput, parentInput);
        const $ = getCheerio(context.render(input));
        expect($(`${selector}${scenario.test}`).length).to.equal(1);
    });
}

function testHtmlAttributes(context, selector, arrayKey, baseInput, parentInput) {
    // check that each method is correctly supported
    ['*', 'htmlAttributes'].forEach(key => {
        const input = setupInput({ [key]: { 'aria-role': 'link' } }, arrayKey, baseInput, parentInput);
        const $ = getCheerio(context.render(input));
        expect($(`${selector}[aria-role=link]`).length).to.equal(1);
    });
}

function getTransformerData(srcString, componentPath) {
    const templateAST = markoCompiler.parseRaw(
        srcString,
        componentPath
    );
    const context = new CompileContext(
        srcString,
        componentPath,
        Builder.DEFAULT_BUILDER
    );

    return { context, templateAST };
}

function getTransformedTemplate(transformer, srcString, componentPath) {
    const { context, templateAST } = getTransformerData(srcString, componentPath);
    context.root = templateAST;
    transformer(templateAST.body.array[0], context);
    return prettyPrint(templateAST).replace(/\n/g, '').replace(/\s{4}/g, '');
}

function runTransformer(transformer, srcString, componentPath) {
    const { context, templateAST } = getTransformerData(srcString, componentPath);
    transformer(templateAST.body.array[0], context);
    return {
        context,
        el: templateAST.body.array[0]
    };
}

module.exports = {
    getCheerio,
    testClassAndStyle,
    testHtmlAttributes,
    getTransformedTemplate,
    runTransformer
};
