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

describe('listbox', () => {
    test('renders basic version', context => {
        const input = { options, name: 'listbox-name' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox-button').length).to.equal(1);
        expect($('.listbox-button__control').length).to.equal(1);
        expect($('.listbox-button__listbox[role=listbox]').length).to.equal(1);
        expect($('.listbox-button__option[role=option]').length).to.equal(2);
        expect($('.listbox-button__option[role=option][aria-selected="true"]').length).to.equal(1);
    });

    test('renders empty', context => {
        const input = { emptyOptions, name: 'listbox-name' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox-button').length).to.equal(1);
        expect($('.listbox-button__control').length).to.equal(1);
        expect($('.listbox-button__listbox[role=listbox]').length).to.equal(0);
        expect($('.listbox-button__option[role=option]').length).to.equal(0);
    });

    test('renders with second item selected', context => {
        const input = { options, name: 'listbox-name' };
        input.options[0].selected = false;
        input.options[1].selected = true;
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.listbox-button').length).to.equal(1);
        expect($('.listbox-button__control').length).to.equal(1);
        expect($('.listbox-button__listbox[role=listbox]').length).to.equal(1);
        expect($('.listbox-button__option[role=option]').length).to.equal(2);
        expect($('.listbox-button__option[role=option][aria-selected="true"]:nth-child(2)').length).to.equal(1);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'span.listbox-button'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'span.listbox-button'));
});

describe('select-option', () => {
    test('handles pass-through html attributes', c => testUtils.testHtmlAttributes(c, '.listbox-button__option', 'options'));
    test('handles custom class and style', c => testUtils.testClassAndStyle(c, '.listbox-button__option', 'options'));
});
