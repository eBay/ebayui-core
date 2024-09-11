import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../tri-state-checkbox.stories";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

const { Isolated, WithLabel } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

it("renders default tri-state-checkbox", async () => {
    await htmlSnap(Isolated);
});

it("renders disabled tri-state-checkbox", async () => {
    await htmlSnap(Isolated, { disabled: true });
});

it("renders tri-state-checkbox with id", async () => {
    await htmlSnap(Isolated, { id: "abc123" });
});

it("renders mixed checkbox", async () => {
    await htmlSnap(Isolated, { checked: "mixed" });
});

it("renders labeled checkbox", async () => {
    await htmlSnap(WithLabel);
});

testPassThroughAttributes(Isolated, {
    getClassAndStyleEl(component) {
        return component.getByRole("checkbox").parentElement;
    },
});
