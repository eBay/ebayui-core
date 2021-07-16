const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const {
    testPassThroughAttributes,
    testEventsMigrator,
    testAttributeRenameMigrator,
} = require('../../../common/test-utils/server');
const template = require('..');

use(require('chai-dom'));

const properties = {
    priority: ['primary', 'secondary', 'delete'],
    size: ['large'],
};

Object.keys(properties).forEach((property) => {
    const values = properties[property];
    values.forEach((value) => {
        it(`renders button with ${property}=${value}`, async () => {
            const { getByRole } = await render(template, { [property]: value });
            expect(getByRole('button')).has.class(`btn--${value}`);
        });
    });
});

[false, true].forEach((fluid) => {
    it(`renders button with fluid=${fluid}`, async () => {
        const { getByRole } = await render(template, { fluid });
        expect(getByRole('button'))[fluid ? 'has' : 'not'].class('btn--fluid');
    });
});

it('renders defaults', async () => {
    const { getByRole } = await render(template);
    expect(getByRole('button')).has.class('btn--secondary');
});

it('renders with id override', async () => {
    const { getByRole } = await render(template, { id: 'test' });
    expect(getByRole('button')).has.id('test');
});

it('renders with type override', async () => {
    const { getByRole } = await render(template, { type: 'submit' });
    expect(getByRole('button')).has.attr('type', 'submit');
});

it('does not apply priority class for unsupported value', async () => {
    const { getByRole } = await render(template, { priority: 'none' });
    expect(getByRole('button'))
        .does.not.have.class('btn--none')
        .and.does.not.have.class('btn--secondary');
});

it('renders fake version', async () => {
    const { getByLabelText } = await render(template, {
        href: '#',
        size: 'large',
        priority: 'primary',
        htmlAttributes: {
            ariaLabel: 'fake button',
        },
    });

    const btn = getByLabelText('fake button');
    expect(btn).has.attr('href', '#');
    expect(btn).has.property('tagName', 'A');
    expect(btn).has.class('fake-btn--large').and.class('fake-btn--primary');
});

it('renders disabled version', async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('button')).has.attr('disabled');
});

it('renders partially disabled version', async () => {
    const { getByRole } = await render(template, { partiallyDisabled: true });
    expect(getByRole('button')).has.attr('aria-disabled', 'true');
});

it('renders truncated button', async () => {
    const { getByRole } = await render(template, {
        truncate: true,
    });
    expect(getByRole('button')).has.class('btn--truncated');
});

it('renders large truncated button', async () => {
    const { getByRole } = await render(template, {
        truncate: true,
        size: 'large',
    });
    expect(getByRole('button')).has.class('btn--large-truncated');
});

it('renders fixed-height button', async () => {
    const { getByRole } = await render(template, {
        fixedHeight: true,
    });
    expect(getByRole('button')).has.class('btn--fixed-height');
});

it('renders large fixed-height button', async () => {
    const { getByRole } = await render(template, {
        fixedHeight: true,
        size: 'large',
    });
    expect(getByRole('button')).has.class('btn--large-fixed-height');
});

testPassThroughAttributes(template);
testEventsMigrator(require('../migrator'), 'button', ['click', 'escape'], '../index.marko');
testAttributeRenameMigrator(
    require('../migrator'),
    'button',
    'no-text',
    'icon-only',
    '../index.marko'
);
