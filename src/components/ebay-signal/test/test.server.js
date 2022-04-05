import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('signal', () => {
    it('renders neutral version when no type is specified', async () => {
        const input = mock.Basic;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--neutral');
    });

    it('renders recent version', async () => {
        const input = mock.basicRecent;
        const { getByText } = await render(template, input);
        const el = getByText(/recent/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--recent');
    });

    it('renders time sensitive version', async () => {
        const input = mock.basicTimeSensitive;
        const { getByText } = await render(template, input);
        const el = getByText(/time sensitive/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--time-sensitive');
    });

    it('renders trustworthy version', async () => {
        const input = mock.basicTrustworthy;
        const { getByText } = await render(template, input);
        const el = getByText(/trustworthy/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--trustworthy');
    });

    it('renders neutral version', async () => {
        const input = mock.basicNeutral;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--neutral');
    });
});
