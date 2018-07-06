const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const options = [{
    value: 1,
    label: 'option 1'
}, {
    value: 2,
    label: 'option 2'
}];
const emptyOptions = [];

describe('select', () => {
    test('renders basic version', context => {
        const input = { options };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.select').length).to.equal(1);
    });

    test('renders empty', context => {
        const input = { emptyOptions };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.select').length).to.equal(1);
        expect($('.select select > option').length).to.equal(0);
    });

    test('renders with second item selected', context => {
        const input = { options };
        input.options[0].selected = false;
        input.options[1].selected = true;
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.select').length).to.equal(1);
        expect($('.select select > option[selected]:nth-child(2)').length).to.equal(1);
    });

    test('renders with borderless=true', context => {
        const input = { borderless: true, options };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.select.select--borderless').length).to.equal(1);
    });

    test('renders with borderless=false', context => {
        const input = { borderless: false, options };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.select.select--borderless').length).to.equal(0);
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, 'span.select select');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, 'span.select');
    });
});
