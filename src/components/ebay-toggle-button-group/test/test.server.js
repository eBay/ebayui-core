import { use } from "chai";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../toggle-button-group.stories";

const { Default, WithIcons, WithDefaultSelected, Controlled } =
    composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("ebay-toggle-button-group", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with ons", async () => {
        await htmlSnap(WithIcons);
    });

    it("renders with default selected", async () => {
        await htmlSnap(WithDefaultSelected);
    });

    it("renders controlled", async () => {
        await htmlSnap(Controlled);
    });
});
