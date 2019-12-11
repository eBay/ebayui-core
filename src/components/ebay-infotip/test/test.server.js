const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { runTransformer } = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('infotip', () => {
    it('renders default infotip', async() => {
        const input = mock.WithContent;
        const { getByLabelText, getByText } = await render(template, input);
        expect(getByLabelText(input.ariaLabel)).has.class('infotip__host');
        expect(getByText(input.content.renderBody.text)).has.class('infotip__content');
    });

    it('renders infotip with a header', async() => {
        const input = mock.WithContentAndHeader;
        const { getByText } = await render(template, input);
        expect(getByText(input.heading.renderBody.text)).has.class('infotip__heading');
    });

    it('renders default infotip disabled', async() => {
        const input = mock.Disabled;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.ariaLabel)).has.attr('disabled');
    });

    // TODO: Does not look like this tag passes through class and style?
    // testPassThroughAttributes(template);
});

describe('transformer', () => {
    const componentPath = '../index.marko';

    it('transforms an icon attribute into a tag', () => {
        const tagString = '<ebay-infotip icon="settings"/>';
        const { el } = runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl.tagName).to.equal('ebay-infotip:_icon');
    });

    it('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-infotip/>';
        const { el } = runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });
});
