const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('../mock');
const template = require('..');

use(require('chai-dom'));

describe('breadcrumb', () => {
    it('renders basic structure', async() => {
        const { getByLabelText } = await render(template, mock.basicItems);
        expect(getByLabelText(mock.basicItems.a11yHeadingText)).has.attr('role', 'navigation');
    });

    it('renders buttons when hrefs are missing', async() => {
        const { getByText } = await render(template, mock.buttons);
        mock.buttons.items.forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'BUTTON')
        );
    });

    it('renders <button> for missing input href item', async() => {
        const { getByText } = await render(template, mock.firstItemMissingHref);
        const { items } = mock.firstItemMissingHref;
        const anchorItems = items.slice(0, -1);

        anchorItems.forEach(
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

    it('renders a button when href is null on last item', async() => {
        const { getByText } = await render(template, mock.basicItems);
        const { items } = mock.firstItemMissingHref;
        const lastItem = items[items.length - 1];
        const anchorItems = items.slice(0, -1);
        anchorItems.forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'A')
        );

        expect(getByText(lastItem.renderBody.text)).has.property('tagName', 'BUTTON');
    });

    it('renders different heading tag when specified', async() => {
        const { getByText } = await render(template, mock.itemsWithHeadingTag);
        const heading = getByText(mock.itemsWithHeadingTag.a11yHeadingText);
        expect(heading).has.property('tagName', mock.itemsWithHeadingTag.a11yHeadingTag.toUpperCase());
    });
});

testPassThroughAttributes(template);
testPassThroughAttributes(template, {
    child: {
        name: 'items',
        multiple: true
    }
});
