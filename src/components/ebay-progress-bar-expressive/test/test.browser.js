import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup } from "@marko/testing-library";
import * as stories from "../progress-bar-expressive.stories";
import { messageFadeInDuration } from "../component";
const { WithCustomTiming } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("progress-bar-expressive", () => {
    describe("given an expressive progress bar with messages", () => {
        describe("when messages have custom durations", () => {
            beforeEach(async () => {
                vi.useFakeTimers();
                component = await render(WithCustomTiming, { size: "medium" });
            });

            afterEach(async () => {
                vi.useRealTimers();
            });

            it("then displays each message for the specified duration", async () => {
                const statusEl = component.getByRole("status");
                const messages = WithCustomTiming.args.message;

                // go through all messages once and loop back to first one
                for (let i = 0; i <= messages.length; i++) {
                    await vi.advanceTimersByTimeAsync(1);
                    const message = messages[i % messages.length];
                    expect(statusEl).toHaveTextContent(message.renderBody);
                    vi.advanceTimersByTime(
                        message.duration + messageFadeInDuration,
                    );
                }
            });
        });
    });
});
