import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../table.stories"; // import all stories from the stories file

const htmlSnap = snapshotHTML(__dirname);
const { Default, ColumnSorting, ColumnSortingClientSide } =
    composeStories(stories);

describe("ebay-table", () => {
    for (const [name, story] of Object.entries(composeStories(stories))) {
        it(`renders ${name}`, async () => {
            await htmlSnap(story);
        });
    }

    it("renders with loading state", async () => {
        await htmlSnap(Default, { bodyState: "loading" });
    });

    it("renders with anchors loading", async () => {
        await htmlSnap(ColumnSorting, { bodyState: "loading" });
    });

    it("renders with columns client side loading", async () => {
        await htmlSnap(ColumnSortingClientSide, { bodyState: "loading" });
    });
});
