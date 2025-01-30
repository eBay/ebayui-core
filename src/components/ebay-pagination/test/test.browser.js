import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { page } from "@vitest/browser/context";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../pagination.stories";
import { getPaginationItems } from "../../../common/test-utils/shared";

const { Buttons, Links } = composeStories(stories);

const { a11yNextText, a11yPreviousText } = Buttons.args;

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

function isHidden(item) {
    return Boolean(item.closest("[hidden]"));
}

describe("given the pagination is rendered", () => {
    describe("with links", () => {
        beforeEach(async () => {
            component = await render(Links, {
                item: getPaginationItems(6, true),
            });
        });

        thenItCanBeInteractedWith();
    });

    describe("with buttons", () => {
        beforeEach(async () => {
            component = await render(Buttons, { item: getPaginationItems(6) });
        });

        thenItCanBeInteractedWith();
    });

    function thenItCanBeInteractedWith() {
        describe("when the previous button is activated", () => {
            describe("via click", () => {
                beforeEach(async () => {
                    await fireEvent.click(
                        component.getByLabelText(a11yPreviousText),
                        {
                            detail: 1,
                        },
                    );
                });

                thenItEmittedThePaginationPreviousEvent();
            });

            function thenItEmittedThePaginationPreviousEvent() {
                it("then it emits the previous event", () => {
                    const previousEvents = component.emitted("previous");
                    expect(previousEvents).has.length(1);

                    const [[eventArg]] = previousEvents;
                    expect(eventArg)
                        .has.property("originalEvent")
                        .instanceOf(Event);
                    expect(eventArg).has.property("el").instanceOf(HTMLElement);
                });
            }
        });

        describe("when the next button is activated", () => {
            describe("via click", () => {
                beforeEach(async () => {
                    await fireEvent.click(
                        component.getByLabelText(a11yNextText),
                        {
                            detail: 1,
                        },
                    );
                });

                thenItEmittedThePaginationNextEvent();
            });

            function thenItEmittedThePaginationNextEvent() {
                it("then it emits the next event", () => {
                    const nextEvents = component.emitted("next");
                    expect(nextEvents).has.length(1);

                    const [[eventArg]] = nextEvents;
                    expect(eventArg)
                        .has.property("originalEvent")
                        .instanceOf(Event);
                    expect(eventArg).has.property("el").instanceOf(HTMLElement);
                });
            }
        });

        describe("when the item number is activated", () => {
            describe("via click", () => {
                beforeEach(async () => {
                    await fireEvent.click(component.getByText("item 2"), {
                        detail: 1,
                    });
                });

                thenItEmittedThePaginationSelectEvent();
            });

            function thenItEmittedThePaginationSelectEvent() {
                it("then it emits the select event", () => {
                    const selectEvents = component.emitted("select");
                    expect(selectEvents).has.length(1);

                    const [[eventArg]] = selectEvents;
                    expect(eventArg)
                        .has.property("originalEvent")
                        .instanceOf(Event);
                    expect(eventArg).has.property("el").instanceOf(HTMLElement);
                    expect(eventArg).has.property("value", "item 2");
                });
            }
        });
    }
});

describe("given the pagination is rendered with disabled controls", () => {
    beforeEach(async () => {
        component = await render(Links, {
            item: getPaginationItems(1, true, null, true),
        });
    });

    describe("when the previous button is activated", () => {
        describe("via click", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText(a11yPreviousText),
                    {
                        detail: 1,
                    },
                );
            });

            thenItDidNotEmitThePaginationPreviousEvent();
        });

        function thenItDidNotEmitThePaginationPreviousEvent() {
            it("then it does not emit the previous event", () => {
                expect(component.emitted("previous")).has.length(0);
            });
        }
    });

    describe("when the next button is activated", () => {
        describe("via click", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText(a11yNextText), {
                    detail: 1,
                });
            });

            thenItDidNotEmitThePaginationNextEvent();
        });

        function thenItDidNotEmitThePaginationNextEvent() {
            it("then it does not emit the next event", () => {
                expect(component.emitted("next")).has.length(0);
            });
        }
    });
});

describe("given the pagination is rendered with overflow menu", () => {
    // Standard render which will also wait for resize event to trigger
    async function renderWithOverflow(item, selected) {
        component = await render(Links, {
            item: getPaginationItems(item, true, selected),
            variant: "overflow",
        });
        await new Promise((resolve) => requestAnimationFrame(resolve));
        // Wait a setTimeout for Marko to finish rendering.
        await new Promise((resolve) => setTimeout(resolve));
    }

    // Verifies the overflow menu, that they should be hidden/shown
    function checkOverflow(firstHidden, lastHidden) {
        const dotsEl = component.getAllByRole("separator", { hidden: true });
        const isFirstHidden = Boolean(dotsEl[0].closest("[hidden]"));
        const isLastHidden = Boolean(dotsEl[1].closest("[hidden]"));
        expect(isFirstHidden).to.equal(
            firstHidden,
            `leading is ${firstHidden ? "visible" : "hidden"}`,
        );
        expect(isLastHidden).to.equal(
            lastHidden,
            `end is ${lastHidden ? "visible" : "hidden"}`,
        );
    }

    // Verifies that the given item is present in both html dom structure as hidden, but also available in menu
    function checkMenuItem(text, leading) {
        const item = component.getAllByText(text, { hidden: true });
        expect(item.length).to.equal(2);
        if (leading) {
            // Means item is in first menu
            expect(isHidden(item[0])).to.equal(false, "item is in menu");
            expect(isHidden(item[1])).to.equal(true, "item should be hidden");
        } else {
            // Means item is in end menu
            expect(isHidden(item[0])).to.equal(true, "item should be hidden");
            expect(isHidden(item[1])).to.equal(false, "item is in menu");
        }
    }

    describe("renders with 15 items and first is selected", () => {
        beforeEach(async () => {
            await renderWithOverflow(16, 1);
        });

        it("shows overflow menu when it is at start", () => {
            checkOverflow(true, false);
            checkMenuItem("item 11", false);
        });
    });
    describe("renders with 15 items and middle is selected", () => {
        beforeEach(async () => {
            await renderWithOverflow(16, 8);
        });

        it("should show both overflow menus", () => {
            checkOverflow(false, false);
            checkMenuItem("item 14", false);
            checkMenuItem("item 1", true);
        });
    });

    describe("renders with 15 items and end is selected", () => {
        beforeEach(async () => {
            await renderWithOverflow(16, 15);
        });

        it("should show both overflow menus", () => {
            checkOverflow(false, true);
            checkMenuItem("item 1", true);
        });
    });

    describe("properly triggers on the menu", () => {
        beforeEach(async () => {
            await renderWithOverflow(16, 1);
            await fireEvent.click(component.getByRole("separator"));
            await fireEvent.click(component.getAllByText("item 11")[1]);
        });

        it("should trigger select", () => {
            const selectEvents = component.emitted("select");
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property("originalEvent").instanceOf(Event);
            expect(eventArg).has.property("el").instanceOf(HTMLElement);
            expect(eventArg).has.property("value", "item 11");
        });
    });
});

describe("given the pagination is rendered at various sizes", () => {
    [
        {
            name: "with the second item selected",
            input: { item: getPaginationItems(9, true, 1) },
            cases: [
                {
                    width: 330,
                    expect: [0, 5],
                },
                {
                    width: 430,
                    expect: [0, 7],
                },
                {
                    width: 640,
                    expect: [0, 9],
                },
            ],
        },
        {
            name: "with the fifth item selected",
            input: { item: getPaginationItems(9, true, 4) },
            cases: [
                {
                    width: 330,
                    expect: [2, 7],
                },
                {
                    width: 380,
                    expect: [2, 8],
                },
                {
                    width: 430,
                    expect: [1, 8],
                },
                {
                    width: 640,
                    expect: [0, 9],
                },
            ],
        },
        {
            name: "with the eighth item selected",
            input: { item: getPaginationItems(9, true, 7) },
            cases: [
                {
                    width: 330,
                    expect: [4, 9],
                },
                {
                    width: 430,
                    expect: [2, 9],
                },
                {
                    width: 640,
                    expect: [0, 9],
                },
            ],
        },
        {
            name: "first item and dots",
            input: {
                item: getPaginationItems(16, true, 1),
                variant: "show-last",
            },
            cases: [
                {
                    width: 330,
                    expect: [0, 3, 15],
                },
                {
                    width: 430,
                    expect: [0, 5, 15],
                },
                {
                    width: 640,
                    expect: [0, 7, 15],
                },
            ],
            dots: true,
        },
        {
            name: "with the seventh item selected and dots",
            input: {
                item: getPaginationItems(16, true, 7),
                variant: "show-last",
            },
            cases: [
                {
                    width: 330,
                    expect: [5, 8, 15],
                },
                {
                    width: 380,
                    expect: [5, 9, 15],
                },
                {
                    width: 430,
                    expect: [4, 9, 15],
                },
                {
                    width: 640,
                    expect: [3, 10, 15],
                },
            ],
            dots: true,
        },
        {
            name: "with the 3rd to last item selected and hidden dots",
            input: {
                item: getPaginationItems(16, true, 13),
                variant: "show-last",
            },
            cases: [
                {
                    width: 330,
                    expect: [11, 16],
                },
                {
                    width: 430,
                    expect: [9, 16],
                },
                {
                    width: 640,
                    expect: [7, 16],
                },
            ],
            dots: false,
        },
        {
            name: "with the last item selected and hidden dots",
            input: {
                item: getPaginationItems(16, true, 15),
                variant: "show-last",
            },
            cases: [
                {
                    width: 330,
                    expect: [11, 16],
                },
                {
                    width: 430,
                    expect: [9, 16],
                },
                {
                    width: 640,
                    expect: [7, 16],
                },
            ],
            dots: false,
        },
        {
            name: "hidden dots",
            input: {
                item: getPaginationItems(5, true, 1),
                variant: "show-last",
            },
            cases: [
                {
                    width: 330,
                    expect: [0, 5],
                },
                {
                    width: 430,
                    expect: [0, 5],
                },
                {
                    width: 640,
                    expect: [0, 5],
                },
            ],
            dots: false,
        },
    ].forEach(({ name, input, cases, dots }) => {
        describe(name, () => {
            beforeEach(async () => {
                component = await render(Links, input);
            });

            cases.forEach(({ width, expect: [from, to, last] }) => {
                describe(`when it is ${width} wide`, () => {
                    beforeEach(async () => {
                        page.viewport(1280, 500);
                        component.container.style.width = `${width}px`;
                        await fireEvent(window, new Event("resize"));
                        // Wait one frame for the resize util to emit.
                        await new Promise((resolve) =>
                            requestAnimationFrame(resolve),
                        );
                        // Wait a setTimeout for Marko to finish rendering.
                        await new Promise((resolve) => setTimeout(resolve));
                    });

                    it(`then it shows items ${from} through ${to}`, () => {
                        input.item.slice(1, -1).forEach((itemData, i) => {
                            const itemEl = component.getByText(
                                itemData.renderBody.text,
                            );
                            expect(isHidden(itemEl)).to.equal(
                                (i < from || i >= to) && last !== i,
                                `item ${i} should be ${
                                    isHidden ? "visible" : "hidden"
                                }`,
                            );
                        });
                    });
                    if (typeof dots === "boolean") {
                        it(`should ${dots ? "show" : "hide"} the dots`, () => {
                            const dotsEl = component.getByRole("separator", {
                                hidden: true,
                            });
                            expect(isHidden(dotsEl)).to.equal(
                                !dots,
                                `dots should be ${
                                    isHidden ? "visible" : "hidden"
                                }`,
                            );
                        });
                    }
                });
            });
        });
    });
});
