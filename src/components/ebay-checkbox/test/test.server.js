const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');

use(require('chai-dom'));

it('renders default checkbox', async() => {
    const { getByRole } = await render(template);
    const checkbox = getByRole('checkbox');

    expect(checkbox).has.property('checked', false);
    expect(checkbox.parentElement).has.class('checkbox');
});

it('renders disabled checkbox', async() => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('checkbox')).has.attr('disabled');
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole('checkbox').parentElement;
    }
});
