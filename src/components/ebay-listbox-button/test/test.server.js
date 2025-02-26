import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../listbox-button.stories";

const { Default, withDescription, withError } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("listbox", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders fluid layout", async () => {
        await htmlSnap(Default, { fluid: true });
    });

    it("renders truncated layout", async () => {
        await htmlSnap(Default, { truncate: true });
    });

    it("renders with strategy=fixed", async () => {
        await htmlSnap(Default, { strategy: "fixed" });
    });

    it("renders with second item selected", async () => {
        await htmlSnap(Default, { selected: 1 });
    });

    it("renders with prefix label", async () => {
        await htmlSnap(Default, { prefixLabel: "Selected: " });
    });

    it("renders with prefix id", async () => {
        await htmlSnap(Default, { prefixId: "prefixId" });
    });

    it("renders with floating label", async () => {
        await htmlSnap(Default, { floatingLabel: "floating label" });
    });

    it("renders with form", async () => {
        await htmlSnap(Default, { variant: "form" });
    });

    it("renders with description", async () => {
        await htmlSnap(withDescription);
    });

    it("renders with error", async () => {
        await htmlSnap(withError);
    });
});
