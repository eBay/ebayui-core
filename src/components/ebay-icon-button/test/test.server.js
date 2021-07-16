const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');

use(require('chai-dom'));

it('renders fake version', async () => {
    const { getByLabelText } = await render(template, {
        href: '#',
        htmlAttributes: {
            ariaLabel: 'fake button',
        },
    });

    const btn = getByLabelText('fake button');
    expect(btn).has.attr('href', '#');
    expect(btn).has.property('tagName', 'A');
    expect(btn).has.class('icon-btn');
});

it('renders disabled version', async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('button')).has.attr('disabled');
});

it('renders partially disabled version', async () => {
    const { getByRole } = await render(template, { partiallyDisabled: true });
    expect(getByRole('button')).has.attr('aria-disabled', 'true');
});

it('renders icon', async () => {
    const { getByLabelText } = await render(template, {
        htmlAttributes: {
            ariaLabel: 'icon button',
        },
    });

    expect(getByLabelText('icon button')).has.class('icon-btn');
});

it('renders badged icon variant', async () => {
    const { getByLabelText } = await render(template, {
        badgeNumber: 5,
        badgeAriaLabel: '5 Items',
        htmlAttributes: {
            ariaLabel: 'Badged button',
        },
    });

    expect(getByLabelText('Badged button')).has.class('icon-btn--badged');
    expect(getByLabelText('5 Items')).has.text('5');
});
testPassThroughAttributes(template);
