const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const options = [{
    text: 'option 1'
}, {
    text: 'option 2'
}];
const emptyOptions = [];

describe('combobox', () => {
    test('renders basic version', context => {
        const input = { options, autocomplete: 'list' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox').length).to.equal(1);
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__options[role=listbox]').length).to.equal(1);
        expect($('.combobox__option[role=option]').length).to.equal(2);
        expect($('.combobox__option[role=option][aria-selected="true"]').length).to.equal(0);
    });

    test('renders empty', context => {
        const input = { emptyOptions, autocomplete: 'list' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox').length).to.equal(1);
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__options[role=listbox]').length).to.equal(0);
        expect($('.combobox__option[role=option]').length).to.equal(0);
    });

    test('renders with second item selected', context => {
        const input = { options, value: 'option 2', autocomplete: 'list' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox').length).to.equal(1);
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__options[role=listbox]').length).to.equal(1);
        expect($('.combobox__option[role=option]').length).to.equal(1);
        expect($('.combobox__option[role=option][aria-selected="true"]').length).to.equal(1);
    });

    test('renders with borderless=true', context => {
        const input = { borderless: true, options, autocomplete: 'list' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox__control.combobox__control--borderless').length).to.equal(1);
    });

    test('renders with borderless=false', context => {
        const input = { borderless: false, options, autocomplete: 'list' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__control.combobox__control--borderless').length).to.equal(0);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'input'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'span.combobox'));
});

describe('combobox-option', () => {
    test('handles pass-through html attributes', c =>
        testUtils.testHtmlAttributes(c, '.combobox__option', 'options', options[0]));

    test('handles custom class and style', c =>
        testUtils.testClassAndStyle(c, '.combobox__option', 'options', options[0]));
});
