const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('dialog', () => {
    it('renders basic version', async() => {
        const input = mock.Fill_Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog')).has.attr('hidden');
        expect(getByRole('dialog')).has.class('dialog');
        expect(getByLabelText(input.a11yCloseText)).has.class('dialog__close');
        expect(getByText(input.renderBody.text)).has.class('dialog__main');
    });

    it('renders with header and footer', async() => {
        const input = mock.Header_Footer_Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog')).has.attr('hidden');
        expect(getByRole('dialog')).has.class('dialog');
        expect(getByLabelText(input.a11yCloseText)).has.class('dialog__close');
        expect(getByText(input.renderBody.text)).has.class('dialog__main');
        expect(getByText(input.header.renderBody.text)).has.class('dialog__header');
        expect(getByText(input.footer.renderBody.text)).has.class('dialog__footer');
    });

    it('renders in open state', async() => {
        const input = mock.Fill_Dialog_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    [undefined, 'fill', 'full'].forEach(type => {
        it(`renders with ${type || 'default'} type`, async() => {
            const { getByRole } = await render(template, { type });
            const $dialog = getByRole('dialog');
            const $window = $dialog.children[0];

            if (type) {
                expect($window).has.class(`dialog__window--${type}`);
            }

            if (type === 'full') {
                expect($dialog).has.class('dialog--no-mask');
                expect($window).has.class('dialog__window--slide');
            } else {
                expect($dialog).has.class('dialog--mask-fade');
                expect($window).has.class('dialog__window--fade');
            }
        });
    });

    ['left', 'right'].forEach(type => {
        it(`renders with ${type} type`, async() => {
            const { getByRole } = await render(template, { type });
            const $dialog = getByRole('dialog');
            const $window = $dialog.children[0];

            expect($dialog).has.class('dialog--mask-fade-slow');
            expect($window).has.class(`dialog__window--${type}`);
            expect($window).has.class('dialog__window--slide');
        });
    });

    testPassThroughAttributes(template);
});
