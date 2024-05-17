import { expect, use } from "chai";
import { composeStories } from "@storybook/marko";
import chaiDom from "chai-dom";
import sinon from "sinon/pkg/sinon";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../snackbar-dialog.stories"; // import all stories from the stories file
const { Default, WithAction } = composeStories(stories);

use(chaiDom);
before(() => {
    fastAnimations.start();
});

after(() => {
    fastAnimations.stop();
});
afterEach(() => {
    cleanup();
});

/** @type import("@marko/testing-library").RenderResult */
let component;
let clock;

describe("given an open snackbar", () => {
    beforeEach(async () => {
        component = await render(WithAction, { open: true });
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        clock.restore();
    });

    it("then it is not hidden in the DOM", () => {
        expect(component.getByRole("dialog")).does.not.have.attr("hidden");
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
            clock.tick(7000);
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
        expect(component.getByRole("dialog", { hidden: true })).to.have.attr(
            "hidden",
        );
    });
});
