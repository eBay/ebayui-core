import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import template from "../index.marko";
import * as mock from "./mock";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

function thenItHasMovedToTab(selectedIndex) {
    it("then it emits the select event with correct data", () => {
        const selectEvents = component.emitted("select");
        expect(selectEvents).has.length(1);

        const [[eventArg]] = selectEvents;
        expect(eventArg).has.property("selectedIndex", selectedIndex);
    });

    it(`then heading ${selectedIndex + 1} is selected`, () => {
        expect(component.getAllByRole("tab")[selectedIndex]).toHaveAttribute(
            "aria-selected",
            "true",
        );
    });
}

describe("given tabs with first heading selected", () => {
    const input = mock.basic3Headings_3Panels_No_Index;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("when the first heading is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getAllByRole("tab")[0]);
        });

        it("then it does not emit the select event", () => {
            expect(component.emitted("select")).has.length(0);
        });
    });

    describe("when the second tab is activated via click", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getAllByRole("tab")[1]);
        });

        thenItHasMovedToTab(1);
    });

    describe("when the right arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("tab")[1], {
                key: "ArrowRight",
                keyCode: 39,
            });
        });

        thenItHasMovedToTab(1);
    });

    describe("when the left arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("tab")[1], {
                key: "ArrowLeft",
                keyCode: 37,
            });
        });

        thenItHasMovedToTab(2);
    });
});

describe("given tabs with manual activation", () => {
    const input = mock.basic3Headings_3Panels_ActivationManual;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("when the first heading is activated via keybaord action button", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("tab")[0], {
                key: " ",
                keyCode: 32,
            });
        });

        it("then it does not emit the select event", () => {
            expect(component.emitted("select")).has.length(0);
        });
    });

    describe("when the second tab is activated via keyboard action button", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("tab")[1], {
                key: " ",
                keyCode: 32,
            });
        });

        thenItHasMovedToTab(1);
    });
});

describe("given tabs with third heading selected", () => {
    const input = mock.basic3Headings_3Panels_2Index;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("when the right arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("tab")[1], {
                key: "ArrowRight",
                keyCode: 39,
            });
        });

        thenItHasMovedToTab(0);
    });

    describe("when the left arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("tab")[1], {
                key: "ArrowLeft",
                keyCode: 37,
            });
        });

        thenItHasMovedToTab(1);
    });
});
