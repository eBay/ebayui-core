import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../confirm-dialog.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("dialog", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders in open state", async () => {
        await htmlSnap(Default, { open: true });
    });

    it("renders with custom close/open", async () => {
        await htmlSnap(Default, {
            confirmText: "Custom confirm",
            rejectText: "Custom reject",
        });
    });

    it("renders with destructive CTA", async () => {
        await htmlSnap(Default, { confirmCtaVariant: "destructive" });
    });

    testPassThroughAttributes(Default);
});
