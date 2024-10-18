import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../table.stories"; // import all stories from the stories file

const htmlSnap = snapshotHTML(__dirname);

describe("ebay-table", () => {
    for (const [name, story] of Object.entries(composeStories(stories))) {
        it(`renders ${name}`, async () => {
            await htmlSnap(story);
        });
    }
});
