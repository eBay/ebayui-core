import { describe, it } from "vitest";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../ccd.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ccd", () => {
    it("renders default ccd", async () => {
        await htmlSnap(Default);
    });

    it("renders ccd with charger included", async () => {
        await htmlSnap(Default, { chargerIcon: "included" });
    });

    it("renders ccd with charger not included", async () => {
        await htmlSnap(Default, { chargerIcon: "not-included" });
    });

    it("renders ccd with usbpd included", async () => {
        await htmlSnap(Default, { secondary: "usbpd" });
    });

    it("renders ccd with charger included and usbpd", async () => {
        await htmlSnap(Default, {
            chargerIcon: "included",
            secondary: "usbpd",
        });
    });

    it("renders ccd with custom a11y", async () => {
        await htmlSnap(Default, {
            chargerIcon: "included",
            secondary: "usbpd",
            a11yText: "custom text",
        });
    });

    testPassThroughAttributes(Default);
});
