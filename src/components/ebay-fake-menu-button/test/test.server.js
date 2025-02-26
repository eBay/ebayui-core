import { describe, it } from "vitest";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as testUtils from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

const htmlSnap = snapshotHTML(__dirname);

describe("menu-button", () => {
    it("renders basic version", async () => {
        const input = mock.basic2Items;
        await htmlSnap(template, input);
    });

    it("renders with reverse=true", async () => {
        const input = Object.assign({ reverse: true }, mock.basic2Items);
        await htmlSnap(template, input);
    });

    it("renders with fixed strategy", async () => {
        const input = Object.assign({ strategy: "fixed" }, mock.basic2Items);
        await htmlSnap(template, input);
    });

    it("renders with fix-width=true", async () => {
        const input = Object.assign({ fixWidth: true }, mock.basic2Items);
        await htmlSnap(template, input);
    });

    it("renders with borderless=true", async () => {
        const input = Object.assign({ borderless: true }, mock.basic2Items);
        await htmlSnap(template, input);
    });

    it("renders with size=small", async () => {
        const input = Object.assign({ size: "small" }, mock.basic2Items);
        await htmlSnap(template, input);
    });

    it("renders with icon", async () => {
        const input = mock.Settings_Icon;
        await htmlSnap(template, input);
    });

    it("renders without toggle icon", async () => {
        const input = mock.No_Toggle_Icon;
        await htmlSnap(template, input);
    });

    it("renders with disabled state", async () => {
        const input = mock.Disabled;
        await htmlSnap(template, input);
    });

    it("renders with a custom label", async () => {
        const input = mock.Custom_Label;
        await htmlSnap(template, input);
    });

    it("renders with overflow variant", async () => {
        const input = mock.Overflow_Variant;
        await htmlSnap(template, input);
    });

    it("renders with button variant", async () => {
        const input = mock.Button_Variant;
        await htmlSnap(template, input);
    });

    it("renders with separators", async () => {
        const input = mock.separator4Items;
        await htmlSnap(template, input);
    });

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            input: {
                type: "button",
            },
            name: "item",
            multiple: true,
        },
    });
});
