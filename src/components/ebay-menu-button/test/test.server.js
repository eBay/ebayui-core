import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import * as testUtils from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../menu-button.stories"; // import all stories from the stories file

const { Default, Typeahead, Badged, Separator, IconText, PrefixLabel } =
    composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("menu-button", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders with reverse=true", async () => {
        await htmlSnap(Default, { reverse: true });
    });

    it("renders with fix-width=true", async () => {
        await htmlSnap(Default, { fixWidth: true });
    });

    it("renders with fixed strategy", async () => {
        await htmlSnap(Default, { strategy: "fixed" });
    });

    it("renders with borderless=true", async () => {
        await htmlSnap(Default, { borderless: true });
    });

    it("renders with size=small", async () => {
        await htmlSnap(Default, { size: "small" });
    });

    it("renders with icon", async () => {
        await htmlSnap(IconText);
    });

    it("renders without toggle icon", async () => {
        await htmlSnap(Default, { noToggleIcon: true });
    });

    it("renders with disabled state", async () => {
        await htmlSnap(Default, { disabled: true });
    });

    it("renders with a badge", async () => {
        await htmlSnap(Badged);
    });

    it("renders with typeahead", async () => {
        await htmlSnap(Typeahead);
    });

    it("renders with overflow variant", async () => {
        await htmlSnap(Default, { text: "", variant: "overflow" });
    });

    it("renders with button variant", async () => {
        await htmlSnap(Default, { text: "Button", variant: "button" });
    });

    it("renders with separators", async () => {
        await htmlSnap(Separator);
    });

    it("renders with prefix label", async () => {
        await htmlSnap(PrefixLabel);
    });

    ["radio", "checkbox"].forEach((type) => {
        [true, false].forEach((checked) => {
            it(`renders with type=${type} and checked=${checked}`, async () => {
                await htmlSnap(Default, { type, item: [{ checked }] });
            });
        });
    });

    testUtils.testPassThroughAttributes(Default);
    testUtils.testPassThroughAttributes(Default, {
        child: {
            name: "item",
            multiple: true,
        },
    });
});
