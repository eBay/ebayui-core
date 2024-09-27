import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../star-rating-select.stories";

const { Isolated, Fieldset } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("star-rating-select", () => {
    it("renders defaults", async () => {
        await htmlSnap(Isolated, {
            a11yText: undefined,
            a11yStarText: undefined,
        });
    });

    it("renders basic fieldset", async () => {
        await htmlSnap(Fieldset);
    });

    it("renders with 0 selected", async () => {
        await htmlSnap(Isolated, { value: 0 });
    });

    it("renders with 2 selected", async () => {
        await htmlSnap(Isolated, { value: 2 });
    });

    it("renders with 5 selected", async () => {
        await htmlSnap(Isolated, { value: 5 });
    });
});
