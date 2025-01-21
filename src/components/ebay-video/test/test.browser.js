import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../video.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component;

describe("video", () => {
    beforeEach(async () => {
        component = await render(Default, { "aria-label": "video" });
    });
    // Shaka is not supported by headless chrome, and will throw 4032 error.
    // This however, means that the player has loaded correctly
    describe("renders default", () => {
        it("should render", async () => {
            await waitFor(
                () => {
                    const data = component.emitted("load-error");
                    expect(data).to.have.length(1);
                    expect(data[0][0]).toHaveProperty(
                        "message",
                        "Shaka Error 4032",
                    );
                },
                { timeout: 5000 },
            );
        });
    });
});
