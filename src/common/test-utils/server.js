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
 */
function setupInput(input, arrayKey, baseInput) {
    let newInput = baseInput ? Object.assign(baseInput, input) : input;

    if (arrayKey) {
        newInput = { [arrayKey]: [newInput] };
    }

    return newInput;
}

function testCustomClass(context, selector, arrayKey, isPassThrough, baseInput) {
    let input;
    if (isPassThrough) {
        input = setupInput({ '*': { class: 'class1 class2' } }, arrayKey, baseInput);
    } else {
        input = setupInput({ class: 'class1 class2' }, arrayKey, baseInput);
    }
    const $ = getCheerio(context.render(input));
    expect($(`${selector}.class1.class2`).length).to.equal(1);
}

function testHtmlAttributes(context, selector, arrayKey, baseInput) {
    // check that each method is correctly supported
    ['*', 'htmlAttributes'].forEach(key => {
        const input = setupInput({ [key]: { 'aria-role': 'link' } }, arrayKey, baseInput);
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
    testCustomClass,
    testHtmlAttributes,
    getTransformedTemplate,
    runTransformer
};
