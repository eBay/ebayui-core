const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders defaults', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($('button.pill').length).to.equal(1);
});

test('renders fake version', context => {
    const input = { href: '#' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.fake-pill[href=#]').length).to.equal(1);
});

test('renders fake version with pressed attribute', context => {
    const input = { href: '#', pressed: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.fake-pill[href=#]').length).to.equal(1);
});

test('renders fake version with other attributes', context => {
    const input = { href: '#', disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.fake-pill[href=#][disabled]').length).to.equal(1);
});

test('renders disabled version', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.pill[disabled]').length).to.equal(1);
});

test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'span.pill__wrapper'));
test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'button.pill'));
