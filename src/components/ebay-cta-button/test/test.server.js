const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders basic cta button', context => {
    const input = { href: 'https://www.ebay.com' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.cta-btn > .cta-btn__cell').length).to.equal(1);
});

test('renders small cta button', context => {
    const input = { size: 'small', href: 'https://www.ebay.com' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.cta-btn.cta-btn--small > .cta-btn__cell').length).to.equal(1);
});

test('renders large cta button', context => {
    const input = { size: 'large', href: 'https://www.ebay.com' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('a.cta-btn.cta-btn--large > .cta-btn__cell').length).to.equal(1);
});
