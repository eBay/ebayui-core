import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { render, cleanup } from "@marko/testing-library";
import * as stories from "../expressive-loader.stories";
const { Default, CustomAccessibleName, WithMessages } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("expressive-loader", () => {
    describe("given a default loader", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("renders a progress bar with 'Loading...' accessible name", () => {
            expect(component.getByRole("progressbar")).to.have.attr(
                "aria-label",
                "Loading...",
            );
        });
    });

    describe("given a loader with a custom ariaLabel", () => {
        beforeEach(async () => {
            component = await render(CustomAccessibleName);
        });

        it("the progress bar has that accessible name", () => {
            expect(component.getByRole("progressbar")).to.have.attr(
                "aria-label",
                CustomAccessibleName.args.ariaLabel,
            );
        });
    });

    describe("given a loader without an isLoading prop", () => {
        beforeEach(async () => {
            component = await render(WithMessages);
        });

        it("the progress bar is rendered", () => {
            expect(component.getAllByRole("progressbar")).to.have.length(1);
        });

        describe("when it is rerendered with isLoading true", () => {
            beforeEach(async () => {
                await component.rerender(
                    Object.assign({}, stories.WithMessages.args, {
                        isLoading: true,
                    }),
                );
            });

            it("the progress bar is still rendered", async () => {
                expect(component.getAllByRole("progressbar")).to.have.length(1);
            });
        });

        describe("when it is rerendered with isLoading false", () => {
            beforeEach(async () => {
                await component.rerender(
                    Object.assign({}, stories.WithMessages.args, {
                        isLoading: false,
                    }),
                );
            });

            it("does not show a progress bar", async () => {
                expect(component.queryByRole("progressbar")).to.equal(null);
            });
        });
    });

    describe("given a loader with messages", () => {
        const timeout = (resolve) => setTimeout(resolve, 2400);

        beforeEach(async () => {
            component = await render(WithMessages);
        });

        it("cycles through messages", async () => {
            const statusEl = component.getByRole("status");
            const messages = WithMessages.args.messages;
            // go through all messages once and loop back to first one
            for (let i = 0; i <= messages.length; i++) {
                const message = messages[i % messages.length];
                await new Promise(timeout);
                expect(statusEl).to.have.text(message.text);
            }
        });

        it("the progress bar is describedby the current message", async () => {
            const statusId = component.getByRole("status").id;
            expect(component.getByRole("progressbar")).to.have.attr(
                "aria-describedby",
                statusId,
            );
        });
    });
});
