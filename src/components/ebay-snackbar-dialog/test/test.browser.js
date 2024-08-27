import { composeStories } from "@storybook/marko";
import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
    vi,
} from "vitest";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../snackbar-dialog.stories"; // import all stories from the stories file
const { Default, WithAction } = composeStories(stories);

beforeAll(() => {
    fastAnimations.start();
});

afterAll(() => {
    fastAnimations.stop();
});
afterEach(() => {
    cleanup();
});

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given an open snackbar", () => {
    beforeEach(async () => {
        component = await render(WithAction, { open: true });
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("then it is not hidden in the DOM", () => {
        expect(component.getByRole("dialog")).not.toHaveAttribute("hidden");
    });

    describe("clicking on action icon emits action", () => {
        it("action emitted", async () => {
            await fireEvent.click(component.getByText(/Undo/i));
            expect(component.emitted("action")).has.length(1);
        });
    });

    describe("focus and mouseenter prevent closing it until all events", () => {
        it("is not closed", async () => {
            await fireEvent.mouseEnter(
                component.getByText(/Undo/i).parentElement,
            );
            await fireEvent.focus(component.getByText(/Undo/i).parentElement);
            await fireEvent.blur(component.getByText(/Undo/i).parentElement);
            vi.advanceTimersByTime(7000);
            await waitFor(() => {
                expect(component.emitted("close")).has.length(0);
            });
        });
    });
});

describe("given a closed snackbar", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    it("then it is hidden in the DOM", () => {
        expect(component.getByRole("dialog", { hidden: true })).toHaveAttribute(
            "hidden",
        );
    });
});
