import { use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../progress-bar-expressive.stories";

const htmlSnap = snapshotHTML(__dirname);
const { Default, Localized, WithMessages } = composeStories(stories);

use(chaiDom);

describe("progress-bar-expressive", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with custom accessible name", async () => {
        await htmlSnap(Localized);
    });

    it("renders nothing when isLoading is false", async () => {
        await htmlSnap({ ...WithMessages, isLoading: false });
    });
});
