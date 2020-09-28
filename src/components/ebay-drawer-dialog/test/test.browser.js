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

const hasTouch = typeof Touch !== 'undefined';

/** @type import("@marko/testing-library").RenderResult */
let component;

async function triggerTouch(element, diff) {
    const initPageY = 400;
    const newPageY = initPageY + diff;
    await fireEvent.touchStart(element, getTouchedData(element, initPageY));
    await fireEvent.touchMove(element, getTouchedData(element, newPageY));
    await fireEvent.touchEnd(element, getTouchedData(element, newPageY));
}

function getTouchedData(target, pageY) {
    const changedTouches = [new Touch({
        identifier: 1,
        target,
        pageX: 0,
        pageY,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5
    })];
    return {
        changedTouches
    };
}

describe('given a closed drawer', () => {
    const input = mock.Drawer;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is hidden in the DOM', () => {
        expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden');
    });

    describe('then it is opened', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.emitted('open')).has.length(1));
        });
        describe('then it is expanded', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yHandleText));
            });

            it('then it is expanded in DOM', async() => {
                await waitFor(() => expect(component.emitted('expanded')).has.length(1));
            });
        });
        describe('then it is expanded on scroll', () => {
            beforeEach(async() => {
                await fireEvent.scroll(component.getByText(input.renderBody.text));
                // Fire multiple scrolls, expect only 1 expanded is called
                await fireEvent.scroll(component.getByText(input.renderBody.text));
                await fireEvent.scroll(component.getByText(input.renderBody.text));
            });

            it('then it is expanded in DOM', async() => {
                await waitFor(() => expect(component.emitted('expanded')).has.length(1));
            });
        });
    });
});

describe('given an open and expanded drawer', () => {
    const input = mock.Drawer_Expanded;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is not hidden in the DOM', () => {
        expect(component.getByRole('dialog', { hidden: true })).does.not.have.attr('hidden');
    });

    describe('then it is collapsed', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByLabelText(input.a11yHandleText));
        });

        it('then it is expanded in DOM', async() => {
            await waitFor(() => expect(component.emitted('collapsed')).has.length(1));
        });
    });

    describe('no events on scroll', () => {
        beforeEach(async() => {
            await fireEvent.scroll(component.getByText(input.renderBody.text));
        });

        it('then it is expanded in DOM', async() => {
            await waitFor(() => expect(component.emitted('expanded')).has.length(0));
        });
    });
});

describe('given an open and non expanded drawer for touch events', () => {
    const input = mock.Drawer_Open;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is hidden in the DOM', () => {
        expect(component.getByRole('dialog', { hidden: true })).does.not.have.attr('hidden');
    });

    (hasTouch ? describe : describe.skip)('then it is expanded on touch drag up', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), -50);
        });

        it('then it is expanded in DOM', async() => {
            await waitFor(() => expect(component.emitted('expanded')).has.length(1));
        });
    });

    (hasTouch ? describe : describe.skip)('then does not trigger when threshold is not met for drag up', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), -10);
        });

        it('then it did not trigger', async() => {
            await waitFor(() => expect(component.emitted('expanded')).has.length(0));
            await waitFor(() => expect(component.emitted('close')).has.length(0));
            await waitFor(() => expect(component.emitted('collapsed')).has.length(0));
        });
    });

    (hasTouch ? describe : describe.skip)('then does not trigger when threshold is not met for drag down', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), 10);
        });

        it('then it did not trigger threshold when dragged down', async() => {
            await checkNoEvenets(component);
        });
    });

    (hasTouch ? describe : describe.skip)('then it is closed on touch drag down', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), 50);
        });

        it('then it is closed', async() => {
            await waitFor(() => expect(component.emitted('close')).has.length(1));
        });

        it('then it is hidden in the DOM when dragged down', async() => {
            await waitFor(() => expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden'));
        });
    });
});

describe('given an open and expanded drawer for touch events', () => {
    const input = mock.Drawer_Expanded;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is shown in the DOM', () => {
        expect(component.getByRole('dialog')).does.not.have.attr('hidden');
    });

    (hasTouch ? describe : describe.skip)('nothing happens on touch drag up', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), -50);
        });

        it('then it is expanded in DOM', async() => {
            await waitFor(() => expect(component.emitted('expanded')).has.length(0));
        });
    });

    (hasTouch ? describe : describe.skip)('then it is collapsed on touch drag down', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), 50);
        });

        it('then it is closed', async() => {
            await waitFor(() => expect(component.emitted('collapsed')).has.length(1));
        });
    });

    (hasTouch ? describe : describe.skip)('then does not trigger when threshold is not met for drag up', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), -10);
        });

        it('then it did not trigger', async() => {
            await checkNoEvenets(component);
        });
    });

    (hasTouch ? describe : describe.skip)('then does not trigger when threshold is not met for drag down', () => {
        beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
            await triggerTouch(component.getByLabelText(input.a11yHandleText), 10);
        });

        it('then it did not trigger on drag down', async() => {
            await checkNoEvenets(component);
        });
    });
});

async function checkNoEvenets(triggerComponent) {
    await waitFor(() => expect(triggerComponent.emitted('expanded')).has.length(0));
    await waitFor(() => expect(triggerComponent.emitted('close')).has.length(0));
    await waitFor(() => expect(triggerComponent.emitted('collapsed')).has.length(0));
}
