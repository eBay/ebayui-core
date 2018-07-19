/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const rootSelector = `span.textbox`;
const inputSelector = `input.textbox__control`;
const textareaSelector = `textarea.textbox__control`;

test('renders default input textbox', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(rootSelector).length).to.eql(1);
    expect($(inputSelector).length).to.eql(1);
});

test('renders input textbox with some value', context => {
    const input = { value: 'this is texbox' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(inputSelector).val()).to.equal('this is texbox');
});

test('renders input textbox with a placeholder', context => {
    const input = { placeholder: 'enter your input' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(inputSelector).attr('placeholder')).to.equal('enter your input');
});

test('renders a disabled input textbox', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect(Boolean($(inputSelector).is(':disabled'))).to.be.true;
});

test('renders a input textbox with invalid/error state', context => {
    const input = { invalid: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect(Boolean($(inputSelector).prop('aria-invalid'))).to.be.true;
});

test('renders input textbox with a custom class', context => {
    const input = { class: 'custom__class' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(`${inputSelector}.custom__class`).length).to.eql(1);
});

test('renders a textarea element', context => {
    const input = { multiline: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(textareaSelector).length).to.eql(1);
});

test('renders a disabled textarea element', context => {
    const input = { multiline: true, disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect(Boolean($(textareaSelector).is(':disabled'))).to.be.true;
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, inputSelector);
});
