const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const migrator = require('../../ebay-breadcrumb/migrator');
const { runTransformer } = require('../../../common/test-utils/server');
const mock = require('../mock');
const template = require('..');

use(require('chai-dom'));

describe('breadcrumbs', () => {
    it('renders basic structure', async() => {
        const input = mock.Links;
        const { getByLabelText, getByText } = await render(template, input);

        expect(getByLabelText(input.a11yHeadingText)).has.attr('role', 'navigation');

        input.items.slice(0, -1).forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'A')
        );

        expect(getByText(input.items[input.items.length - 1].renderBody.text))
            .has.property('tagName', 'BUTTON');
    });

    it('renders buttons when hrefs are missing', async() => {
        const input = mock.Buttons;
        const { getByText } = await render(template, input);
        input.items.forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'BUTTON')
        );
    });

    it('renders <button> for missing input href item', async() => {
        const input = mock.Links_First_Without_HREF;
        const { getByText } = await render(template, input);

        input.items.slice(0, -1).forEach(
            item => {
                const itemEl = getByText(item.renderBody.text);
                if (item.href) {
                    expect(itemEl).has.property('tagName', 'A');
                    expect(itemEl).has.attr('href', item.href);
                } else {
                    expect(itemEl).has.property('tagName', 'BUTTON');
                }
            }
        );
    });

    it('renders different heading tag when specified', async() => {
        const input = mock.Links_Heading_Tag;
        const { getByText } = await render(template, input);
        expect(getByText(input.a11yHeadingText)).has.property('tagName', input.a11yHeadingTag.toUpperCase());
    });
});

testPassThroughAttributes(template);
testPassThroughAttributes(template, {
    child: {
        name: 'items',
        multiple: true
    }
});

describe('migrator', () => {
    const componentPath = '../../ebay-breadcrumb/index.marko';

    it('migrates ebay-breadcrumb to ebay-breadcrumbs', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-breadcrumb><ebay-breadcrumb-item>item</ebay-breadcrumb-item></ebay-breadcrumb>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        const { body: { array: [elItem] } } = el;
        expect(el.tagName).to.equal('ebay-breadcrumbs');
        expect(elItem.tagName).to.equal('ebay-breadcrumbs-item');
    });

    it('migrates breadcrumb-select event to breadcrumbs-select', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-breadcrumb on-breadcrumb-select(() => {})><ebay-breadcrumb-item>item</ebay-breadcrumb-item></ebay-breadcrumb>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        expect(el.tagName).to.equal('ebay-breadcrumbs');
        expect(el.hasAttribute('on-breadcrumbs-select')).equals(true);
    });
});
