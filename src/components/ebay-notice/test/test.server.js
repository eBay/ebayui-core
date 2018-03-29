const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

test('renders notice with defaults', context => {
    const input = {};
    const $ = testUtils.getCheerio(context.render(input));
    expect($('h2.page-notice__status').length).to.equal(1);
});

test('renders page notice with default heading', context => {
    const input = { type: 'page' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('h2.page-notice__status').length).to.equal(1);
});

test('renders page notice with custom headingTag', context => {
    const input = { type: 'page', headingLevel: '3' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('h3.page-notice__status').length).to.equal(1);
});

test('renders page notice with custom type', context => {
    const input = { type: 'page', status: 'confirmation' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.page-notice--confirmation').length).to.equal(1);
});

test('renders inline notice with correct tags', context => {
    const input = { type: 'inline', status: 'confirmation' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('span.inline-notice__status').length).to.equal(1);
    expect($('div.inline-notice--confirmation').length).to.equal(1);
    expect($('span.inline-notice__content').length).to.equal(1);
});

test('renders page notice with correct tags', context => {
    const input = { type: 'page', status: 'priority' };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('h2.page-notice__status').length).to.equal(1);
    expect($('section.page-notice--priority').length).to.equal(1);
    expect($('div.page-notice__content').length).to.equal(1);
    expect($('button.page-notice__close').length).to.equal(0);
});

test('renders page notice with dismiss button', context => {
    const input = { type: 'page', status: 'priority', dismissible: true };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('section.page-notice--priority').length).to.equal(1);
    expect($('button.page-notice__close').length).to.equal(1);
});

test('handles pass-through html attributes', context => {
    testUtils.testHtmlAttributes(context, 'section.page-notice');
});

test('handles custom class', context => {
    testUtils.testCustomClass(context, 'section.page-notice');
});
