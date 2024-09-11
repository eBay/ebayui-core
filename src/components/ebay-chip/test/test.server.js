import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../chip.stories"; // import all stories from the stories file
const { Default, WithDelete } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-chip", () => {
    it("renders static default", async () => {
        await htmlSnap(Default);
    });

    it("renders interactive close button when label is provided", async () => {
        await htmlSnap(WithDelete);
    });
});
