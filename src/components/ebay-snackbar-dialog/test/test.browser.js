const { expect, use } = require('chai');
const sinon = require('sinon');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const { fastAnimations } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

let timer;
use(require('chai-dom'));
before(() => {
    timer = sinon.useFakeTimers();
    fastAnimations.start();
});

after(() => {
    timer.restore();
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

    describe('then it is closed after time', () => {
        it('then it is not visible in the DOM', async () => {
            timer.tick(7000);
            expect(component.emitted('close')).has.length(1);
        });
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
            timer.tick(7000);
            expect(component.emitted('close')).has.length(0);
        });
    });
});

describe('given a closed snackbar', () => {
    const input = mock.Snackbar_Closed;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it('then it is hidden in the DOM', () => {
        expect(
            component.getByText('action content').parentElement.parentElement.parentElement
        ).to.have.attr('hidden');
    });
});
