const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
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

    it.skip('once the button is clicked it becomes visible', async () => {
        await fireEvent.click(component.getByText('Open Action Snackbar'));
        const visibleSnackbar = await component.findByText(/This is the action snackbar/i);
        expect(visibleSnackbar.parentElement.parentElement).does.not.have.attribute('hidden');
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
