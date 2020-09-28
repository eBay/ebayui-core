const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
const { fastAnimations } = require('../../../../common/test-utils/browser');
const { pressKey } = require('../../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');
require('@ebay/skin/lightbox-dialog');

use(require('chai-dom'));
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);
// Because dialog base does not have all the data this needs to be run by each module separately

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed dialog', () => {
    const input = mock.Dialog;
    let sibling;

    beforeEach(async() => {
        sibling = document.body.appendChild(document.createElement('div'));
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it('then it is hidden in the DOM', async() => {
        await waitFor(() => expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden'));
    });

    it('then <body> is scrollable', () => {
        expect(document.body).does.not.have.attr('style');
    });

    it('then it\'s siblings are visible', () => {
        expect(sibling).does.not.have.attr('aria-hidden');
    });

    it('then it does not trap focus', () => {
        expect(component.getByRole('dialog', { hidden: true })
            .children[0]).does.not.have.class('keyboard-trap--active');
    });

    describe('when it is rerendered to be open', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        thenItIsOpen(true);
    });

    function thenItIsOpen(wasToggled) {
        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
        });

        it('then <body> is not scrollable', () => {
            expect(document.body).has.attr('style').contains('overflow:hidden');
        });

        it('then it\'s siblings are hidden', async() => {
            await waitFor(() => expect(sibling).has.attr('aria-hidden', 'true'));
        });

        if (wasToggled) {
            it('then it traps focus', async() => {
                await waitFor(() => {
                    expect(component.getByRole('dialog').children[1]).has.class('keyboard-trap--active');
                    component.getByLabelText(input.a11yCloseText).classList.forEach((cls) =>
                        expect(document.activeElement).has.class(cls));
                });
            });

            it('then it emits the open event', async() => {
                await waitFor(() => expect(component.emitted('open')).has.length(1));
            });

            describe('when it is rerendered with the same input', () => {
                beforeEach(async() => await component.rerender());
                thenItIsOpen();
            });
        }
    }
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

    thenItIsOpen();

    describe('when the close button is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByLabelText(input.a11yCloseText));
        });

        thenItIsClosed(true);
    });

    describe('when the escape is pressed', () => {
        beforeEach(async() => {
            await pressKey(component.getByText(input.renderBody.text), {
                key: 'Escape',
                keyCode: 27
            });
        });

        thenItIsClosed(true);
    });

    describe('when the escape is outside modal', () => {
        beforeEach(async() => {
            await pressKey(document, {
                key: 'Escape',
                keyCode: 27
            });
        });

        thenItIsClosed(true);
    });

    describe('when the escape is pressed on input', () => {
        beforeEach(async() => {
            const inputEl = document.createElement('input');
            inputEl.setAttribute('placeholder', 'sample input');
            component.getByRole('dialog').appendChild(inputEl);
            await pressKey(component.getByPlaceholderText('sample input'), {
                key: 'Escape',
                keyCode: 27
            });
        });

        thenItIsClosed(true);
    });

    describe('when the mask is clicked', () => {
        beforeEach(async() => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole('dialog'));
        });

        thenItIsClosed(true);
    });

    function thenItIsOpen() {
        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
        });

        it('then <body> is not scrollable', () => {
            expect(document.body).has.attr('style').contains('overflow:hidden');
        });

        it('then it\'s siblings are hidden', async() => {
            await waitFor(() => expect(sibling).has.attr('aria-hidden', 'true'));
        });

        it('then it traps focus', async() => {
            await waitFor(() => {
                expect(component.getByRole('dialog').children[1]).has.class('keyboard-trap--active');
                component.getByLabelText(input.a11yCloseText).classList.forEach((cls) =>
                    expect(document.activeElement).has.class(cls));
            });
        });
    }

    function thenItIsClosed(wasToggled) {
        it('then it is hidden in the DOM', async() => {
            await waitFor(() => expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden'));
        });

        it('then <body> is scrollable', async() => {
            await waitFor(() => {
                expect(document.body).does.not.have.attr('style');
            });
        });

        it('then it\'s siblings are visible', () => {
            expect(sibling).does.not.have.attr('aria-hidden');
        });

        it('then it restores the previous focus', async() => {
            expect(component.getByRole('dialog').children[0]).does.not.have.class('keyboard-trap--active');
            await waitFor(() => expect(document.activeElement).to.equal(sibling));
        });

        if (wasToggled) {
            it('then it emits the close event', async() => {
                await waitFor(() => expect(component.emitted('close')).has.length(1));
            });

            describe('when it is rerendered with the same input', () => {
                beforeEach(async() => await component.rerender(input));
                thenItIsOpen();
            });
        }
    }
});

describe('given an open dialog with no trap', () => {
    const input = mock.Dialog_Open;
    let sibling;

    beforeEach(async() => {
        sibling = document.body.appendChild(document.createElement('button'));
        sibling.focus();
        component = await render(template, assign({}, input, { isModal: false }));
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it('then it is visible in the DOM', async() => {
        await waitFor(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
    });

    it('then <body> is scrollable', () => {
        expect(document.body).does.not.have.attr('style');
    });

    it('then it\'s siblings are not hidden', () => {
        expect(sibling).does.not.have.attr('aria-hidden', 'true');
    });

    it('then it does not traps focus', async() => {
        await waitFor(() => {
            expect(component.getByRole('dialog', { hidden: true }).children[1]).to.equal(undefined);
            component.getByLabelText(input.a11yCloseText).classList.forEach((cls) =>
                expect(document.activeElement).does.not.have.class(cls));
        });
    });
});

describe('given an open with no close button', () => {
    const input = mock.Dialog_Open;
    let sibling;

    beforeEach(async() => {
        sibling = document.body.appendChild(document.createElement('button'));
        sibling.focus();
        component = await render(template, assign({}, input, { buttonPosition: 'hidden', skipEscape: true }));
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    thenItIsOpen();

    describe('when the escape is pressed', () => {
        beforeEach(async() => {
            await pressKey(component.getByText(input.renderBody.text), {
                key: 'Escape',
                keyCode: 27
            });
        });

        thenItIsOpen();
    });

    describe('when the escape is outside modal', () => {
        beforeEach(async() => {
            await pressKey(document, {
                key: 'Escape',
                keyCode: 27
            });
        });

        thenItIsOpen(true);
    });

    describe('when the mask is clicked', () => {
        beforeEach(async() => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole('dialog'));
        });

        thenItIsOpen(true);
    });

    function thenItIsOpen() {
        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
        });

        it('then <body> is not scrollable', () => {
            expect(document.body).has.attr('style').contains('overflow:hidden');
        });
    }
});

describe('given a closed dialog with useHiddenProperty', () => {
    const input = assign({}, mock.Dialog, { useHiddenProperty: true });
    let sibling;

    beforeEach(async() => {
        sibling = document.body.appendChild(document.createElement('div'));
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it('then it is hidden in the DOM', async() => {
        await waitFor(() => expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden'));
    });

    it('then <body> is scrollable', () => {
        expect(document.body).does.not.have.attr('style');
    });

    it('then it\'s siblings are visible', async() => {
        await waitFor(() => expect(sibling).does.not.have.attr('hidden'));
    });

    it('then it does not trap focus', () => {
        expect(component.getByRole('dialog', { hidden: true }).children[0]).
            does.not.have.class('keyboard-trap--active');
    });

    describe('when it is rerendered to be open', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        thenItIsOpen(true);
    });

    function thenItIsOpen(wasToggled) {
        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
        });

        it('then <body> is not scrollable', () => {
            expect(document.body).has.attr('style').contains('overflow:hidden');
        });

        it('then it\'s siblings are hidden', async() => {
            await waitFor(() => expect(sibling).has.attr('hidden'));
        });

        if (wasToggled) {
            it('then it traps focus', async() => {
                await waitFor(() => {
                    expect(component.getByRole('dialog').children[1]).has.class('keyboard-trap--active');
                    component.getByLabelText(input.a11yCloseText).classList.forEach((cls) =>
                        expect(document.activeElement).has.class(cls));
                });
            });

            it('then it emits the show event', async() => {
                await waitFor(() => expect(component.emitted('open')).has.length(1));
            });

            describe('when it is rerendered with the same input', () => {
                beforeEach(async() => await component.rerender());
                thenItIsOpen();
            });
        }
    }
});
