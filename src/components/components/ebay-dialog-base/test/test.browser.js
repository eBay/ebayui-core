const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, wait, cleanup } = require('@marko/testing-library');
const { fastAnimations } = require('../../../../common/test-utils/browser');
const { pressKey } = require('../../../../common/test-utils/browser');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed dialog', () => {
    const input = mock.Fill_Dialog;
    let sibling;

    beforeEach(async() => {
        sibling = document.body.appendChild(document.createElement('div'));
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it('then it is hidden in the DOM', async() => {
        await wait(() => expect(component.getByRole('dialog')).has.attr('hidden'));
    });

    it('then <body> is scrollable', () => {
        expect(document.body).does.not.have.attr('style');
    });

    it('then it\'s siblings are visible', () => {
        expect(sibling).does.not.have.attr('aria-hidden');
    });

    it('then it does not trap focus', () => {
        expect(component.getByRole('dialog').children[0]).does.not.have.class('keyboard-trap--active');
    });

    describe('when it is rerendered to be open', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        thenItIsOpen(true);
    });

    function thenItIsOpen(wasToggled) {
        it('then it is visible in the DOM', async() => {
            await wait(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
        });

        it('then <body> is not scrollable', () => {
            expect(document.body).has.attr('style').contains('overflow:hidden');
        });

        it('then it\'s siblings are hidden', () => {
            expect(sibling).has.attr('aria-hidden', 'true');
        });

        if (wasToggled) {
            it('then it traps focus', async() => {
                await wait(() => {
                    expect(component.getByRole('dialog').children[1]).has.class('keyboard-trap--active');
                    expect(document.activeElement).has.class(component.getByLabelText(input.a11yCloseText).className);
                });
            });

            it('then it emits the show event', async() => {
                await wait(() => expect(component.emitted('modal-show')).has.length(1));
            });

            describe('when it is rerendered with the same input', () => {
                beforeEach(async() => await component.rerender());
                thenItIsOpen();
            });
        }
    }
});

describe('given an open dialog', () => {
    const input = mock.Fill_Dialog_Open;
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

        thenItIsOpen();
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
            await wait(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
        });

        it('then <body> is not scrollable', () => {
            expect(document.body).has.attr('style').contains('overflow:hidden');
        });

        it('then it\'s siblings are hidden', () => {
            expect(sibling).has.attr('aria-hidden', 'true');
        });

        it('then it traps focus', async() => {
            await wait(() => {
                expect(component.getByRole('dialog').children[1]).has.class('keyboard-trap--active');
                expect(document.activeElement).has.class(component.getByLabelText(input.a11yCloseText).className);
            });
        });
    }

    function thenItIsClosed(wasToggled) {
        it('then it is hidden in the DOM', async() => {
            await wait(() => expect(component.getByRole('dialog')).has.attr('hidden'));
        });

        it('then <body> is scrollable', async() => {
            await wait(() => {
                expect(document.body).does.not.have.attr('style');
            });
        });

        it('then it\'s siblings are visible', () => {
            expect(sibling).does.not.have.attr('aria-hidden');
        });

        it('then it restores the previous focus', async() => {
            expect(component.getByRole('dialog').children[0]).does.not.have.class('keyboard-trap--active');
            await wait(() => expect(document.activeElement).to.equal(sibling));
        });

        if (wasToggled) {
            it('then it emits the close event', async() => {
                await wait(() => expect(component.emitted('modal-close')).has.length(1));
            });

            describe('when it is rerendered with the same input', () => {
                beforeEach(async() => await component.rerender(input));
                thenItIsOpen();
            });
        }
    }
});

describe('given an open dialog with no trap', () => {
    const input = mock.Fill_Dialog_Open;
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
        await wait(() => expect(component.getByRole('dialog')).does.not.have.attr('hidden'));
    });

    it('then <body> is scrollable', () => {
        expect(document.body).does.not.have.attr('style');
    });

    it('then it\'s siblings are not hidden', () => {
        expect(sibling).does.not.have.attr('aria-hidden', 'true');
    });

    it('then it does not traps focus', async() => {
        await wait(() => {
            expect(component.getByRole('dialog').children[1]).to.equal(undefined);
            expect(document.activeElement).does.not.have.class(component.getByLabelText(input.a11yCloseText).className);
        });
    });
});
