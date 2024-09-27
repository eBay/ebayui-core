import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../education-notice.stories"; // import all stories from the stories file
const { Default, Prominent, ProminentIcon, WithDismiss, WithFooter } =
    composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("education-notice", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });

    it("renders prominent", async () => {
        await htmlSnap(Prominent);
    });

    it("renders prominent icon", async () => {
        await htmlSnap(ProminentIcon);
    });

    it("renders with dismiss", async () => {
        await htmlSnap(WithDismiss);
    });

    it("renders with footer", async () => {
        await htmlSnap(WithFooter);
    });
});
