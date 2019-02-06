const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const options = [{
    value: 1,
    text: 'option 1'
}, {
    value: 2,
    text: 'option 2'
}];
const emptyOptions = [];

describe.only('select', () => {
    test('renders basic version', context => {
        const input = { options, name: 'listbox-name' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox').length).to.equal(1);
        expect($('.listbox__control').length).to.equal(1);
        expect($('.listbox__options[role=listbox]').length).to.equal(1);
        expect($('.listbox__option[role=option]').length).to.equal(2);
        expect($('.listbox__option[role=option][aria-selected="true"]').length).to.equal(1);
    });

    test('renders empty', context => {
        const input = { emptyOptions, name: 'listbox-name' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox').length).to.equal(1);
        expect($('.listbox__control').length).to.equal(1);
        expect($('.listbox__options[role=listbox]').length).to.equal(0);
        expect($('.listbox__option[role=option]').length).to.equal(0);
    });

    test('renders with second item selected', context => {
        const input = { options, name: 'listbox-name' };
        input.options[0].selected = false;
        input.options[1].selected = true;
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox').length).to.equal(1);
        expect($('.listbox__control').length).to.equal(1);
        expect($('.listbox__options[role=listbox]').length).to.equal(1);
        expect($('.listbox__option[role=option]').length).to.equal(2);
        expect($('.listbox__option[role=option][aria-selected="true"]:nth-child(2)').length).to.equal(1);
    });

    test('renders with borderless=true', context => {
        const input = { borderless: true, options, name: 'listbox-name' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox__control.listbox__control--borderless').length).to.equal(1);
    });

    test('renders with borderless=false', context => {
        const input = { borderless: false, options, name: 'listbox-name' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox__control').length).to.equal(1);
        expect($('.listbox__control.listbox__control--borderless').length).to.equal(0);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'input'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'span.listbox'));
});

describe('select-option', () => {
    test('handles pass-through html attributes', c => testUtils.testHtmlAttributes(c, '.listbox__option', 'options'));
    test('handles custom class and style', c => testUtils.testClassAndStyle(c, '.listbox__option', 'options'));
});
