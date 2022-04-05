import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';

use(require('chai-dom'));

it('renders fake link version', async () => {
    const { getByRole } = await render(template, {});

    expect(getByRole('button')).has.class('fake-link');
});

it('renders disabled version', async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole('button')).has.attr('disabled');
});

testPassThroughAttributes(template);
