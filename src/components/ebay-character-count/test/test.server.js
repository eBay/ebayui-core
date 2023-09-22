import { use } from "chai";
import { composeStories } from "@storybook/marko/dist/testing";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../character-count.stories"; // import all stories from the stories file
const { Default, InField } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("character-count", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });
    it("renders in field", async () => {
        await htmlSnap(InField);
    });
});
