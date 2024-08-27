import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../snackbar-dialog.stories"; // import all stories from the stories file
const { Default, WithAction } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("snackbar-dialog", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders without handle ", async () => {
        await htmlSnap(Default, { layout: "column" });
    });

    it("renders in open state", async () => {
        await htmlSnap(Default, { open: true });
    });

    it("renders with action version", async () => {
        await htmlSnap(WithAction);
    });

    testPassThroughAttributes(Default);
});
