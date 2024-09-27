import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../phone-input.stories";

const { Default, Localization } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("ebay-phone-input", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });

    it("renders invalid", async () => {
        await htmlSnap(Default, { invalid: true });
    });

    it("renders readonly", async () => {
        await htmlSnap(Default, { readonly: true });
    });

    it("renders prefilled", async () => {
        await htmlSnap(Default, { countryCode: "US", value: "408123456" });
    });

    it("renders with floating label", async () => {
        await htmlSnap(Default, { floatingLabel: "Floating label" });
    });

    it("renders disabled", async () => {
        await htmlSnap(Default, { disabled: true });
    });

    it("renders localized version", async () => {
        await htmlSnap(Localization);
    });
});
