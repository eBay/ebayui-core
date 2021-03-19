const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');

use(require('chai-dom'));

it('renders default tri-state-checkbox', async() => {
    const { getByRole } = await render(template);
    const checkbox = getByRole('checkbox');

    expect(checkbox).has.property('checked', false);
    expect(checkbox.parentElement).has.class('checkbox');
});

it('renders disabled tri-state-checkbox', async() => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('checkbox')).has.attr('disabled');
});

it('renders tri-state-checkbox with id', async() => {
    const { getByRole } = await render(template, { id: 'abc123' });
    expect(getByRole('checkbox')).attr('id').contains('abc123');
});

it('renders mixed checkbox', async() => {
    const { getByRole } = await render(template, { checked: "mixed" });
    const checkbox = getByRole('checkbox');
    expect(checkbox).has.attr('aria-checked', 'mixed');
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole('checkbox').parentElement;
    }
});
