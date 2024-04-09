import { use } from "chai";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../chips-combobox.stories"; // import all stories from the stories file
const { Default, Selected } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("ebay-chips-combobox", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with chips already selected", async () => {
        await htmlSnap(Selected);
    });
});
