const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('breadcrumb', () => {
    test('renders basic structure', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        expect($('nav.breadcrumb').length).to.equal(1);
        const h2Tag = $('h2.clipped');
        expect(h2Tag.length).to.equal(1);
        expect(h2Tag.html()).to.equal(mock.basicItems.a11yHeadingText);
        expect($('nav li').length).to.equal(mock.basicItems.items.length);
    });

    test('should use buttons when hrefs are missing', context => {
        const input = mock.buttons;
        const $ = testUtils.getCheerio(context.render(input));
        expect($('li button').length).to.equal(input.items.length);
    });

    test('renders <a> without href for missing input href on non-last item', context => {
        const $ = testUtils.getCheerio(context.render(mock.firstItemMissingHref));
        const li = $('nav li');
        expect($('a', li[0]).attr('href')).to.equal(undefined);
        expect(li.length).to.equal(mock.firstItemMissingHref.items.length);
    });

    test('renders a button when href is null on last item', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const li = $('nav li');
        expect(li.length).to.equal(mock.basicItems.items.length);
        const currentElement = $('button', li[li.length - 1]);
        expect(currentElement.attr('aria-current')).to.equal('location');
    });

    test('renders different heading tag when specified', context => {
        const $ = testUtils.getCheerio(context.render(mock.itemsWithHeadingTag));
        expect($('h2').length).to.equal(0);
        expect($('h3').length).to.equal(1);
    });

    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'nav'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'nav'));
});

describe('breadcrumb-item', () => {
    test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'li > *', 'items'));
    test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'li > *', 'items'));
});
