const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('expand-button', () => {
    it('renders expand button', async() => {
        const input = mock.Basic;
        const { getByRole } = await render(template, input);
        const btnEl = getByRole('button');
        expect(btnEl).has.text(input.renderBody.text);
        expect(btnEl).has.class('expand-btn');
    });

    it('renders expand button with no text', async() => {
        const input = mock.No_Text;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--no-text');
    });

    testPassThroughAttributes(template);
});
