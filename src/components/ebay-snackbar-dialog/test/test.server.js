const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
const basicSnackbarTemplate = require('./mock/mock-basic.marko');
// const mock = require('./mock');

// afterEach(cleanup)

// test('renders a message', async () => {
//   const { container, getByText } = await render(basicSnackbarTemplate);
//   expect(getByText(/Marko/)).toBeInTheDocument()
//   expect(container.firstChild).toMatchInlineSnapshot(`
//     <h1>Hello, Marko!</h1>
//   `)
// })

use(require('chai-dom'));

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given an open snackbar', () => {
    // let sibling;

    beforeEach(async () => {
        component = await render(basicSnackbarTemplate, { open: true });
    });

    // afterEach(() => {
    //     document.body.removeChild(sibling);
    // });

    it('then it is visible in the DOM', () => {
        component.debug();
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
