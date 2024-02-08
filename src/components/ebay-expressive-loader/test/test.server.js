import { use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../expressive-loader.stories";

const htmlSnap = snapshotHTML(__dirname);
const { Default, CustomAccessibleName, WithMessages } = composeStories(stories);

use(chaiDom);

describe("expressive-loader", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });
    it("renders custom accessible name", async () => {
        await htmlSnap(CustomAccessibleName);
    });
    it("renders nothing when isLoading is false", async () => {
        await htmlSnap({ ...WithMessages, isLoading: false });
    });
});
