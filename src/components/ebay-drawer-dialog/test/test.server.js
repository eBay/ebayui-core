const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const assign = require('core-js-pure/features/object/assign');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('drawer-dialog', () => {
    it('renders basic version', async() => {
        const input = mock.Drawer;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        const dialog = getByRole('dialog', { hidden: true });

        expect(dialog).has.attr('hidden');
        expect(dialog).has.class('drawer-dialog');
        expect(dialog).has.class('drawer-dialog--mask-fade-slow');
        expect(getByLabelText(input.a11yCloseText)).has.class('drawer-dialog__close');
        expect(getByLabelText(input.a11yHandleText)).has.class('drawer-dialog__handle');
        expect(getByText(input.renderBody.text)).has.class('drawer-dialog__main');
        expect(getByText(input.header.renderBody.text).parentElement).has.class('drawer-dialog__header');
        expect(getByText(input.footer.renderBody.text)).has.class('drawer-dialog__footer');
    });

    it('renders without handle ', async() => {
        const input = mock.Drawer;
        const { queryByLabelText } = await render(template, assign({}, input, { noHandle: true }));
        expect(queryByLabelText(input.a11yHandleText)).to.equal(null);
    });

    it('renders in open state', async() => {
        const input = mock.Drawer_Open;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    it('renders in expanded state', async() => {
        const { getByRole } = await render(template, mock.Drawer_Expanded);
        const $drawer = getByRole('dialog');
        const $window = $drawer.children[0];

        expect($window).has.class('drawer-dialog__window--expanded');
        expect($window).has.class('drawer-dialog__window--slide');
    });

    testPassThroughAttributes(template);
});
