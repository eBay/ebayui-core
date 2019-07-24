const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe.only('dialog', () => {
    it('renders basic version', async() => {
        const input = mock.Fill_Dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog')).has.attr('hidden');
        expect(getByRole('dialog')).has.class('dialog');
        expect(getByRole('document')).has.class('dialog__window');
        expect(getByLabelText(input.a11yCloseText)).has.class('dialog__close');
        expect(getByText(input.renderBody.text)).has.class('dialog__body');
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
            const $window = getByRole('document');

            if (type) {
                expect($window).has.class(`dialog__window--${type}`);
            }

            if (type === 'full') {
                expect($dialog).has.class('dialog--no-mask');
            } else {
                expect($dialog).has.class('dialog--mask-fade');
            }

            expect($window).has.class('dialog__window--fade');
        });
    });

    ['left', 'right'].forEach(type => {
        it(`renders with ${type} type`, async() => {
            const { getByRole } = await render(template, { type });
            const $dialog = getByRole('dialog');
            const $window = getByRole('document');

            expect($dialog).has.class('dialog--mask-fade-slow');
            expect($window).has.class(`dialog__window--${type}`);
            expect($window).has.class('dialog__window--slide');
        });
    });

    testPassThroughAttributes(template);
});
