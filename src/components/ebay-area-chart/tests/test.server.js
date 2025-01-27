import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../area-chart.stories";

const { Standard, TwoSeries, FiveSeries, WithXLabelFormat, NonSpline } =
    composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("section-title", () => {
    it("renders defaults", async () => {
        await htmlSnap(Standard);
    });

    it("renders with two series", async () => {
        await htmlSnap(TwoSeries);
    });

    it("renders with five series", async () => {
        await htmlSnap(FiveSeries);
    });

    it("renders with x-axis label format", async () => {
        await htmlSnap(WithXLabelFormat);
    });

    it("renders with non-spline param", async () => {
        await htmlSnap(NonSpline);
    });
});
