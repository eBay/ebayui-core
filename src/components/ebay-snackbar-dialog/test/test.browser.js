const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
const basicSnackbarTemplate = require('./mock/mock-basic.marko');
const actionSnackbarTemplate = require('./mock/action-snackbar-template.marko');

use(require('chai-dom'));

// test('renders a message', async () => {
//   const { container, getByText } = await render(basicSnackbarTemplate);
//   expect(getByText(/Marko/)).toBeInTheDocument()

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed action snackbar', () => {
    beforeEach(async () => {
        component = await render(actionSnackbarTemplate, { open: false });
    });

    it('it is not visible in the DOM', () => {
        expect(
            component.getByText(/This is the action snackbar/i).parentElement.parentElement
        ).to.have.attribute('hidden');
    });

    it('once the button is clicked it becomes visible', async () => {
        await fireEvent.click(component.getAllByRole('button'));
        expect(component.getByRole('dialog')).does.not.have.attribute('hidden');
    });
});

describe('given an open snackbar', () => {
    // let sibling;

    beforeEach(async () => {
        component = await render(basicSnackbarTemplate, { open: true });
    });

    // afterEach(() => {
    //     document.body.removeChild(sibling);
    // });

    it('then it is visible in the DOM', () => {
        expect(component.getByRole('dialog')).does.not.have.attribute('hidden');
    });

    // describe('when the mask is clicked', () => {
    //     beforeEach(async() => {
    //         // simulate clicking outside the dialog.
    //         await fireEvent.click(component.getByRole('snackbardialog'));
    //     });

    //     it('then it is still open in the DOM', async() => {
    //         await waitFor(() => expect(component.getByRole('snackbardialog')).does.not.have.attr('hidden'));
    //     });
    // });
});
