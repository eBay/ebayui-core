import { describe, it } from "vitest";

import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";
const htmlSnap = snapshotHTML(__dirname);

describe("tabs", () => {
    it("renders basic version with 3 tabs and 3 panels", async () => {
        const input = mock.basic3Headings_3Panels_No_Index;
        await htmlSnap(template, input);
    });

    it("renders basic version with 3 tabs and 3 panels on the second panel", async () => {
        const input = mock.basic3Headings_3Panels_1Index;
        await htmlSnap(template, input);
    });

    testPassThroughAttributes(template);
});

describe("tabs-heading", () => {
    testPassThroughAttributes(template, {
        child: {
            name: "tab",
            multiple: true,
        },
    });
});

describe("tabs-panel", () => {
    testPassThroughAttributes(template, {
        child: {
            name: "panel",
            multiple: true,
        },
    });
});
