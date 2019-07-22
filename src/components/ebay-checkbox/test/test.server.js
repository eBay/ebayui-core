const { render } = require('@marko/testing-library');
const { expect, testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');

test('renders default checkbox', async() => {
    const { getByRole } = await render(template);
    const checkbox = getByRole('checkbox');

    expect(checkbox).has.property('checked', false);
    expect(checkbox.parentElement).has.class('checkbox')
});

test('renders disabled checkbox', async() => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('checkbox')).has.attr('disabled');
});

testPassThroughAttributes(template);
