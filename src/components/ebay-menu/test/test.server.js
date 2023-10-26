import { use } from "chai";
import { composeStories } from "@storybook/marko";
import * as testUtils from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../menu.stories"; // import all stories from the stories file

const { Default, Typeahead, Badged, Sprites, Separator } =
    composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("menu", () => {
    it("renders basic version", async () => {
        await htmlSnap(Default);
    });

    it("renders with reverse=true", async () => {
        await htmlSnap(Default, { reverse: true });
    });

    it("renders with fix-width=true", async () => {
        await htmlSnap(Default, { fixWidth: true });
    });

    it("renders with separators", async () => {
        await htmlSnap(Separator);
    });

    it("renders with typeahead", async () => {
        await htmlSnap(Typeahead);
    });

    it("renders with badged version", async () => {
        await htmlSnap(Badged);
    });
    it("renders with sprites version", async () => {
        await htmlSnap(Sprites);
    });

    ["radio", "checkbox"].forEach((type) => {
        [true, false].forEach((checked) => {
            it(`renders with type=${type} and checked=${checked}`, async () => {
                await htmlSnap(Default, { type, items: [{ checked }] });
            });
        });
    });

    testUtils.testPassThroughAttributes(Default);
    testUtils.testPassThroughAttributes(Default, {
        child: {
            name: "items",
            multiple: true,
        },
    });
});
