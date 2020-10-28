const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('pagination', () => {
    describe('with links', () => {
        it('renders basic version', async() => {
            const input = mock.Links_6Items_No_Selected;
            const { getByRole, getByText, getByLabelText } = await render(template, input);
            const navigationEl = getByRole('navigation');
            const statusEl = getByRole('status');
            const statusTextEl = getByText(input.a11yCurrentText);
            const prevEl = getByLabelText(input.a11yPreviousText);
            const nextEl = getByLabelText(input.a11yNextText);

            expect(statusEl).contains(statusTextEl);
            expect(navigationEl).has.class('pagination');
            expect(navigationEl).has.attr('aria-labelledby', statusTextEl.id);

            expect(prevEl).has.class('pagination__previous');
            expect(prevEl).has.attr('href', input.items[0].href);
            expect(prevEl).does.not.have.attr('aria-disabled');

            expect(nextEl).has.class('pagination__next');
            expect(nextEl).has.attr('href', input.items[input.items.length - 1].href);
            expect(nextEl).does.not.have.attr('aria-disabled');

            input.items.slice(1, -1).forEach(itemData => {
                const itemEl = getByText(itemData.renderBody.text);
                expect(itemEl).has.class('pagination__item');
                expect(itemEl).has.attr('href', itemData.href);
                expect(itemEl).does.not.have.attr('aria-current');
            });
        });

        it('renders with a selected item', async() => {
            const input = mock.Links_9Items_1Selected;
            const { getByText } = await render(template, input);
            input.items.slice(1, -1).forEach((itemData, i) => {
                const itemEl = getByText(itemData.renderBody.text);
                if (i === 1) {
                    expect(itemEl).has.attr('aria-current', 'page');
                } else {
                    expect(itemEl).does.not.have.attr('aria-current');
                }
            });
        });

        it('renders with aria-disabled when navigation is disabled', async() => {
            const input = mock.Links_1Items_Navigation_Disabled;
            const { getByLabelText } = await render(template, input);
            expect(getByLabelText(input.a11yPreviousText)).has.property('tagName', 'A');
            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(getByLabelText(input.a11yNextText)).has.property('tagName', 'A');
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });

        it('renders with aria-disabled when navigation items missing', async() => {
            const input = mock.Links_1Items_No_Navigation;
            const { getByLabelText } = await render(template, input);
            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });
    });

    describe('with buttons', () => {
        it('renders button version', async() => {
            const input = mock.Buttons_0Selected;
            const { getByText, getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).has.property('tagName', 'BUTTON');
            expect(getByLabelText(input.a11yNextText)).has.property('tagName', 'BUTTON');
            expect(getByText(input.items[1].renderBody.text)).has.property('tagName', 'BUTTON');
        });
    });

    testPassThroughAttributes(template);
});

describe('pagination-item', () => {
    testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true
        }
    });
});
