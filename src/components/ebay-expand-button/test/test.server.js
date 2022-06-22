import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('expand-button', () => {
    it('renders expand button', async () => {
        const input = mock.Basic;
        const { getByRole } = await render(template, input);
        const btnEl = getByRole('button');
        expect(btnEl).has.text(input.renderBody.text);
        expect(btnEl).has.class('expand-btn');
    });

    it('renders expand button with no text', async () => {
        const input = mock.noText;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--icon-only');
    });

    testPassThroughAttributes(template);
});
