const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const template = require('..');
const mock = require('./mock');

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
        const input = mock.Basic_Recent;
        const { getByText } = await render(template, input);
        const el = getByText(/recent/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--recent');
    });

    it('renders time sensitive version', async () => {
        const input = mock.Basic_Time_Sensitive;
        const { getByText } = await render(template, input);
        const el = getByText(/time sensitive/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--time-sensitive');
    });

    it('renders trustworthy version', async () => {
        const input = mock.Basic_Trustworthy;
        const { getByText } = await render(template, input);
        const el = getByText(/trustworthy/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--trustworthy');
    });

    it('renders neutral version', async () => {
        const input = mock.Basic_Neutral;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).has.class('signal');
        expect(el).has.class('signal--neutral');
    });
});
