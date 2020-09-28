const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('dialog', () => {
    it('renders basic version', async() => {
        const input = mock.Dialog;
        const { getByRole, getByText } = await render(template, input);
        const dialog = getByRole('alertdialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('lightbox-dialog');
        expect(getByText(input.confirmText)).has.class('lightbox-dialog__confirm');
        expect(getByText(input.renderBody.text)).has.class('lightbox-dialog__main');
    });

    it('renders in open state', async() => {
        const input = mock.Dialog_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('alertdialog')).does.not.have.attr('hidden');
    });

    testPassThroughAttributes(template);
});
