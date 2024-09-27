import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../donut-chart.stories";

const { Standard, TwoValues, FiveValues, NoMetrics } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("section-title", () => {
    it("renders defaults", async () => {
        await htmlSnap(Standard);
    });

    it("renders with two values", async () => {
        await htmlSnap(TwoValues);
    });

    it("renders with five values", async () => {
        await htmlSnap(FiveValues);
    });

    it("renders with no metrics", async () => {
        await htmlSnap(NoMetrics);
    });
});
