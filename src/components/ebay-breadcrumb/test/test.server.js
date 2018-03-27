const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock/index');

test('shoudl return zero nav element in the page', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($('nav').length).to.equals(0);
});
test('should return nav element with input', context => {
    const $ = testUtils.getCheerio(context.render(mock.items));
    const nav = $('nav');
    expect(nav.length).to.equals(1);
    expect(nav.attr('role')).to.equals('navigation');
    expect(nav.attr('dataview')).to.equals('data-view tracking');
    expect(nav.attr('class')).to.equals('breadcrumb');
    expect(nav.attr('aria-labelledby')).to.equals('breadcrumbs_heading');
});
test('should return h2 tag', context => {
    const $ = testUtils.getCheerio(context.render(mock.items));
    const h2Tag = $('h2');
    expect(h2Tag.length).to.equals(1);
    expect(h2Tag.attr('id')).to.equals('breadcrumbs_heading');
    expect(h2Tag.attr('class')).to.equals('clipped');
    expect(h2Tag.html()).to.equals('You are here');
});
test('should return 4 li with anchor', context => {
    const $ = testUtils.getCheerio(context.render(mock.items));
    const li = $('nav li');
    expect(li.length).to.equals(4);
    const anchor = $('nav li a');
    expect(anchor.length).to.equals(4);
});
test('should not create <li> tag if href is null unless its last item', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithMissingLinks));
    const li = $('nav li');
    expect(li.length).to.equals(3);
});
test('should create span tag if href is null ', context => {
    const $ = testUtils.getCheerio(context.render(mock.itemsWithNoHref));
    const li = $('nav li');
    expect(li.length).to.equals(4);
    const currentElement = $('span', li[li.length - 1]);
    expect(currentElement.attr('aria-current')).to.equals('page');
    expect(currentElement.attr('class')).to.equals('current');
});
test('should create <a> tag if href is NOT null for last item', context => {
    const $ = testUtils.getCheerio(context.render(mock.items));
    const li = $('nav li');
    expect(li.length).to.equals(4);
    const anchor = $('nav li a');
    expect(anchor.length).to.equals(4);
});
test('should return items html attributes', context => {
    const $ = testUtils.getCheerio(context.render(mock.items));
    const anchor = $('nav li a');
    const _sp = [];
    const navsrc = [];
    anchor.each((i, v) => {
        _sp.push($(v).attr('_sp'));
        navsrc.push($(v).attr('navsrc'));
    });
    expect(_sp.length).to.equals(4);
    expect(navsrc.length).to.equals(4);
});
