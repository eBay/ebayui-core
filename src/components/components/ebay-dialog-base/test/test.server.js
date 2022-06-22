import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(chaiDom);

describe('dialog-base', () => {
    it('renders basic version', async () => {
        const input = mock.dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog', { hidden: true })).has.attr('hidden');
        expect(getByLabelText(input.a11yCloseText)).has.class('lightbox-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('lightbox-dialog__main');
    });

    it('renders with header and footer', async () => {
        const input = mock.headerFooterDialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog', { hidden: true })).has.attr('hidden');
        expect(getByLabelText(input.a11yCloseText)).has.class('lightbox-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('lightbox-dialog__main');
        expect(getByText(input.header.renderBody.text)).has.tagName('H2');
        expect(getByText(input.header.renderBody.text).parentElement).has.class(
            'lightbox-dialog__header'
        );
        expect(getByText(input.footer.renderBody.text)).has.class('lightbox-dialog__footer');
    });

    it('renders in open state', async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    it('renders non modal', async () => {
        const input = mock.dialog;
        const { getByRole } = await render(template, Object.assign({}, input, { isModal: false }));
        expect(getByRole('dialog', { hidden: true })).has.attribute('aria-live', 'polite');
    });

    testPassThroughAttributes(template);
});
