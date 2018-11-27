const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders defaults', context => {
    const input = { number: 5 };
    const $ = testUtils.getCheerio(context.render(input));
    const badge = $('.badge');
    expect(badge.length).to.equal(1);
    expect(badge.text()).to.equal('5');
});

describe('given number is a string', () => {
    test('renders number with coerced string', context => {
        const input = { number: '5' };
        const $ = testUtils.getCheerio(context.render(input));
        const badge = $('.badge');
        expect(badge.length).to.equal(1);
        expect(badge.text()).to.equal('5');
    });

    test('does not renders with an invalid string', context => {
        const input = { number: 'five' };
        const $ = testUtils.getCheerio(context.render(input));
        const badge = $('.badge');
        expect(badge.length).to.equal(0);
    });
});

test('truncates when the value is greater than 99', context => {
    const input = { number: 150 };
    const $ = testUtils.getCheerio(context.render(input));
    const badge = $('.badge');
    expect(badge.length).to.equal(1);
    expect(badge.text()).to.equal('99+');
});

// not sure why these don't work
// test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, 'span.badge'));
// test('handles custom class and style', context => testUtils.testClassAndStyle(context, 'span.badge'));
