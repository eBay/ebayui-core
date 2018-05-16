const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock/index');

describe('pagination', () => {
    test('renders basic version', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicLinks));
        expect($('nav.pagination').length).to.equal(1);
        expect($('.pagination__previous').length).to.equal(1);
        expect($('.pagination__next').length).to.equal(1);
        expect($('h2.clipped').length).to.equal(1);
    });

    test('renders fake version', context => {
        const $ = testUtils.getCheerio(context.render(mock.hijax));
        expect($('a.pagination__item[role="button"]').length).to.equal(2);
    });

    test('renders with a selected element when current page defined', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicLinks));
        expect($('.pagination__item[aria-current="page"]').length).to.equal(1);
    });

    test('renders without a selected element when current page not defined', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicLinksWithoutCurrent));
        expect($('.pagination__item[aria-current="page"]').length).to.equal(0);
    });

    test('renders with aria-disabled when navigation is disabled', context => {
        const $ = testUtils.getCheerio(context.render(mock.disabledNavigation));
        expect($('.pagination__previous[aria-disabled=true]').length).to.equal(1);
    });

    test('renders with arrows disabled when not provided in input', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicLinksWithoutNavigation));
        expect($('.pagination__previous[aria-disabled=true]').length).to.equal(1);
        expect($('.pagination__next[aria-disabled=true]').length).to.equal(1);
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.pagination');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.pagination');
    });
});

describe('pagination-item', () => {
    const previousControlInput = { type: 'previous' };
    const nextControlInput = { type: 'next' };

    test('handles pass-through html attributes for item', context => {
        testUtils.testHtmlAttributes(context, '.pagination__item', 'items');
    });

    test('handles pass-through html attributes for previous control', context => {
        testUtils.testHtmlAttributes(context, '.pagination__previous', 'items', previousControlInput);
    });

    test('handles pass-through html attributes for next control', context => {
        testUtils.testHtmlAttributes(context, '.pagination__next', 'items', nextControlInput);
    });

    test('handles custom class for item', context => {
        testUtils.testCustomClass(context, '.pagination__item', 'items');
    });

    test('handles custom class for previous control', context => {
        testUtils.testCustomClass(context, '.pagination__previous', 'items', false, previousControlInput);
    });

    test('handles custom class for next control', context => {
        testUtils.testCustomClass(context, '.pagination__next', 'items', false, nextControlInput);
    });
});
