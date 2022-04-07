import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('inline-notice', () => {
    it('renders with defaults', async () => {
        const input = mock.Inline;
        const { getByLabelText, getByText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).has.class('inline-notice__header');
        expect(status).has.property('tagName', 'SPAN');
        expect(status.parentElement).has.class('inline-notice--attention');
        expect(status.parentElement).not.to.have.attribute('aria-labelledby');

        const content = getByText(input.renderBody.text);
        expect(content).has.property('tagName', 'SPAN');
        expect(content).has.class('inline-notice__main');
    });

    it('renders with custom status type', async () => {
        const input = mock.inlineCustomStatus;
        const { getByLabelText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status.parentElement).has.class(`inline-notice--${input.status}`);
    });

    testPassThroughAttributes(template, {
        input: mock.Inline,
    });
});
