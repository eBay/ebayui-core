import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent, cleanup, waitFor } from '@marko/testing-library';
import { fastAnimations } from '../../../common/test-utils/browser';
import template from '..';
import * as mock from './mock';

use(chaiDom);
before(() => {
    fastAnimations.start();
});

after(() => {
    fastAnimations.stop();
});
afterEach(() => {
    cleanup();
});

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given an open snackbar', () => {
    const input = mock.Snackbar_Open;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it('then it is not hidden in the DOM', () => {
        expect(component.getByRole('dialog')).does.not.have.attr('hidden');
    });

    describe('clicking on action icon emits action', () => {
        it('action emitted', async () => {
            await fireEvent.click(component.getByText(/action/i));
            expect(component.emitted('action')).has.length(1);
        });
    });

    describe('focus and mouseenter prevent closing it until all events', () => {
        it('is not closed', async () => {
            await fireEvent.mouseEnter(component.getByText(/action/i).parentElement);
            await fireEvent.focus(component.getByText(/action/i).parentElement);
            await fireEvent.blur(component.getByText(/action/i).parentElement);
            await waitFor(() => {
                expect(component.emitted('close')).has.length(0);
            }, 7000);
        });
    });
});

describe('given a closed snackbar', () => {
    const input = mock.Snackbar_Closed;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it('then it is hidden in the DOM', () => {
        expect(component.getByRole('dialog', { hidden: true })).to.have.attr('hidden');
    });
});
