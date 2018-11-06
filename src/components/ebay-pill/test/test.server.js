const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders defaults', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($('button.btn.btn--secondary[type=button]').length).to.equal(1);
});

test('renders fake version', context => {
    const input = { href: '#' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.fake-btn[href=#]').length).to.equal(1);
});

test('renders fake version with other attributes', context => {
    const input = { href: '#', disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.fake-btn[href=#][disabled]').length).to.equal(1);
});

test('renders disabled version', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.btn[disabled]').length).to.equal(1);
});

test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'span.pill'));
test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'button.btn'));
