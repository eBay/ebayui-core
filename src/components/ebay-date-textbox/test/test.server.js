import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../date-textbox.stories"; // import all stories from the stories file

const { Default, Localized, WithClear } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

// We are setting the default date because it initializes to todays date which will fail the snapshot test
describe("date-textbox", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default, { value: "01/27/2024" });
    });

    it("renders with floating label", async () => {
        await htmlSnap(Default, {
            floatingLabel: "Floating label",
            value: "01/27/2024",
        });
    });

    it("renders with floating label array without ranged", async () => {
        await htmlSnap(Default, {
            value: "01/27/2024",
            floatingLabel: ["Floating label", "Floating Label 2"],
        });
    });

    it("renders with floating label array with ranged", async () => {
        await htmlSnap(Default, {
            value: "01/27/2024",
            ranged: true,
            floatingLabel: ["Floating label", "Floating Label 2"],
        });
    });

    it("renders with placeholder", async () => {
        await htmlSnap(Default, {
            inputPlaceholderText: "placeholder",
            value: "01/27/2024",
        });
    });

    it("renders with placeholder array without ranged", async () => {
        await htmlSnap(Default, {
            value: "01/27/2024",
            inputPlaceholderText: ["placeholder", "placeholder 2"],
        });
    });

    it("renders with placeholder array with ranged", async () => {
        await htmlSnap(Default, {
            ranged: true,
            value: "01/27/2024",
            inputPlaceholderText: ["placeholder", "placeholder 2"],
        });
    });

    it("renders localized", async () => {
        await htmlSnap(Localized, {
            value: "01/27/2024",
            disableBefore: "01/01/2024",
        });
    });

    it("renders with clear", async () => {
        await htmlSnap(WithClear, { value: "01/27/2024" });
    });
    it("renders with custom today", async () => {
        await htmlSnap(Default, { todayISO: "01/27/2024" });
    });
});
