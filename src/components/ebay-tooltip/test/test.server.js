import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../tooltip.stories";

const { Standard, buttonHost } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("tooltip", () => {
    it("renders default tooltip", async () => {
        await htmlSnap(Standard);
    });
    it("renders tooltip closed", async () => {
        await htmlSnap(Standard, { open: false });
    });
    it("renders tooltip with button host", async () => {
        await htmlSnap(buttonHost);
    });
});
