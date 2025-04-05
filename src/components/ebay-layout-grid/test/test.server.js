import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../layout-button.stories"; // import all stories from the stories file

const { Default, WithCustomColumns } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-layout-grid", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with custom columns", async () => {
        await htmlSnap(WithCustomColumns);
    });
});
