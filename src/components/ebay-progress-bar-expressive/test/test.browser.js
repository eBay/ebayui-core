import { expect, use } from "chai";
import chaiDom from "chai-dom";
import sinon from "sinon/pkg/sinon";
import { composeStories } from "@storybook/marko";
import { render, cleanup } from "@marko/testing-library";
import * as stories from "../progress-bar-expressive.stories";
import { messageFadeInDuration } from "../component";
const { WithCustomTiming } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("progress-bar-expressive", () => {
    describe("given an expressive progress bar with messages", () => {
        describe("when messages have custom durations", () => {
            let clock;

            beforeEach(async () => {
                clock = sinon.useFakeTimers();
                component = await render(WithCustomTiming, { size: "medium" });
            });

            afterEach(async () => {
                clock.restore();
            });

            it("then displays each message for the specified duration", async () => {
                const statusEl = component.getByRole("status");
                const messages = WithCustomTiming.args.messages;

                // go through all messages once and loop back to first one
                for (let i = 0; i <= messages.length; i++) {
                    await clock.tickAsync(1);
                    const message = messages[i % messages.length];
                    expect(statusEl).to.have.text(message.renderBody);
                    clock.tick(message.duration + messageFadeInDuration);
                }
            });
        });
    });
});
