const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('../mock');
const template = require('..');

use(require('chai-dom'));

describe('breadcrumb', () => {
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
