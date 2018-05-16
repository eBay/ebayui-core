const cheerio = require('cheerio');
const expect = require('chai').expect;

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

module.exports = {
    getCheerio,
    testCustomClass,
    testHtmlAttributes
};
