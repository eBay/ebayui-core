const { expect, use } = require('chai');
const { render, fireEvent } = require('@marko/testing-library');
const basicSnackbarTemplate = require('./mock/mock-basic.marko');
const actionSnackbarTemplate = require('./mock/action-snackbar-template.marko');

use(require('chai-dom'));

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed action snackbar', () => {
    beforeEach(async () => {
        component = await render(actionSnackbarTemplate);
    });

    it('it is not visible in the DOM', () => {
        expect(
            component.getByText(/This is the action snackbar/i).parentElement.parentElement
        ).to.have.attribute('hidden');
    });

    it('once the button is clicked it becomes visible', async () => {
        await fireEvent.click(component.getByText('Open Action Snackbar'));
        const visibleSnackbar = await component.findByText(/This is the action snackbar/i);
        setTimeout(() => {
            expect(visibleSnackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 1000);
    });

    it('then clicking the undo button makes the snackbar disappear', async () => {
        await fireEvent.click(component.getByText('Open Action Snackbar'));
        const snackbar = await component.findByText(/This is the action snackbar/i);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 1000);
        await fireEvent.click(component.getByText(/undo/i));
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).to.have.attribute('hidden');
        }, 1000);
    });

    it('mouseEnter prevents the snackbar from disappearing', async () => {
        await fireEvent.click(component.getByText('Open Action Snackbar'));
        const snackbar = await component.findByText(/This is the action snackbar/i);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 1000);
        await fireEvent.mouseEnter(snackbar.parentElement.parentElement);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 7000);
        await fireEvent.mouseLeave(snackbar.parentElement.parentElement);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).to.have.attribute('hidden');
        }, 7000);
    });

    it('button focus prevents the snackbar from disappearing', async () => {
        await fireEvent.click(component.getByText('Open Action Snackbar'));
        const snackbar = await component.findByText(/This is the action snackbar/i);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 1000);
        await fireEvent.focus(component.getByText(/undo/i));
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 7000);
        await fireEvent.blur(component.getByText(/undo/i));
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).to.have.attribute('hidden');
        }, 7000);
    });

    it('mouseEnter, focus, blur still has snackbar visible until after mouseLeave', async () => {
        await fireEvent.click(component.getByText('Open Action Snackbar'));
        const snackbar = await component.findByText(/This is the action snackbar/i);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 1000);
        await fireEvent.mouseEnter(snackbar.parentElement.parentElement);
        await fireEvent.focus(component.getByText(/undo/i));
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 7000);
        await fireEvent.blur(component.getByText(/undo/i));
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).does.not.have.attribute('hidden');
        }, 7000);
        await fireEvent.mouseLeave(snackbar.parentElement.parentElement);
        setTimeout(() => {
            expect(snackbar.parentElement.parentElement).to.have.attribute('hidden');
        }, 7000);
    });
});

describe('given an open snackbar', () => {
    beforeEach(async () => {
        component = await render(basicSnackbarTemplate);
    });

    it('then it is visible in the DOM', () => {
        expect(
            component.getByText('This is the basic snackbar').parentElement.parentElement
        ).does.not.have.attribute('hidden');
    });
});
