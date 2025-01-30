import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../listbox.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

const { Standard, withDescription } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);
const option = [...Standard.args.option];

describe("listbox", () => {
    it("renders basic version", async () => {
        await htmlSnap(Standard);
    });

    it("renders empty", async () => {
        await htmlSnap(Standard, { option: [] });
    });

    it("renders with second item selected", async () => {
        option[1] = Object.assign({ selected: true }, option[1]);

        await htmlSnap(Standard, { option });
    });

    it("renders with second item disabled", async () => {
        option[1] = Object.assign({ disabled: true }, option[1]);

        await htmlSnap(Standard, { option });
    });

    it("renders with description", async () => {
        await htmlSnap(withDescription);
    });

    testPassThroughAttributes(Standard);
    testPassThroughAttributes(Standard, {
        child: {
            name: "option",
            multiple: true,
        },
    });
});
