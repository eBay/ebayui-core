import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { createRenderBody } from "../../../common/test-utils/shared";
import * as stories from "../combobox.stories";

const { Isolated, FloatingLabel } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("combobox", () => {
    it("renders basic version", async () => {
        await htmlSnap(Isolated);
    });

    it("renders empty", async () => {
        await htmlSnap(Isolated, { option: [] });
    });

    it("renders with fixed strategy", async () => {
        await htmlSnap(Isolated, { strategy: "fixed" });
    });

    it("renders with second item selected", async () => {
        await htmlSnap(Isolated, { value: Isolated.args.option[2].text });
    });

    it("renders with borderless enabled", async () => {
        await htmlSnap(Isolated, { borderless: true });
    });

    it("renders with actionable button", async () => {
        await htmlSnap(Isolated, {
            button: {
                renderBody: createRenderBody("button"),
            },
        });
    });

    it("renders with default actionable button", async () => {
        await htmlSnap(Isolated, {
            button: {
                ariaLabel: "Actionable Button",
            },
        });
    });

    it("renders with floating label", async () => {
        await htmlSnap(FloatingLabel);
    });

    testPassThroughAttributes(Isolated, {
        input: Isolated.args,
        getClassAndStyleEl(component) {
            return component.container.firstElementChild;
        },
    });
});

describe("combobox-option", () => {
    testPassThroughAttributes(Isolated, {
        child: {
            name: "option",
            input: {
                text: "test",
                value: "value",
            },
            multiple: true,
        },
    });
});
