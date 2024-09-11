import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../fullsceen-dialog.stories"; // import all stories from the stories file

const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

it("renders defaults", async () => {
    await htmlSnap(Default);
});

it("renders without footer and header", async () => {
    await htmlSnap(Default, { header: null, footer: null });
});

it("renders open", async () => {
    await htmlSnap(Default, { open: true });
});

it("renders slide end", async () => {
    await htmlSnap(Default, { slideFrom: "end" });
});
