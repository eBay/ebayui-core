import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, waitFor, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../confirm-dialog.stories"; // import all stories from the stories file
import { addRenderBodies } from "../../../common/storybook/utils";
const { Default } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a closed dialog", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    it("then it is hidden in the DOM", () => {
        expect(component.getByRole("dialog", { hidden: true })).toHaveAttribute(
            "hidden",
        );
    });

    describe("then it is opened", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    open: true,
                }),
            );
        });

        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(component.emitted("open")).has.length(1),
            );
        });
    });
});

describe("given an open dialog", () => {
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("button"));
        sibling.focus();
        component = await render(Default, { open: true });
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it("then it is visible in the DOM", () => {
        expect(component.getByRole("dialog")).not.toHaveAttribute("hidden");
    });

    describe("when the mask is clicked", () => {
        beforeEach(async () => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole("dialog"));
        });

        it("then it is still open in the DOM", async () => {
            await waitFor(() =>
                expect(component.getByRole("dialog")).not.toHaveAttribute(
                    "hidden",
                ),
            );
        });
    });
});
