import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../item-tile-group.stories"; // import all stories from the stories file

const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-item-tile-group", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with layout=list", async () => {
        await htmlSnap(Default, { layout: "list" });
    });
});
