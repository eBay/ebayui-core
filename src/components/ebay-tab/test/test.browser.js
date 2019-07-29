const { expect, use } = require('chai');
const { render, fireEvent, waitForDomChange: __oldWaitForDomChange, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given tabs with first heading selected', () => {
    const input = mock.Basic_3Headings_3Panels_No_Index;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the first heading is clicked', () => {
        beforeEach(() => {
            component.getAllByRole('tab')[0].click();
        });

        it('then it does not emit the select event', () => {
            expect(component.emitted('tab-select')).has.length(0);
        });
    });

    describe('when the second tab is activated', () => {
        describe('via click', () => {
            beforeEach(async() => {
                await waitForDomChange(() => {
                    component.getAllByRole('tab')[1].click();
                });
            });

            thenItHasMovedToTab(1);
        });

        describe('via keyboard action button', () => {
            beforeEach(async() => {
                await waitForDomChange(() => {
                    fireEvent.keyDown(component.getAllByRole('tab')[1], {
                        key: 'Space',
                        keyCode: 32
                    });
                });
            });

            thenItHasMovedToTab(1);
        });
    });

    describe('when the right arrow key is pressed', () => {
        beforeEach(async() => {
            await waitForDomChange(() => {
                fireEvent.keyDown(component.getAllByRole('tab')[1], {
                    key: 'ArrowRight',
                    keyCode: 39
                });
            });
        });

        thenItHasMovedToTab(1);
    });

    describe('when the left arrow key is pressed', () => {
        beforeEach(async() => {
            await waitForDomChange(() => {
                fireEvent.keyDown(component.getAllByRole('tab')[1], {
                    key: 'ArrowLeft',
                    keyCode: 37
                });
            });
        });

        thenItHasMovedToTab(2);
    });

    function thenItHasMovedToTab(index) {
        it('then it emits the select event with correct data', () => {
            const selectEvents = component.emitted('tab-select');
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('index', index);
        });

        it(`then heading ${index + 1} is selected`, () => {
            expect(component.getAllByRole('tab')[index]).has.attr('aria-selected', 'true');
        });
    }
});

describe('given tabs with third heading selected', () => {
    const input = mock.Basic_3Headings_3Panels_2Index;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the right arrow key is pressed', () => {
        beforeEach(async() => {
            await waitForDomChange(() => {
                fireEvent.keyDown(component.getAllByRole('tab')[1], {
                    key: 'ArrowRight',
                    keyCode: 39
                });
            });
        });

        thenItHasMovedToTab(0);
    });

    describe('when the left arrow key is pressed', () => {
        beforeEach(async() => {
            await waitForDomChange(() => {
                fireEvent.keyDown(component.getAllByRole('tab')[1], {
                    key: 'ArrowLeft',
                    keyCode: 37
                });
            });
        });

        thenItHasMovedToTab(1);
    });

    function thenItHasMovedToTab(index) {
        it('then it emits the select event with correct data', () => {
            const selectEvents = component.emitted('tab-select');
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('index', index);
        });

        it(`then heading ${index + 1} is selected`, () => {
            expect(component.getAllByRole('tab')[index]).has.attr('aria-selected', 'true');
        });
    }
});

async function waitForDomChange(fn) {
    const change = __oldWaitForDomChange();
    if (fn) await fn();
    await change;
}
