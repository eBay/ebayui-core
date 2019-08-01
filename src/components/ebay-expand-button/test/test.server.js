const expect = require('chai').expect;
const isMarko3 = require('marko/package.json').version.split('.')[0] === '3';
const testUtils = require('../../../common/test-utils/server');

const properties = {
    priority: ['primary', 'secondary'],
    size: ['small', 'large']
};
test('renders expand button', context => {
    const input = { };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.expand-btn').length).to.equal(1);
});

test('renders expand button with no text', context => {
    const input = { noText: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.expand-btn.expand-btn--no-text').length).to.equal(1);
});
