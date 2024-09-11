import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../flag.stories";

const { Default } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("flag", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });
});
