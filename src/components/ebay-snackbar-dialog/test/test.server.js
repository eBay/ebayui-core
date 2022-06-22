import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('snackbar-dialog', () => {
    it('renders basic version', async () => {
        const input = mock.Snackbar;
        const { getByRole, getByText } = await render(template, input);
        const dialog = getByRole('dialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('snackbar-dialog');
        expect(dialog).has.class('snackbar-dialog--transition');
        expect(getByText(input.renderBody.text)).has.class('snackbar-dialog__main');
        expect(getByText(input.header.renderBody.text).parentElement).has.class(
            'snackbar-dialog__header'
        );
        expect(getByText(input.action.renderBody.text).parentElement).has.class(
            'snackbar-dialog__actions'
        );
        expect(getByRole('button', { hidden: 'true' })).has.class('fake-link');
        expect(dialog.childNodes[0]).has.class('snackbar-dialog__window');
    });

    it('renders in open state', async () => {
        const input = mock.Snackbar_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });
});
