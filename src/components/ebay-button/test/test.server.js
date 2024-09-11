import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../button.stories"; // import all stories from the stories file
const { Standard, ExpandButton } = composeStories(stories);
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

[false, true].forEach((fluid) => {
    it(`renders button with fluid=${fluid}`, async () => {
        await htmlSnap(Standard, { fluid });
    });
});

it("renders defaults", async () => {
    await htmlSnap(Standard);
});

it("renders with id override", async () => {
    await htmlSnap(Standard, { id: "test" });
});

it("renders with type override", async () => {
    await htmlSnap(Standard, { type: "submit" });
});

it("does not apply priority class for unsupported value", async () => {
    await htmlSnap(Standard, { priority: "none" });
});

it("renders fake version", async () => {
    await htmlSnap(Standard, {
        href: "#",
        size: "large",
        priority: "primary",
        ariaLabel: "fake button",
    });
});

it("renders disabled version", async () => {
    await htmlSnap(Standard, { disabled: true });
});

it("renders partially disabled version", async () => {
    await htmlSnap(Standard, { partiallyDisabled: true });
});

it("renders truncated button", async () => {
    await htmlSnap(Standard, {
        truncate: true,
    });
});

it("renders small button", async () => {
    await htmlSnap(Standard, {
        size: "small",
    });
});

it("renders large truncated button", async () => {
    await htmlSnap(Standard, {
        truncate: true,
        size: "large",
    });
});

it("renders fixed-height button", async () => {
    await htmlSnap(Standard, {
        fixedHeight: true,
    });
});

it("renders large fixed-height button", async () => {
    await htmlSnap(Standard, {
        fixedHeight: true,
        size: "large",
    });
});

it("renders a11yText when bodyState === loading", async () => {
    await htmlSnap(Standard, {
        priority: "primary",
        a11yText: "loading text",
        bodyState: "loading",
    });
});

it("renders expanded button", async () => {
    await htmlSnap(ExpandButton);
});
