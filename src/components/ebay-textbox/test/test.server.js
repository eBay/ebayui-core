import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../textbox.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

const {
    Isolated,
    WithLabel,
    FloatingLabel,
    Disabled,
    PrefixIcon,
    BothIcons,
    PostfixIcon,
} = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("ebay-textbox", () => {
    it("renders default input textbox", async () => {
        await htmlSnap(Isolated);
    });

    it("renders default input textbox with an id", async () => {
        await htmlSnap(Isolated, { id: "textbox-id" });
    });

    it("renders fluid input textbox", async () => {
        await htmlSnap(Isolated, { fluid: true });
    });

    it("renders a disabled input textbox", async () => {
        await htmlSnap(Disabled);
    });

    it("renders a input textbox with invalid/error state", async () => {
        await htmlSnap(Isolated, { invalid: true });
    });

    it("renders a input textbox with external label", async () => {
        await htmlSnap(WithLabel);
    });

    it("renders a textarea element", async () => {
        await htmlSnap(Isolated, { multiline: true });
    });

    it("renders a textarea element with prefix icon", async () => {
        await htmlSnap(PrefixIcon);
    });

    it("renders a textbox element with floating label and without prefix icon", async () => {
        await htmlSnap(PrefixIcon, { floatingLabel: "test label" });
    });

    it("renders a textarea element with postfix icon", async () => {
        await htmlSnap(PostfixIcon);
    });

    it("renders a textarea element with postfix icon button", async () => {
        await htmlSnap(BothIcons);
    });

    it("renders an input textbox with inline floating label", async () => {
        await htmlSnap(FloatingLabel);
    });

    it("renders an input textbox with opaque floating label", async () => {
        await htmlSnap(FloatingLabel, { opaqueLabel: true });
    });

    it("renders an input textbox with inline floating label and an id", async () => {
        await htmlSnap(FloatingLabel, { id: "text-id" });
    });

    it("renders a disabled input textbox with disabled floating label", async () => {
        await htmlSnap(FloatingLabel, { disabled: true });
    });

    testPassThroughAttributes(Isolated, {
        getClassAndStyleEl(component) {
            return component.getByRole("textbox").parentElement;
        },
    });
});
