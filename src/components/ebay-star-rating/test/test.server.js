import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../star-rating.stories";

const { DynamicStars, FixedStars } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("star-rating-select", () => {
    it("renders defaults", async () => {
        await htmlSnap(DynamicStars);
    });

    it("renders basic fieldset", async () => {
        await htmlSnap(FixedStars);
    });

    it("renders with 0 selected", async () => {
        await htmlSnap(DynamicStars, { value: 0, a11yText: "star rating" });
    });

    it("renders with 2 selected", async () => {
        await htmlSnap(DynamicStars, { value: 2, a11yText: "star rating" });
    });

    it("renders with 5 selected", async () => {
        await htmlSnap(DynamicStars, { value: 5 });
    });
});
