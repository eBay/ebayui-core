import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../drawer-dialog.stories"; // import all stories from the stories file
const { Standard, WithFooter } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("drawer-dialog", () => {
    it("renders basic version", async () => {
        await htmlSnap(Standard);
    });

    it("renders without handle ", async () => {
        await htmlSnap(Standard, { noHandle: true });
    });

    it("renders with text close", async () => {
        await htmlSnap(Standard, { closeButtonText: "Close dialog" });
    });

    it("renders in open state", async () => {
        await htmlSnap(Standard, { open: true });
    });

    it("renders with footer version", async () => {
        await htmlSnap(WithFooter);
    });

    it("renders in expanded state", async () => {
        await htmlSnap(Standard, { expanded: true, open: true });
    });

    testPassThroughAttributes(Standard);
});
