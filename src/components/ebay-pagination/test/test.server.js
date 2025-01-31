import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../pagination.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { getPaginationItems } from "../../../common/test-utils/shared";

const { Buttons, Links, Interactive } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe("pagination", () => {
    describe("with links", () => {
        it("renders basic version", async () => {
            await htmlSnap(Links);
        });
        it("renders with last page visible", async () => {
            await htmlSnap(Links, { variant: "show-last" });
        });

        it("renders with overflow", async () => {
            await htmlSnap(Links, { variant: "overflow" });
        });

        it("renders empty version", async () => {
            await htmlSnap(Links, { item: getPaginationItems(0, true, 3) });
        });

        it("renders with a selected item", async () => {
            await htmlSnap(Links, { item: getPaginationItems(15, true, 3) });
        });

        it("renders with aria-disabled when navigation is disabled", async () => {
            await htmlSnap(Links, {
                item: getPaginationItems(15, true, 3, true),
            });
        });

        it("renders with aria-disabled when navigation items missing", async () => {
            await htmlSnap(Links, {
                item: getPaginationItems(15, true, 3, true, true),
            });
        });
    });

    describe("with buttons", () => {
        it("renders default button version", async () => {
            await htmlSnap(Buttons);
        });

        it("renders buttons with last page visible", async () => {
            await htmlSnap(Buttons, { variant: "show-last" });
        });

        it("renders default button with overflow", async () => {
            await htmlSnap(Buttons, { variant: "overflow" });
        });

        it("renders empty button version", async () => {
            await htmlSnap(Buttons, { item: getPaginationItems(0, false) });
        });

        it("renders button version", async () => {
            await htmlSnap(Buttons, { item: getPaginationItems(15, false) });
        });

        it("renders button version selected items", async () => {
            await htmlSnap(Buttons, {
                item: getPaginationItems(15, false, 3),
            });
        });
    });
    describe("Interactive", () => {
        it("renders defaults", async () => {
            await htmlSnap(Interactive);
        });
    });

    testPassThroughAttributes(Links);
    testPassThroughAttributes(Buttons);
});

describe("pagination-item", () => {
    testPassThroughAttributes(Links, {
        child: {
            name: "item",
            multiple: true,
        },
    });
});
