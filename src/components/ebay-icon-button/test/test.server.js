import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../icon-button.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

const properties = {
    priority: ["primary", "secondary", "delete"],
    size: ["large", "small"],
};

describe("ebay-icon-button", () => {
    it("Renders defaults", async () => {
        await htmlSnap(Default);
    });

    Object.keys(properties).forEach((property) => {
        const values = properties[property];
        values.forEach((value) => {
            it(`renders button with ${property}=${value}`, async () => {
                await htmlSnap(Default, { [property]: value });
            });
        });
    });
    it("renders fake version", async () => {
        await htmlSnap(Default, {
            href: "#",
            ariaLabel: "fake button",
        });
    });

    it("renders disabled version", async () => {
        await htmlSnap(Default, {
            disabled: true,
        });
    });

    it("renders partially disabled version", async () => {
        await htmlSnap(Default, {
            partiallyDisabled: true,
        });
    });

    it("renders icon", async () => {
        await htmlSnap(Default, {
            ariaLabel: "icon button",
        });
    });

    it("renders badged icon variant", async () => {
        await htmlSnap(Default, {
            badgeNumber: 5,
            badgeAriaLabel: "5 Items",
            ariaLabel: "Badged button",
        });
    });
    testPassThroughAttributes(Default);
});
