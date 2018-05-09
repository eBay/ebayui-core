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
 * Put input in single-entry array when specified (for marko nested tags)
 * @param {Object} input
 * @param {String} arrayKey
 */
function setupInput(input, arrayKey) {
    let newInput = input;
    if (arrayKey) {
        newInput = { [arrayKey]: [input] };
    }
    return newInput;
}

function testCustomClass(context, selector, arrayKey, isPassThrough) {
    let input;
    if (isPassThrough) {
        input = setupInput({ '*': { class: 'class1 class2' } }, arrayKey);
    } else {
        input = setupInput({ class: 'class1 class2' }, arrayKey);
    }
    const $ = getCheerio(context.render(input));
    expect($(`${selector}.class1.class2`).length).to.equal(1);
}

function testHtmlAttributes(context, selector, arrayKey) {
    // check that each method is correctly supported
    ['*', 'htmlAttributes'].forEach(key => {
        const input = setupInput({ [key]: { 'aria-role': 'link' } }, arrayKey);
        const $ = getCheerio(context.render(input));
        expect($(`${selector}[aria-role=link]`).length).to.equal(1);
    });
}

module.exports = {
    getCheerio,
    testCustomClass,
    testHtmlAttributes
};
