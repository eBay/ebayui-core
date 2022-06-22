import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

use(require('chai-dom'));

it('renders default switch', async () => {
    const { getByRole } = await render(template);
    const switchControl = getByRole('switch');
    expect(switchControl).to.have.class('switch__control');
    expect(switchControl.parentElement).to.have.class('switch');
    expect(switchControl.nextElementSibling).to.have.class('switch__button');
    expect(switchControl).to.have.property('disabled', false);
});

it('renders disabled switch', async () => {
    const { getByRole } = await render(template, { disabled: true });
    const switchControl = getByRole('switch');
    expect(switchControl).to.have.property('disabled', true);
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole('switch').parentElement;
    },
});
