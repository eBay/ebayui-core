import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../segmented-buttons.stories"; // import all stories from the stories file

const { Default, WithIcons } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-segmented-buttons", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });

    it("renders large", async () => {
        await htmlSnap(Default, { size: "large" });
    });

    it("renders with menu items", async () => {
        await htmlSnap(WithIcons);
    });
});
