
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const rootSelector = `span.textbox`;
const inputSelector = `input.textbox__control`;
const textareaSelector = `textarea.textbox__control`;

test('renders default input textbox', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(rootSelector).length).to.equal(1);
    expect($(inputSelector).length).to.equal(1);
});

test('renders input textbox with a placeholder', context => {
    const input = { placeholder: 'enter your input' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(inputSelector).attr('placeholder')).to.equal('enter your input');
});

test('renders a disabled input textbox', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect(Boolean($(inputSelector).is(':disabled'))).to.equal(true);
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

test('renders a disabled textarea element', context => {
    const input = { multiline: true, disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect(Boolean($(textareaSelector).is(':disabled'))).to.equal(true);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, inputSelector);
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, '.textbox');
});
