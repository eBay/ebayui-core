const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

function testFirstItemSelected($) {
    expect($('.tabs__item').length).to.equal(3);
    expect($('.tabs__item:first-of-type[aria-selected="true"]').length).to.equal(1);
    expect($('.tabs__item[aria-selected="false"]').length).to.equal(2);
    expect($('.tabs__panel').length).to.equal(3);
    expect($('.tabs__panel:first-of-type:not([hidden])').length).to.equal(1);
    expect($('.tabs__panel[hidden]').length).to.equal(2);
}

describe('tab', () => {
    test('renders basic version', context => {
        const input = { items: mock.itemsWithFirstSelected, panels: mock.panels };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tabs').length).to.equal(1);
        testFirstItemSelected($);
    });

    test('normalizes to first item selection when multiple items are selected', context => {
        const input = { items: mock.itemsWithMultipleSelected, panels: mock.panels };
        const $ = testUtils.getCheerio(context.render(input));
        testFirstItemSelected($);
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.tabs');
    });
});

describe('tab-item', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs__item', 'items');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.tabs__item', 'items');
    });
});

describe('tab-panel', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs__panel', 'panels');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.tabs__panel', 'panels');
    });
});
