const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('dialog', () => {
    it('renders basic version', async() => {
        const input = mock.Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        const dialog = getByRole('dialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('fullscreen-dialog');
        expect(getByLabelText(input.a11yCloseText)).has.class('fullscreen-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('fullscreen-dialog__main');
    });

    it('renders with header and footer', async() => {
        const input = mock.Header_Footer_Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        const dialog = getByRole('dialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('fullscreen-dialog');
        expect(getByLabelText(input.a11yCloseText)).has.class('fullscreen-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('fullscreen-dialog__main');
        expect(getByText(input.header.renderBody.text).parentElement).has.class('fullscreen-dialog__header');
        expect(getByText(input.footer.renderBody.text)).has.class('fullscreen-dialog__footer');
    });

    it('renders in open state', async() => {
        const input = mock.Fill_Dialog_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    testPassThroughAttributes(template);
});
