const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('breadcrumb', () => {
    test('renders basic structure', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        expect($('nav.breadcrumb').length).to.equal(1);
        const h2Tag = $('h2#breadcrumb-heading.clipped');
        expect(h2Tag.length).to.equal(1);
        expect(h2Tag.html()).to.equal(mock.basicItems.headingText);
        expect($('nav li').length).to.equal(mock.basicItems.items.length);
        expect($('nav li a').length).to.equal(mock.basicItems.items.length - 1);
    });

    test('should set item roles for hijax version', context => {
        const input = mock.hijax;
        const $ = testUtils.getCheerio(context.render(input));
        expect($('li a[role="button"]').length).to.equal(input.items.length - 1);
    });

    test('renders <a> without href for missing input href on non-last item', context => {
        const $ = testUtils.getCheerio(context.render(mock.firstItemMissingHref));
        const li = $('nav li');
        expect($('a', li[0]).attr('href')).to.equal(undefined);
        expect(li.length).to.equal(mock.firstItemMissingHref.items.length);
    });

    test('renders span tag if href is null on last item', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const li = $('nav li');
        expect(li.length).to.equal(mock.basicItems.items.length);
        const currentElement = $('span', li[li.length - 1]);
        expect(currentElement.attr('aria-current')).to.equal('page');
    });

    test('renders different heading tag when specified', context => {
        const $ = testUtils.getCheerio(context.render(mock.itemsWithHeadingLevel));
        expect($('h2').length).to.equal(0);
        expect($('h3').length).to.equal(1);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'nav'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'nav'));
});

describe('breadcrumb-item', () => {
    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'li span', 'items'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'li span', 'items'));
});
