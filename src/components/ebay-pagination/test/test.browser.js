const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the pagination is rendered', () => {
    let input;

    describe('with links', () => {
        beforeEach(async() => {
            input = mock.Links_6Items_No_Selected;
            component = await render(template, input);
        });

        thenItCanBeInteractedWith();
    });

    describe('with buttons', () => {
        beforeEach(async() => {
            input = mock.Buttons_0Selected;
            component = await render(template, input);
        });

        thenItCanBeInteractedWith();
    });

    function thenItCanBeInteractedWith() {
        describe('when the previous button is activated', () => {
            describe('via click', () => {
                beforeEach(async() => {
                    await fireEvent.click(component.getByLabelText(input.a11yPreviousText), {
                        detail: 1
                    });
                });

                thenItEmittedThePaginationPreviousEvent();
            });

            function thenItEmittedThePaginationPreviousEvent() {
                it('then it emits the pagination-previous event', () => {
                    const previousEvents = component.emitted('pagination-previous');
                    expect(previousEvents).has.length(1);

                    const [[eventArg]] = previousEvents;
                    expect(eventArg).has.property('originalEvent').instanceOf(Event);
                    expect(eventArg).has.property('el').instanceOf(HTMLElement);
                });
            }
        });

        describe('when the next button is activated', () => {
            describe('via click', () => {
                beforeEach(async() => {
                    await fireEvent.click(component.getByLabelText(input.a11yNextText), {
                        detail: 1
                    });
                });

                thenItEmittedThePaginationNextEvent();
            });

            function thenItEmittedThePaginationNextEvent() {
                it('then it emits the pagination-next event', () => {
                    const nextEvents = component.emitted('pagination-next');
                    expect(nextEvents).has.length(1);

                    const [[eventArg]] = nextEvents;
                    expect(eventArg).has.property('originalEvent').instanceOf(Event);
                    expect(eventArg).has.property('el').instanceOf(HTMLElement);
                });
            }
        });

        describe('when the item number is activated', () => {
            describe('via click', () => {
                beforeEach(async() => {
                    await fireEvent.click(component.getByText(input.items[1].renderBody.text), {
                        detail: 1
                    });
                });

                thenItEmittedThePaginationSelectEvent();
            });

            function thenItEmittedThePaginationSelectEvent() {
                it('then it emits the pagination-select event', () => {
                    const selectEvents = component.emitted('pagination-select');
                    expect(selectEvents).has.length(1);

                    const [[eventArg]] = selectEvents;
                    expect(eventArg).has.property('originalEvent').instanceOf(Event);
                    expect(eventArg).has.property('el').instanceOf(HTMLElement);
                    expect(eventArg).has.property('value', input.items[1].renderBody.text);
                });
            }
        });
    }
});

describe('given the pagination is rendered with disabled controls', () => {
    const input = mock.Links_1Items_Navigation_Disabled;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the previous button is activated', () => {
        describe('via click', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yPreviousText), {
                    detail: 1
                });
            });

            thenItDidNotEmitThePaginationPreviousEvent();
        });

        function thenItDidNotEmitThePaginationPreviousEvent() {
            it('then it does not emit the pagination-previous event', () => {
                expect(component.emitted('pagination-previous')).has.length(0);
            });
        }
    });

    describe('when the next button is activated', () => {
        describe('via click', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yNextText), {
                    detail: 1
                });
            });

            thenItDidNotEmitThePaginationNextEvent();
        });

        function thenItDidNotEmitThePaginationNextEvent() {
            it('then it does not emit the pagination-next event', () => {
                expect(component.emitted('pagination-next')).has.length(0);
            });
        }
    });
});

describe('given the pagination is rendered at various sizes', () => {
    [
        {
            name: 'with the second item selected',
            input: mock.Links_9Items_1Selected,
            cases: [{
                width: 400,
                expect: [0, 5]
            }, {
                width: 540,
                expect: [0, 7]
            }, {
                width: 640,
                expect: [0, 9]
            }]
        }, {
            name: 'with the fifth item selected',
            input: mock.Links_9Items_4Selected,
            cases: [{
                width: 400,
                expect: [2, 7]
            }, {
                width: 440,
                expect: [2, 8]
            }, {
                width: 540,
                expect: [1, 8]
            }, {
                width: 640,
                expect: [0, 9]
            }]
        }, {
            name: 'with the eighth item selected',
            input: mock.Links_9Items_7Selected,
            cases: [{
                width: 400,
                expect: [4, 9]
            }, {
                width: 540,
                expect: [2, 9]
            }, {
                width: 640,
                expect: [0, 9]
            }]
        }
    ].forEach(({ name, input, cases }) => {
        describe(name, () => {
            beforeEach(async() => {
                component = await render(template, input);
            });

            cases.forEach(({ width, expect: [from, to] }) => {
                describe(`when it is ${width} wide`, () => {
                    beforeEach(async() => {
                        component.container.style.width = `${width}px`;
                        await fireEvent(window, new Event('resize'));
                        // Wait one frame for the resize util to emit.
                        await new Promise(resolve => requestAnimationFrame(resolve));
                        // Wait a setTimeout for Marko to finish rendering.
                        await new Promise(resolve => setTimeout(resolve));
                    });

                    it(`then it shows items ${from} through ${to}`, () => {
                        input.items.slice(1, -1).forEach((itemData, i) => {
                            const itemEl = component.getByText(itemData.renderBody.text);
                            const isHidden = Boolean(itemEl.closest('[hidden]'));
                            expect(isHidden).to.equal(
                                i < from || i >= to,
                                `item ${i} should be ${isHidden ? 'visible' : 'hidden'}`
                            );
                        });
                    });
                });
            });
        });
    });
});
