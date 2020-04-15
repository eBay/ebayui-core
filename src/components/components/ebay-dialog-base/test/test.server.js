const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('dialog-base', () => {
    it('renders basic version', async() => {
        const input = mock.Fill_Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog')).has.attr('hidden');
        expect(getByLabelText(input.a11yCloseText)).has.class('dialog__close');
        expect(getByText(input.renderBody.text)).has.class('dialog__body');
    });

    it('renders with header and footer', async() => {
        const input = mock.Header_Footer_Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog')).has.attr('hidden');
        expect(getByLabelText(input.a11yCloseText)).has.class('dialog__close');
        expect(getByText(input.renderBody.text)).has.class('dialog__body');
        expect(getByText(input.header.renderBody.text)).has.class('dialog__header');
        expect(getByText(input.footer.renderBody.text)).has.class('dialog__footer');
    });

    it('renders in open state', async() => {
        const input = mock.Fill_Dialog_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    testPassThroughAttributes(template);
});
