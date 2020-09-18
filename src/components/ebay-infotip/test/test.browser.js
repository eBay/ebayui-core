const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, cleanup, waitFor } = require('@marko/testing-library');
const { fastAnimations } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the default infotip', () => {
    const input = mock.WithContent;

    beforeEach(async() => {
        component = await render(template, input);
    });

    thenItCanBeOpenAndClosed();

    describe('when it is rerendered', () => {
        // Needed to change input for rerender to work correctly
        beforeEach(async() => await component.rerender(assign({}, input, { disabled: false })));
        thenItCanBeOpenAndClosed();
    });

    function thenItCanBeOpenAndClosed() {
        describe('when the host element is clicked', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getAllByLabelText(input.ariaLabel)[0]);
            });

            it('then it emits the expand event', () => {
                expect(component.emitted('expand')).has.length(1);
            });

            it('then it is expanded', () => {
                expect(component.getByLabelText(input.ariaLabel)).has.attr('aria-expanded', 'true');
            });

            describe('when the host element is clicked a second time to close', () => {
                beforeEach(async() => {
                    await fireEvent.click(component.getByLabelText(input.ariaLabel));
                });

                it('then it emits the collapse event', () => {
                    expect(component.emitted('collapse')).has.length(1);
                });

                it('then it is collapsed', () => {
                    expect(component.getByLabelText(input.ariaLabel)).does.not.have.attr('aria-expanded', 'true');
                });
            });
        });
    }
});

describe('given the modal infotip', () => {
    const input = mock.ModalWithContent;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the host element is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getAllByLabelText(input.ariaLabel)[0]);
        });

        it('then it emits the expand event', async() => {
            await waitFor(() => expect(component.emitted('expand')).has.length(1));
        });

        it('then it is expanded', async() => {
            await waitFor(() => {
                expect(component.getByRole('dialog')).does.not.have.attr('hidden');
            });
        });
    });
});

describe('given the modal infotip opened', () => {
    const input = assign({}, mock.ModalWithContent, { open: true });

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the host element is opened and then closed', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByLabelText(input.a11yCloseText));
        });

        it('then it emits the collapse event', async() => {
            await waitFor(() => expect(component.emitted('collapse')).has.length(1));
        });

        it('then it is collapsed', async() => {
            await waitFor(() => {
                expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden');
            });
        });
    });
});
