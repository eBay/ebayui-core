import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../filter-menu-button.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

const { Default, WithFooter } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);
const items = [...Default.args.item];

describe("filter-menu", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders with footer text", async () => {
        await htmlSnap(WithFooter, { footerText: "test text" });
    });

    it("renders with footer text and accessible text", async () => {
        await htmlSnap(Default, {
            footerText: "test text",
            a11yFooterText: "test a11y",
        });
    });

    it("renders with footer", async () => {
        await htmlSnap(WithFooter);
    });

    it(`renders checked item`, async () => {
        items[1] = Object.assign({ checked: true }, items[1]);
        await htmlSnap(Default);
    });

    it(`renders disabled item`, async () => {
        items[1] = Object.assign({ disabled: true }, items[1]);
        await htmlSnap(Default);
    });

    testPassThroughAttributes(Default);
    testPassThroughAttributes(Default, {
        child: {
            name: "item",
            multiple: true,
        },
    });
});
