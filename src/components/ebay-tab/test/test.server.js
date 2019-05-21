const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('tab', () => {
    test('renders basic version with defaults', context => {
        const input = { headings: mock.headings, panels: mock.panels };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('div.tabs').length).to.equal(1);
        expect($('div.tabs__item').length).to.equal(3);
        expect($('div.tabs__item:first-of-type[aria-selected="true"]').length).to.equal(1);
        expect($('div.tabs__item:not([aria-selected="true"])').length).to.equal(2);
        expect($('div.tabs__panel').length).to.equal(3);
        expect($('div.tabs__panel:first-of-type:not([hidden])').length).to.equal(1);
        expect($('div.tabs__panel[hidden]').length).to.equal(2);
    });

    test('renders selection based on index', context => {
        const input = { index: '1', headings: mock.headings, panels: mock.panels };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('div.tabs').length).to.equal(1);
        expect($('div.tabs__item').length).to.equal(3);
        expect($('div.tabs__item:nth-of-type(2)[aria-selected="true"]').length).to.equal(1);
        expect($('div.tabs__item:not([aria-selected="true"])').length).to.equal(2);
        expect($('div.tabs__panel').length).to.equal(3);
        expect($('div.tabs__panel:nth-of-type(2):not([hidden])').length).to.equal(1);
        expect($('div.tabs__panel[hidden]').length).to.equal(2);
    });

    test('renders fake version with defaults', context => {
        const input = { fake: true, headings: mock.fakeHeadings, panels: mock.panels };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('div.fake-tabs').length).to.equal(1);
        expect($('ul.fake-tabs__items').length).to.equal(1);
        expect($('li.fake-tabs__item').length).to.equal(3);
        expect($('li.fake-tabs__item.fake-tabs__item--current:first-of-type').length).to.equal(1);
        expect($('li.fake-tabs__item.fake-tabs__item--current > a[aria-current="page"]').length).to.equal(1);
        expect($('li.fake-tabs__item:not(.fake-tabs__item--current)').length).to.equal(2);
        expect($('div.fake-tabs__content').length).to.equal(1);
        expect($('div.fake-tabs__cell').length).to.equal(1);
        expect($('div.fake-tabs__panel').length).to.equal(1);
    });

    test('renders fake version with selection based on index', context => {
        const input = { fake: true, index: '1', headings: mock.headings, panels: mock.panels };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('div.fake-tabs').length).to.equal(1);
        expect($('ul.fake-tabs__items').length).to.equal(1);
        expect($('li.fake-tabs__item').length).to.equal(3);
        expect($('li.fake-tabs__item.fake-tabs__item--current:nth-of-type(2)').length).to.equal(1);
        expect($('li.fake-tabs__item.fake-tabs__item--current > a[aria-current="page"]').length).to.equal(1);
        expect($('li.fake-tabs__item:not(.fake-tabs__item--current)').length).to.equal(2);
        expect($('div.fake-tabs__content').length).to.equal(1);
        expect($('div.fake-tabs__cell').length).to.equal(1);
        expect($('div.fake-tabs__panel').length).to.equal(1);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, '.tabs'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, '.tabs'));
});

describe('tab-heading', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs__item', 'headings');
    });

    test('handles custom class and style', context => {
        testUtils.testClassAndStyle(context, '.tabs__item', 'headings');
    });

    test('handles pass-through html attributes when fake', context => {
        const parentInput = { fake: true, panels: mock.panels };
        testUtils.testHtmlAttributes(context, '.fake-tabs__item', 'headings', {}, parentInput);
    });

    test('handles custom class and style when fake', context => {
        const parentInput = { fake: true, panels: mock.panels };
        testUtils.testClassAndStyle(context, '.fake-tabs__item', 'headings', {}, parentInput);
    });
});

describe('tab-panel', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs__panel', 'panels');
    });

    test('handles custom class and style', context => {
        testUtils.testClassAndStyle(context, '.tabs__panel', 'panels');
    });

    test('handles pass-through html attributes when fake', context => {
        const parentInput = { fake: true, headings: mock.fakeHeadings };
        testUtils.testHtmlAttributes(context, '.fake-tabs__panel', 'panels', {}, parentInput);
    });

    test('handles custom class and style when fake', context => {
        const parentInput = { fake: true, headings: mock.fakeHeadings };
        testUtils.testClassAndStyle(context, '.fake-tabs__panel', 'panels', {}, parentInput);
    });
});
