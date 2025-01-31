import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../3d-viewer.stories";

const { Default } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("3d-viewer", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });
});
