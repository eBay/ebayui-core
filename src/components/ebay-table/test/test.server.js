import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../table.stories"; // import all stories from the stories file

const { Default, Dense, Relaxed } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("ebay-table", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders dense density", async () => {
        await htmlSnap(Dense);
    });

    it("renders relaxed density", async () => {
        await htmlSnap(Relaxed);
    });
});
