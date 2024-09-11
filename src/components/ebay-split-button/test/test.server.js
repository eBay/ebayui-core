import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../split-button.stories"; // import all stories from the stories file

const { Standard } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

const properties = {
    priority: ["primary", "secondary", "delete"],
    size: ["large"],
};

Object.keys(properties).forEach((property) => {
    const values = properties[property];
    values.forEach((value) => {
        it(`renders button with ${property}=${value}`, async () => {
            await htmlSnap(Standard, { [property]: value });
        });
    });
});

it("renders defaults", async () => {
    await htmlSnap(Standard);
});

it("renders with menu items", async () => {
    await htmlSnap(Standard);
});

it("renders loading state", async () => {
    await htmlSnap(Standard, {
        a11yButtonLoadingText: "button loading",
        bodyState: "loading",
    });
});

it("renders various options", async () => {
    await htmlSnap(Standard, {
        disabled: true,
        size: "large",
        type: "radio",
    });
});
