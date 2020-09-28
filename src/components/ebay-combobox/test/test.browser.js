const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const { pressKey } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the combobox with 3 items', () => {
    const input = mock.Combobox_3Options;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('has no options selected by default', () => {
        expect(component.getAllByRole('option', { hidden: true }).filter(isAriaSelected)).has.length(0);
    });

    it('then it should not be expanded', () => {
        expect(component.getByRole('combobox')).has.attr('aria-expanded', 'false');
    });

    describe('after it is rerendered', () => {
        beforeEach(async() => {
            await component.rerender();
        });

        thenItIsReadyForInteraction();
    });

    thenItIsReadyForInteraction();

    function thenItIsReadyForInteraction() {
        describe('when the input receives focus', () => {
            beforeEach(async() => {
                await fireEvent.focus(component.getByRole('combobox'));
            });

            it('then it should expand the combobox', () => {
                expect(component.getByRole('combobox')).has.attr('aria-expanded', 'true');
            });

            describe('when any character key is pressed', () => {
                beforeEach(async() => {
                    await pressKey(component.getByRole('combobox'), {
                        key: 'A',
                        keyCode: 65
                    });
                });

                it('then it should emit a input event', () => {
                    expect(component.emitted('input-change')).has.length(1);
                });

                describe('when blur happens on the combobox', () => {
                    beforeEach(async() => {
                        await fireEvent.blur(component.getByRole('combobox'));
                    });

                    it('then it should emit a change event', () => {
                        expect(component.emitted('change')).has.length(1);
                    });
                });
            });

            describe('when the down arrow key is pressed', () => {
                beforeEach(async() => {
                    await pressKey(component.getByRole('combobox'), {
                        key: 'ArrowDown',
                        keyCode: 40
                    });
                });

                it('then it should highlight the first option in the combobox', () => {
                    const options = component.getAllByRole('option');
                    expect(options).has.property(0).with.class('combobox__option--active');
                    expect(options).has.property(1).not.with.class('combobox__option--active');
                });

                describe('when the enter key is pressed', () => {
                    beforeEach(async() => {
                        await pressKey(component.getByRole('combobox'), {
                            key: 'Enter',
                            keyCode: 13
                        });
                    });

                    it('then it should correctly set value for the input', () => {
                        expect(component.getByRole('combobox').value).to.equal(input.options[0].text);
                    });

                    it('then it emitted the select event', () => {
                        expect(component.emitted('select')).has.length(1);
                    });
                });

                describe('when the down arrow key is pressed a second time', () => {
                    beforeEach(async() => {
                        await pressKey(component.getByRole('combobox'), {
                            key: 'ArrowDown',
                            keyCode: 40
                        });
                    });

                    it('then it should highlight the second option in the combobox', () => {
                        const options = component.getAllByRole('option');
                        expect(options).has.property(0).not.with.class('combobox__option--active');
                        expect(options).has.property(1).with.class('combobox__option--active');
                    });
                });
            });

            describe('when the second option is clicked', () => {
                beforeEach(async() => {
                    await fireEvent.click(component.getAllByRole('option')[1]);
                });

                it('then it should emit a select event', () => {
                    expect(component.emitted('select')).has.length(1);
                });

                it('then it should update the input', () => {
                    expect(component.getByRole('combobox')).has.value(input.options[1].text);
                });
            });

            describe('when the escape key is pressed', () => {
                beforeEach(async() => {
                    await pressKey(component.getByRole('combobox'), {
                        key: 'Escape',
                        keyCode: 27
                    });
                });

                it('then it should collapse the combobox', () => {
                    expect(component.getByRole('combobox')).has.attr('aria-expanded', 'false');
                });
            });
        });
    }
});

describe('given the combobox starts with zero options', () => {
    const input = mock.Combobox_0Options;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the input receives focus', () => {
        beforeEach(async() => {
            await fireEvent.focus(component.getByRole('combobox'));
        });

        it('then it has no options', () => {
            expect(component.queryAllByRole('option')).has.length(0);
        });

        it('then it should not be expanded', () => {
            expect(component.getByRole('combobox')).not.has.attr('aria-expanded');
        });
    });

    describe('when the input receives keyup with no options', () => {
        beforeEach(async() => {
            await pressKey(component.getByRole('combobox'), {
                key: 'A',
                keyCode: 65
            });
        });

        it('then it should emit a input event', () => {
            expect(component.emitted('input-change')).has.length(1);
        });
        describe('when blur happens on the combobox', () => {
            beforeEach(async() => {
                await fireEvent.blur(component.getByRole('combobox'));
            });

            it('then it should emit a change event', () => {
                expect(component.emitted('change')).has.length(1);
            });
        });
    });

    describe('when it is rerendered with 3 items', () => {
        const newInput = mock.Combobox_3Options;

        beforeEach(async() => {
            await component.rerender(newInput);
        });

        describe('when the input receives focus', () => {
            beforeEach(async() => {
                await fireEvent.focus(component.getByRole('combobox'));
            });

            it('then it should expand the combobox', () => {
                expect(component.getByRole('combobox')).has.attr('aria-expanded', 'true');
            });

            describe('when any character key is pressed', () => {
                beforeEach(async() => {
                    await pressKey(component.getByRole('combobox'), {
                        key: 'A',
                        keyCode: 65
                    });
                });

                it('then it should emit a input event', () => {
                    expect(component.emitted('input-change')).has.length(1);
                });

                describe('when blur happens on the combobox', () => {
                    beforeEach(async() => {
                        await fireEvent.blur(component.getByRole('combobox'));
                    });

                    it('then it should emit a change event', () => {
                        expect(component.emitted('change')).has.length(1);
                    });
                });
            });

            describe('when the down arrow key is pressed', () => {
                beforeEach(async() => {
                    await pressKey(component.getByRole('combobox'), {
                        key: 'ArrowDown',
                        keyCode: 40
                    });
                });

                it('then it should highlight the first option in the combobox', () => {
                    const options = component.getAllByRole('option');
                    expect(options).has.property(0).with.class('combobox__option--active');
                    expect(options).has.property(1).not.with.class('combobox__option--active');
                });

                describe('when the enter key is pressed', () => {
                    beforeEach(async() => {
                        pressKey(component.getByRole('combobox'), {
                            key: 'Enter',
                            keyCode: 13
                        });
                    });

                    it('then it should correctly set value for the input', () => {
                        expect(component.getByRole('combobox').value).to.equal(newInput.options[0].text);
                    });

                    it('then it emitted the select event', () => {
                        expect(component.emitted('select')).has.length(1);
                    });
                });

                describe('when the down arrow key is pressed a second time', () => {
                    beforeEach(async() => {
                        await pressKey(component.getByRole('combobox'), {
                            key: 'ArrowDown',
                            keyCode: 40
                        });
                    });

                    it('then it should highlight the second option in the combobox', () => {
                        const options = component.getAllByRole('option');
                        expect(options).has.property(0).not.with.class('combobox__option--active');
                        expect(options).has.property(1).with.class('combobox__option--active');
                    });
                });
            });

            describe('when the second option is clicked', () => {
                beforeEach(async() => {
                    await fireEvent.click(component.getAllByRole('option')[1]);
                });

                it('then it should emit a select event', () => {
                    expect(component.emitted('select')).has.length(1);
                });

                it('then it should update the input', () => {
                    expect(component.getByRole('combobox')).has.value(newInput.options[1].text);
                });
            });

            describe('when the escape key is pressed', () => {
                beforeEach(async() => {
                    await pressKey(component.getByRole('combobox'), {
                        key: 'Escape',
                        keyCode: 27
                    });
                });

                it('then it should collapse the combobox', () => {
                    expect(component.getByRole('combobox')).has.attr('aria-expanded', 'false');
                });
            });
        });
    });
});

describe('when it is rerendered with actionable', () => {
    const input = mock.Combobox_3Options_Actionable;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the actionable is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByText(input.button.renderBody.text));
        });

        it('should emit event', () => {
            expect(component.emitted('button-click')).has.length(1);
        });
    });

    describe('when it is expanded and actionable is clicked', () => {
        beforeEach(async() => {
            await fireEvent.focus(component.getByRole('combobox'));
            await fireEvent.click(component.getByText(input.button.renderBody.text));
        });

        it('should emit event and not close', () => {
            expect(component.getByRole('combobox')).has.attr('aria-expanded', 'true');
            expect(component.emitted('button-click')).has.length(1);
        });
    });
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}
