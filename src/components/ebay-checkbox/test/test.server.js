import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

use(require('chai-dom'));

it('renders default checkbox', async () => {
    const { getByRole } = await render(template);
    const checkbox = getByRole('checkbox');

    expect(checkbox).has.property('checked', false);
    expect(checkbox.parentElement).has.class('checkbox');
});

it('renders disabled checkbox', async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('checkbox')).has.attr('disabled');
});

it('renders checkbox with id', async () => {
    const { getByRole } = await render(template, { id: 'abc123' });
    expect(getByRole('checkbox')).attr('id').contains('abc123');
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole('checkbox').parentElement;
    },
});
