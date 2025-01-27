import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../accordion.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("accordion", () => {
    it("renders default accordion", async () => {
        await htmlSnap(Default);
    });

    it("renders accordion with large size", async () => {
        await htmlSnap(Default, { size: "large" });
    });

    it("renders accordion with auto-collapse true", async () => {
        await htmlSnap(Default, { autoCollapse: true });
    });

    it("renders accordion with localized role description", async () => {
        await htmlSnap(Default, {
            a11yRoleDescription: "Akkordeon",
        });
    });
});
