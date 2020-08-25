const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, testEventsMigrator } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('toast', () => {
    it('renders basic version', async() => {
        const input = mock.Toast;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog')).has.attr('hidden');
        expect(getByRole('dialog')).has.class('toast');
        expect(getByRole('dialog')).has.class('toast--transition');
        expect(getByLabelText(input.a11yCloseText)).has.class('toast__close');
        expect(getByText(input.renderBody.text)).has.class('toast__main');
        expect(getByText(input.header.renderBody.text).parentElement).has.class('toast__header');
        expect(getByText(input.header.renderBody.text)).has.class('toast__title');
        expect(getByText(input.footer.renderBody.text)).has.class('toast__footer');
    });

    it('renders in open state', async() => {
        const input = mock.Toast_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    testPassThroughAttributes(template);
    testEventsMigrator(require('../migrator'), 'toast',
        [{ from: 'show', to: 'open' }, 'close'], '../index.marko');
});
