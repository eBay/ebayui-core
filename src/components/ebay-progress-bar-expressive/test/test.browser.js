import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../progress-bar-expressive.stories";
const { Default, Localized, WithMessages } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("progress-bar-expressive", () => {
    describe("given a default expressive progress bar", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("renders a progress bar with 'Loading...' accessible name", () => {
            expect(component.getByLabelText("Loading...")).to.equal(
                component.getByRole("progressbar"),
            );
        });
    });

    describe("given an expressive progress bar with custom a11yText", () => {
        beforeEach(async () => {
            component = await render(Localized);
        });

        it("the progress bar uses that a11yText as its accessible name", () => {
            expect(component.getByLabelText(Localized.args.a11yText)).to.equal(
                component.getByRole("progressbar"),
            );
        });
    });

    describe("given an expressive progress bar without an isLoading prop", () => {
        beforeEach(async () => {
            component = await render(WithMessages);
        });

        it("content is rendered", () => {
            expect(component.getAllByRole("status")).to.have.length(1);
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

            it("content is rendered", async () => {
                expect(component.getAllByRole("status")).to.have.length(1);
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

            it("no content is rendered", async () => {
                expect(component.queryByRole("status")).to.equal(null);
                expect(component.queryByRole("progressbar")).to.equal(null);
            });
        });
    });

    describe("given an expressive progress bar with messages", () => {
        beforeEach(async () => {
            component = await render(WithMessages);
        });

        it("the progress bar is described by the current message", async () => {
            const statusId = component.getByRole("status").id;
            expect(component.getByRole("progressbar")).to.have.attr(
                "aria-describedby",
                statusId,
            );
        });

        it("cycles through messages", async () => {
            const statusEl = component.getByRole("status");
            const messages = WithMessages.args.messages;

            // go through all messages once and loop back to first one
            for (let i = 0; i <= messages.length; i++) {
                const message = messages[i % messages.length];
                await waitFor(
                    () => {
                        expect(statusEl).to.have.text(message.text);
                    },
                    { timeout: 4000 },
                );
            }
        });
    });
});
