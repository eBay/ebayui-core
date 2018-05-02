const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders default checkbox', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(`span.checkbox`).length).to.equal(1);
    expect($(`input.checkbox__control`).length).to.equal(1);
    expect($(`span.checkbox__icon`).length).to.equal(1);
});

test('renders disabled checkbox', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('input.checkbox__control[disabled]').length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, 'input.checkbox__control');
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, 'span.checkbox');
});
