const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
const basicSnackbarTemplate = require('./mock/mock-basic.marko');
const actionSnackbarTemplate = require('./mock/action-snackbar-template.marko');

use(require('chai-dom'));
// const mock = require('./mock');

// afterEach(cleanup)

// test('renders a message', async () => {
//   const { container, getByText } = await render(basicSnackbarTemplate);
//   expect(getByText(/Marko/)).toBeInTheDocument()
//   expect(container.firstChild).toMatchInlineSnapshot(`
//     <h1>Hello, Marko!</h1>
//   `)
// })

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed action snackbar', () => {
    beforeEach(async () => {
        component = await render(actionSnackbarTemplate, { open: false });
    });

    it('it is not visible in the DOM', () => {
        // component.debug();
        // console.log(component.getByRole('dialog'));
        expect(
            component.getByText(/This is the action snackbar/i).parentElement.parentElement
        ).to.have.attribute('hidden');
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
        // component.debug();
        // console.log(component.getByRole('dialog'));
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
