import { use } from "chai";
import { composeStories } from "@storybook/marko/dist/testing";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../segmented-buttons.stories"; // import all stories from the stories file

const { Default, WithIcons } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("ebay-segmented-button", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });

    it("renders with menu items", async () => {
        await htmlSnap(WithIcons);
    });
});
