import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('cta-button', () => {
    it('renders basic cta button', async () => {
        const input = mock.Basic;
        const { getByText } = await render(template, input);
        const textEl = getByText(input.renderBody.text);

        expect(textEl.closest('.cta-btn')).does.not.equal(null);
        expect(textEl.closest('.cta-btn__cell')).does.not.equal(null);
    });

    it('renders small cta button', async () => {
        const input = mock.Small;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest('.cta-btn')).has.class('cta-btn--small');
    });

    it('renders large cta button', async () => {
        const input = mock.Large;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest('.cta-btn')).has.class('cta-btn--large');
    });

    testPassThroughAttributes(template);
});
