const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders default switch', context => {
    const $ = testUtils.getCheerio(context.render());
    expect($('.switch').length).to.equal(1);
    expect($('.switch > input').length).to.equal(1);
    expect($('.switch > span').length).to.equal(1);
});

test('renders disabled switch', context => {
    const input = { disabled: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.switch > input[disabled]').length).to.equal(1);
});

test('handles pass-through html attributes', context => testUtils.testHtmlAttributes(context, '.switch > input'));
test('handles custom class and style', context => testUtils.testClassAndStyle(context, '.switch'));
