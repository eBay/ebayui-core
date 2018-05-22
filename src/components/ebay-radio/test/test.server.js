const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const rootSelector = `span.radio`;
const inputSelector = `input.radio__control`;
const iconSelector = `span.radio__icon`;

test('renders default radio', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(rootSelector).length).to.equal(1);
    expect($(inputSelector).length).to.equal(1);
    expect($(iconSelector).length).to.equal(1);
});

test('renders disabled radio', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(`${inputSelector}[disabled]`).length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, inputSelector);
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, rootSelector);
});
