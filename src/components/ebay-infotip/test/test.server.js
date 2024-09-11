import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../infotip.stories";

const { Default, OpenOnRender } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("infotip", () => {
    it("renders default infotip", async () => {
        await htmlSnap(Default);
    });
    it("renders default infotip open", async () => {
        await htmlSnap(OpenOnRender);
    });

    it("renders default infotip disabled", async () => {
        await htmlSnap(Default, { disabled: true });
    });
});

describe("infotip modal", () => {
    it("renders default", async () => {
        await htmlSnap(Default, { variant: "modal" });
    });
});
