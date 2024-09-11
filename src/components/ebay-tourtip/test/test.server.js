import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../tourtip.stories";

const { Standard, withFooter } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("tourtip", () => {
    it("renders default tourtip", async () => {
        await htmlSnap(Standard);
    });
    it("renders tourtip closed", async () => {
        await htmlSnap(Standard, { open: false });
    });
    it("renders with footer", async () => {
        await htmlSnap(withFooter);
    });
});
