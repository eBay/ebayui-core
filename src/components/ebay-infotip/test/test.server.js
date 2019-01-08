
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const transformer = require('../transformer');

describe('infotip', () => {
    test('renders default infotip', context => {
        const input = {
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.infotip').length).to.equal(1);
        expect($('.infotip__host').length).to.equal(1);
        expect($('button.infotip__host').length).to.equal(1);
        expect($('.infotip__overlay').length).to.equal(1);
    });

    test('renders infotip with a header', context => {
        const input = {
            heading: {
                renderyBody: ''
            },
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.infotip__heading').length).to.equal(1);
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';

    test('transforms an icon attribute into a tag', () => {
        const tagString = '<ebay-infotip icon="settings"/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl.tagName).to.equal('ebay-infotip:icon');
    });

    test('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-infotip/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });
});
