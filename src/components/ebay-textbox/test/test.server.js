
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const rootSelector = `span.textbox`;
const fluidRootSelector = `div.textbox`;
const inputSelector = `input.textbox__control`;
const fluidInputSelector = `input.textbox__control--fluid`;
const textareaSelector = `textarea.textbox__control`;

test('renders default input textbox', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(rootSelector).length).to.equal(1);
    expect($(inputSelector).length).to.equal(1);
});

test('renders fluid input textbox', context => {
    const input = { fluid: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(fluidRootSelector).length).to.equal(1);
    expect($(fluidInputSelector).length).to.equal(1);
});

test('renders a input textbox with invalid/error state', context => {
    const input = { invalid: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect(Boolean($(inputSelector).prop('aria-invalid'))).to.equal(true);
});

test('renders a textarea element', context => {
    const input = { multiline: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(textareaSelector).length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, inputSelector);
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, '.textbox');
});
