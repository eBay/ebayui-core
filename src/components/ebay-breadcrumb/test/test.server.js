const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock/index');

describe('should render with basic breadcrumb and ', () => {
    test('return nav element with input', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const nav = $('nav');
        expect(nav.length).to.equal(1);
        expect(nav.attr('role')).to.equal('navigation');
        expect(nav.attr('dataview')).to.equal('data-view tracking');
        expect(nav.attr('class')).to.equal('breadcrumb');
        expect(nav.attr('aria-labelledby')).to.equal('breadcrumbs_heading');
    });
    test('return h2 tag', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const h2Tag = $('h2');
        expect(h2Tag.length).to.equal(1);
        expect(h2Tag.attr('id')).to.equal('breadcrumbs_heading');
        expect(h2Tag.attr('class')).to.equal('clipped');
        expect(h2Tag.html()).to.equal('Page navigation');
    });
    test('return items html attributes', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const anchor = $('nav li a');
        const _sp = [];
        const navsrc = [];
        anchor.each((i, v) => {
            _sp.push($(v).attr('_sp'));
            navsrc.push($(v).attr('navsrc'));
        });
        expect(_sp.length).to.equal(4);
        expect(navsrc.length).to.equal(4);
    });
    test('create <a> tag if href is NOT null for last item', context => {
        const $ = testUtils.getCheerio(context.render(mock.basicItems));
        const li = $('nav li');
        expect(li.length).to.equal(4);
        const anchor = $('nav li a');
        expect(anchor.length).to.equal(4);
    });
});
test('should return zero nav element in the page', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($('nav').length).to.equal(0);
});
test('should not create <li> tag if href is null unless its last item', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithMissingLinks));
    const li = $('nav li');
    expect(li.length).to.equal(3);
});
test('should create span tag if href is null ', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithNoHref));
    const li = $('nav li');
    expect(li.length).to.equal(4);
    const currentElement = $('span', li[li.length - 1]);
    expect(currentElement.attr('aria-current')).to.equal('page');
});
