const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const rootTag = `span.checkbox`;
const inputTag = `input.checkbox__control`;
const iconTag = `span.checkbox__icon`;

test('renders default checkbox', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($(rootTag).length).to.equal(1);
    expect($(inputTag).length).to.equal(1);
    expect($(iconTag).length).to.equal(1);
});

test('renders checkbox with value and name', context => {
    const input = { '*': { value: 'food', name: 'food' } };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(rootTag).length).to.equal(1);
    expect($(inputTag).length).to.equal(1);
    expect($(inputTag).attr('value')).to.equal('food');
    expect($(inputTag).attr('name')).to.equal('food');
    expect($(iconTag).length).to.equal(1);
});

test('renders disabled checkbox', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($(`${inputTag}[disabled]`).length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, inputTag);
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, rootTag);
});
