import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../listbox.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

const { Standard, withDescription } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);
const options = [...Standard.args.options];

describe("listbox", () => {
    it("renders basic version", async () => {
        await htmlSnap(Standard);
    });

    it("renders empty", async () => {
        await htmlSnap(Standard, { options: [] });
    });

    it("renders with second item selected", async () => {
        options[1] = Object.assign({ selected: true }, options[1]);

        await htmlSnap(Standard, { options });
    });

    it("renders with second item disabled", async () => {
        options[1] = Object.assign({ disabled: true }, options[1]);

        await htmlSnap(Standard, { options });
    });

    it("renders with description", async () => {
        await htmlSnap(withDescription);
    });

    testPassThroughAttributes(Standard);
    testPassThroughAttributes(Standard, {
        child: {
            name: "options",
            multiple: true,
        },
    });
});
