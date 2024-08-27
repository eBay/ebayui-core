import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../progress-bar-expressive.stories";

const { Default, MediumSize, WithMessages, Localized } =
    composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("progress-bar-expressive", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders message container", async () => {
        await htmlSnap(WithMessages);
    });

    it("renders custom accessible name", async () => {
        await htmlSnap(Localized);
    });

    it("renders medium text", async () => {
        await htmlSnap(MediumSize);
    });
});
