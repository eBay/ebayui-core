import { use } from "chai";
import { composeStories } from "@storybook/marko/dist/testing";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../chip.stories"; // import all stories from the stories file
const { Standard, WithDelete } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

it("renders default chip component", async () => {
    await htmlSnap(Standard);
});

it("renders with close icon when label is present", async () => {
    await htmlSnap(WithDelete);
});
