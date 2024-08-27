import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../image-placeholder.stories"; // import all stories from the stories file

const { Default, Resized } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("image-placeholder", () => {
    it("renders default image placeholder", async () => {
        await htmlSnap(Default);
    });

    it("renders resized image placeholder", async () => {
        await htmlSnap(Resized);
    });
});
