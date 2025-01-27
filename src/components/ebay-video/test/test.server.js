import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../video.stories";

const { Default, ios, mp4 } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("video", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });
    it("renders ios video player", async () => {
        await htmlSnap(ios);
    });
    it("renders with mp4", async () => {
        await htmlSnap(mp4);
    });
    it("renders with report text", async () => {
        await htmlSnap(Default, { reportText: "This is a report text" });
    });
});
