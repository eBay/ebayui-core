import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import * as stories from "../lightbox-dialog.stories"; // import all stories from the stories file
const { Default, Scrolling, Expressive, WithPrevButton, WithFooter } =
    composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("dialog", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders with header and footer", async () => {
        await htmlSnap(WithFooter);
    });

    it("renders in open state", async () => {
        await htmlSnap(Default, { open: true });
    });

    it("renders scrolling dialog", async () => {
        await htmlSnap(Scrolling);
    });

    it("renders with previous button", async () => {
        await htmlSnap(WithPrevButton);
    });

    it("renders expressive version", async () => {
        await htmlSnap(Expressive);
    });

    it("renders size=wide", async () => {
        await htmlSnap(Default, { size: "wide" });
    });

    it("renders size=narrow", async () => {
        await htmlSnap(Default, { size: "narrow" });
    });

    it("renders size=large", async () => {
        await htmlSnap(Default, { size: "large" });
    });

    testPassThroughAttributes(Default);
});
