import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('dialog', () => {
    it('renders basic version', async () => {
        const input = mock.Dialog;
        const { getByRole, getByText } = await render(template, input);
        const dialog = getByRole('dialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('confirm-dialog');
        expect(getByText(input.confirmText)).has.class('confirm-dialog__confirm');
        expect(getByText(input.rejectText)).has.class('confirm-dialog__reject');
        expect(getByText(input.renderBody.text)).has.class('confirm-dialog__main');
    });

    it('renders in open state', async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    testPassThroughAttributes(template);
});
