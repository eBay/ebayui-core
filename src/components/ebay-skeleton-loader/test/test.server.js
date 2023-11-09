import { use } from "chai";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../skeleton-loader.stories";

const { Default, Avatar, Tile, Text, TextMultiLine } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("skeleton-loader", () => {
    it("renders default skeleton", async () => {
        await htmlSnap(Default);
    });

    it("renders avatar", async () => {
        await htmlSnap(Avatar);
    });

    it("renders tile", async () => {
        await htmlSnap(Tile);
    });

    it("renders text", async () => {
        await htmlSnap(Text);
    });

    it("renders text multiLine", async () => {
        await htmlSnap(TextMultiLine);
    });
});
