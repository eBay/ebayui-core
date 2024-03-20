import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../progress-bar-expressive.stories";
const { WithMessages, MediumSize } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("progress-bar-expressive", () => {
    describe("given an expressive progress bar with messages", () => {
        beforeEach(async () => {
            component = await render(WithMessages);
        });

        it("then cycles through all messages", async () => {
            const statusEl = component.getByRole("status");
            const messages = WithMessages.args.messages;

            // go through all messages once and loop back to first one
            for (let i = 0; i <= messages.length; i++) {
                const message = messages[i % messages.length];
                await waitFor(
                    () => {
                        expect(statusEl).to.have.text(message.text);
                    },
                    { timeout: 4000 }, // generous timeout
                );
            }
        });

        describe("when the text is default size", () => {
            it("then shows the first message after a slight delay", async () => {
                const statusEl = component.getByRole("status");
                const text = WithMessages.args.messages[0].text;

                expect(statusEl).not.to.have.text(text);
                await waitFor(
                    () => {
                        expect(statusEl).to.have.text(text);
                    },
                    { timeout: 4000 },
                );
            });
        });

        describe("when the text is medium size", () => {
            beforeEach(async () => {
                component = await render(MediumSize);
            });

            it("then the first message renders immediately", () => {
                expect(component.getByRole("status")).to.have.text(
                    MediumSize.args.messages[0].text,
                );
            });
        });
    });
});
