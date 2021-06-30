const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');

use(require('chai-dom'));

it('renders fake link version', async () => {
    const { getByRole } = await render(template, {});

    expect(getByRole('button')).has.class('fake-link');
});

it('renders disabled version', async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('button')).has.attr('disabled');
});

it('renders partially disabled version', async () => {
    const { getByRole } = await render(template, { partiallyDisabled: true });
    expect(getByRole('button')).has.attr('aria-disabled', 'true');
});

testPassThroughAttributes(template);
