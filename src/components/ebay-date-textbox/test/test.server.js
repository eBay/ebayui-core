import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../date-textbox.stories"; // import all stories from the stories file

const { Default, Localized, WithClear } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("date-textbox", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });

    it("renders with floating label", async () => {
        await htmlSnap(Default, { floatingLabel: "Floating label" });
    });

    it("renders with floating label array without ranged", async () => {
        await htmlSnap(Default, {
            floatingLabel: ["Floating label", "Floating Label 2"],
        });
    });

    it("renders with floating label array with ranged", async () => {
        await htmlSnap(Default, {
            ranged: true,
            floatingLabel: ["Floating label", "Floating Label 2"],
        });
    });

    it("renders with placeholder", async () => {
        await htmlSnap(Default, { inputPlaceholderText: "placeholder" });
    });

    it("renders with placeholder array without ranged", async () => {
        await htmlSnap(Default, {
            inputPlaceholderText: ["placeholder", "placeholder 2"],
        });
    });

    it("renders with placeholder array with ranged", async () => {
        await htmlSnap(Default, {
            ranged: true,
            inputPlaceholderText: ["placeholder", "placeholder 2"],
        });
    });

    it("renders localized", async () => {
        await htmlSnap(Localized);
    });

    it("renders with clear", async () => {
        await htmlSnap(WithClear);
    });
});
