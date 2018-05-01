const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('should render with basic breadcrumb and ', () => {
    test('return nav element with input', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const nav = $('nav');
        expect(nav.length).to.equal(1);
        expect(nav.attr('role')).to.equal('navigation');
        expect(nav.attr('dataview')).to.equal('data-view tracking');
        expect(nav.attr('class')).to.equal('breadcrumb');
        expect(nav.attr('aria-labelledby')).to.equal('breadcrumb-heading');
    });
    test('return h2 tag', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const h2Tag = $('h2');
        expect(h2Tag.length).to.equal(1);
        expect(h2Tag.attr('id')).to.equal('breadcrumb-heading');
        expect(h2Tag.attr('class')).to.equal('clipped');
        expect(h2Tag.html()).to.equal('Page navigation');
    });
    test('create <a> tag if href is NOT null for last item', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const li = $('nav li');
        expect(li.length).to.equal(4);
        const anchor = $('nav li a');
        expect(anchor.length).to.equal(4);
    });
    test('handles pass-through html attributes for item', context => {
        testUtils.testHtmlAttributes(context, 'li span', 'items');
    });

    test('handles custom class for item', context => {
        testUtils.testCustomClass(context, 'li span', 'items', true);
    });
});

test('should set item roles for hijax version', context => {
    const input = mock.hijax;
    const $ = testUtils.getCheerio(context.render(input));
    expect($('li a[role="button"]').length).to.equal(input.items.length);
});
test('should return zero nav element in the page', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($('nav').length).to.equal(0);
});
test('should create <a> without href if href attr is passed null unless its last item', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithMissingLinks));
    const li = $('nav li');
    expect($('a', li[0]).attr('href')).to.be.an('undefined');
    expect(li.length).to.equal(4);
});
test('should create span tag if href is null ', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithNoHref));
    const li = $('nav li');
    expect(li.length).to.equal(4);
    const currentElement = $('span', li[li.length - 1]);
    expect(currentElement.attr('aria-current')).to.equal('page');
});
test('return headingLevel', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithHeadingLevel));
    const h2Tag = $('h2');
    expect(h2Tag.length).to.equal(0);
    const h3Tag = $('h3');
    expect(h3Tag.length).to.equal(1);
});
