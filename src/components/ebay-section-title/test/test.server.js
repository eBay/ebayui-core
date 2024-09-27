import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../section-title.stories"; // import all stories from the stories file

const { Standard, iconAndSeeAll, withOverflow } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("section-title", () => {
    it("renders defaults", async () => {
        await htmlSnap(Standard);
    });

    it("renders with cta custom text", async () => {
        await htmlSnap(Standard, {
            href: "www.ebay.com",
            ctaText: "Custom Text",
        });
    });

    it("renders with no subtitle", async () => {
        await htmlSnap(Standard, { subtitle: null });
    });

    it("renders icon and see all", async () => {
        await htmlSnap(iconAndSeeAll);
    });

    it("renders icon and see all and no subtitle", async () => {
        await htmlSnap(iconAndSeeAll, { subtitle: null });
    });

    it("renders with overflow", async () => {
        await htmlSnap(withOverflow);
    });

    it("renders with overflow and no subtitle", async () => {
        await htmlSnap(withOverflow, { subtitle: null });
    });
});
