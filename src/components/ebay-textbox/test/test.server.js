
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const mock = require('../mock');
const rootSelector = `span.textbox`;
const fluidRootSelector = `div.textbox`;
const inputSelector = `input.textbox__control`;
const fluidInputSelector = `input.textbox__control--fluid`;
const textareaSelector = `textarea.textbox__control`;
const iconSelector = `svg.textbox__icon`;
const inputPostfixSelector = `span.textbox--icon-end`;
const floatingLabelSelector = `label.floating-label__label`;
const floatingLabelDisabledSelector = `label.floating-label__label.floating-label__label--disabled`;
const inputUnderlineSelector = `input.textbox__control.textbox__control--underline`;

describe('ebay-textbox', () => {
    test('renders default input textbox', context => {
        const $ = testUtils.getCheerio(context.render());
        const $input = $(inputSelector);
        expect($(rootSelector).length).to.equal(1);
        expect($input.length).to.equal(1);
        expect($input.attr('id')).to.be.a('string');
    });

    test('renders a default input textbox with a default value', context => {
        const inputValue = 'some default value';
        const input = { value: inputValue };
        const $ = testUtils.getCheerio(context.render(input));
        const $input = $(inputSelector);
        expect($input.length).to.equal(1);
        expect($input.val()).to.equal(inputValue);
    });

    test('renders default input textbox with an id', context => {
        const $ = testUtils.getCheerio(context.render({ id: 'test' }));
        const $input = $(inputSelector);
        expect($input.attr('id')).to.equal('test');
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

    test('renders a textarea element with a default value', context => {
        const inputValue = 'some default value';
        const input = { multiline: true, value: inputValue };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(textareaSelector).length).to.equal(1);
        expect($(textareaSelector).val()).to.equal(inputValue);
    });

    test('renders a textarea element with prefix icon', context => {
        const input = { icon: 'search', iconTag: { renderBody: mock.iconRenderBody } };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(iconSelector).length).to.equal(1);
    });

    test('renders a textarea element with postfix icon', context => {
        const input = { icon: 'search', iconPosition: 'postfix', iconTag: { renderBody: mock.iconRenderBody } };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(inputPostfixSelector).length).to.equal(1);
        expect($(iconSelector).length).to.equal(1);
    });

    test('renders an input textbox with inline floating label', context => {
        const input = { floatingLabel: 'Email address' };
        const $ = testUtils.getCheerio(context.render(input));
        const $floatingLabel = $(floatingLabelSelector);
        const $input = $(inputSelector);
        expect($floatingLabel.text()).to.equal('Email address');
        expect($(inputUnderlineSelector).length).to.equal(1);
        expect($input.attr('id')).to.be.a('string').and.to.equal($floatingLabel.attr('for'));
    });

    test('renders an input textbox with inline floating label and an id', context => {
        const input = { floatingLabel: 'Email address', id: 'test' };
        const $ = testUtils.getCheerio(context.render(input));
        const $floatingLabel = $(floatingLabelSelector);
        const $input = $(inputSelector);
        expect($floatingLabel.text()).to.equal('Email address');
        expect($(inputUnderlineSelector).length).to.equal(1);
        expect($input.attr('id')).to.equal('test');
        expect($floatingLabel.attr('for')).to.equal('test');
    });

    test('renders a disabled input textbox with disabled floating label', context => {
        const input = { floatingLabel: 'Email address', disabled: true, value: 'test@ebay.com' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(floatingLabelDisabledSelector).text()).to.equal('Email address');
        expect($(inputUnderlineSelector).length).to.equal(1);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, inputSelector));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, '.textbox'));
});

describe('transformer', () => {
    const componentPath = '../index.js';

    test('transforms an icon attribute into a tag', () => {
        const tagString = '<ebay-textbox icon="settings"/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl.tagName).to.equal('ebay-textbox:icon');
    });

    test('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-textbox/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });
});
