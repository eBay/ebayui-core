const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const {
    testPassThroughAttributes,
    testAttributeRenameMigrator
} = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

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
        expect(getByRole('button')).has.class('expand-btn--icon-only');
    });

    testPassThroughAttributes(template);
});

testAttributeRenameMigrator(require('../migrator'), 'expand-button', 'no-text', 'icon-only', '../index.marko');
