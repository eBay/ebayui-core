import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../list.stories";

const { Static, Interactive, WithSeparator } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

it("renders static list", async () => {
    await htmlSnap(Static);
});

it("renders interactive list", async () => {
    await htmlSnap(Interactive);
});

it("renders with separator element", async () => {
    await htmlSnap(WithSeparator);
});
