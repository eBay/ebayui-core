const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('toast-dialog', () => {
    it('renders basic version', async() => {
        const input = mock.Toast;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        const dialog = getByRole('dialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('toast-dialog');
        expect(dialog).has.class('toast-dialog--transition');
        expect(getByLabelText(input.a11yCloseText)).has.class('toast-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('toast-dialog__main');
        expect(getByText(input.header.renderBody.text).parentElement).has.class('toast-dialog__header');
        expect(getByText(input.header.renderBody.text)).has.class('toast-dialog__title');
        expect(getByText(input.footer.renderBody.text)).has.class('toast-dialog__footer');
    });

    it('renders in open state', async() => {
        const input = mock.Toast_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    testPassThroughAttributes(template);
});
