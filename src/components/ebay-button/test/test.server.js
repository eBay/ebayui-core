const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

const properties = {
    priority: ['primary', 'secondary', 'none'],
    size: ['small', 'large']
};

Object.keys(properties).forEach(property => {
    const values = properties[property];
    values.forEach(value => {
        test(`renders button with ${property}=${value}`, context => {
            const input = {};
            input[property] = value;
            const $ = testUtils.getCheerio(context.render(input));
            expect($(`button.btn.btn--${value}`).length).to.equal(1);
        });
    });
});

[false, true].forEach((fluid, i) => {
    test(`renders button with fluid=${fluid}`, context => {
        const input = { fluid };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('button.btn.btn--fluid').length).to.equal(i);
    });
});

test('renders secondary version by default', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($(`button.btn.btn--secondary`).length).to.equal(1);
});

test('does not apply priority class for unsupported value', context => {
    const input = { priority: 'wrong' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(`button.btn.btn--wrong`).length).to.equal(0);
});

test('renders fake version', context => {
    const input = { href: '#' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.fake-btn[href=#]').length).to.equal(1);
});

test('renders disabled version', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.btn[disabled]').length).to.equal(1);
});

test('renders partially disabled version', context => {
    const input = { partiallyDisabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.btn[aria-disabled=true]').length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, 'button.btn');
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, 'button.btn');
});
