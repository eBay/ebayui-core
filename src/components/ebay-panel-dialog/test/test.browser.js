import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { render, fireEvent, waitFor, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { addRenderBodies } from "../../../../.storybook/utils";
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../panel-dialog.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

use(chaiDom);
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("ebay-panel-dialog", () => {
    describe("given a closed dialog", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("then it is hidden in the DOM", () => {
            expect(component.getByRole("dialog", { hidden: true })).has.attr(
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
            sibling = document.body.appendChild(
                document.createElement("button"),
            );
            sibling.focus();
            component = await render(Default, { open: true });
        });

        afterEach(() => {
            document.body.removeChild(sibling);
        });

        it("then it is visible in the DOM", () => {
            expect(component.getByRole("dialog")).does.not.have.attr("hidden");
        });

        describe("when the close button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText("Close Panel"));
            });

            thenItIsClosed();
        });

        describe("when the mask is clicked", () => {
            beforeEach(async () => {
                // simulate clicking outside the dialog.
                await fireEvent.click(component.getByRole("dialog"));
            });

            thenItIsClosed();
        });

        function thenItIsClosed() {
            it("then it is hidden in the DOM", async () => {
                await waitFor(() =>
                    expect(
                        component.getByRole("dialog", { hidden: true }),
                    ).has.attr("hidden"),
                );
            });

            it("then it restores the previous focus", async () => {
                await waitFor(() =>
                    expect(component.emitted("close")).has.length(1),
                );
            });
        }
    });
});
