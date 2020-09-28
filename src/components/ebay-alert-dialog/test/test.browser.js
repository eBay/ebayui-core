const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
const { fastAnimations } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed dialog', () => {
    const input = mock.Dialog;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is hidden in the DOM', () => {
        expect(component.getByRole('alertdialog', { hidden: true })).has.attr('hidden');
    });

    describe('then it is opened', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.emitted('open')).has.length(1));
        });
    });
});

describe('given an open dialog', () => {
    const input = mock.Dialog_Open;
    let sibling;

    beforeEach(async() => {
        sibling = document.body.appendChild(document.createElement('button'));
        sibling.focus();
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it('then it is visible in the DOM', () => {
        expect(component.getByRole('alertdialog')).does.not.have.attr('hidden');
    });

    describe('when the mask is clicked', () => {
        beforeEach(async() => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole('alertdialog'));
        });

        it('then it is still open in the DOM', async() => {
            await waitFor(() => expect(component.getByRole('alertdialog')).does.not.have.attr('hidden'));
        });
    });
});
