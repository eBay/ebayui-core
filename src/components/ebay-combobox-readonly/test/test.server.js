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

describe('combobox', () => {
    it('renders basic version', context => {
        const input = { options };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox').length).to.equal(1);
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__options[role=listbox]').length).to.equal(1);
        expect($('.combobox__option[role=option]').length).to.equal(2);
        expect($('.combobox__option[role=option][aria-selected="true"]').length).to.equal(1);
    });

    it('renders empty', context => {
        const input = { emptyOptions };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox').length).to.equal(1);
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__options[role=listbox]').length).to.equal(0);
        expect($('.combobox__option[role=option]').length).to.equal(0);
    });

    it('renders with second item selected', context => {
        const input = { options };
        input.options[0].selected = false;
        input.options[1].selected = true;
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox').length).to.equal(1);
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__options[role=listbox]').length).to.equal(1);
        expect($('.combobox__option[role=option]').length).to.equal(2);
        expect($('.combobox__option[role=option][aria-selected="true"]:nth-child(2)').length).to.equal(1);
    });

    it('renders with borderless=true', context => {
        const input = { borderless: true, options };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox__control.combobox__control--borderless').length).to.equal(1);
    });

    it('renders with borderless=false', context => {
        const input = { borderless: false, options };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.combobox__control').length).to.equal(1);
        expect($('.combobox__control.combobox__control--borderless').length).to.equal(0);
    });

    it('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'input'));
    it('handles custom class and style', context => testUtils.testClassAndStyle(context, 'span.combobox'));
});

describe('combobox-option', () => {
    it('handles pass-through html attributes', c => testUtils.testHtmlAttributes(c, '.combobox__option', 'options'));
    it('handles custom class and style', c => testUtils.testClassAndStyle(c, '.combobox__option', 'options'));
});
