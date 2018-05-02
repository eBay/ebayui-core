const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders default radio', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(`span.radio`).length).to.equal(1);
    expect($(`input.radio__control`).length).to.equal(1);
    expect($(`span.radio__icon`).length).to.equal(1);
});

test('renders disabled radio', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('input.radio__control[disabled]').length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, 'input.radio__control');
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, 'span.radio');
});
