const { render } = require('@marko/testing-library');
const { expect, testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('../mock');
const template = require('..');

describe('breadcrumb', () => {
    test('renders basic structure', async() => {
        const { getByLabelText } = await render(template, mock.basicItems);
        expect(getByLabelText(mock.basicItems.a11yHeadingText)).has.attr('role', 'navigation');
    });

    test('renders buttons when hrefs are missing', async() => {
        const { getByText } = await render(template, mock.buttons);
        mock.buttons.items.forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'BUTTON')
        );
    });

    // TODO: This does not seem to be the case?
    it.skip('renders <a> without href for missing input href on non-last item', async() => {
        const { getByText } = await render(template, mock.firstItemMissingHref);
        const { items } = mock.firstItemMissingHref;
        const firstItem = items[0];
        const lastItem = items[items.length - 1];
        const anchorItems = items.slice(0, -1);
        expect(getByText(firstItem.renderBody.text)).has.attr('href', undefined);
        anchorItems.forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'A')
        );

        expect(getByText(lastItem.renderBody.text)).has.property('tagName', 'BUTTON');
    });

    test('renders a button when href is null on last item', async() => {
        const { getByText } = await render(template, mock.basicItems);
        const { items } = mock.firstItemMissingHref;
        const lastItem = items[items.length - 1];
        const anchorItems = items.slice(0, -1);
        anchorItems.forEach(
            item => expect(getByText(item.renderBody.text)).has.property('tagName', 'A')
        );

        expect(getByText(lastItem.renderBody.text)).has.property('tagName', 'BUTTON');
    });

    test('renders different heading tag when specified', async() => {
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
