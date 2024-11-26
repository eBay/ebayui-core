import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../avatar.stories"; // import all stories from the stories file
import { addRenderBodies } from "../../../common/storybook/utils";
const { Default, WithImage, SignedOut } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("avatar", () => {
    it("renders defaults", async () => {
        await htmlSnap(Default);
    });

    it("renders with image", async () => {
        await htmlSnap(WithImage);
    });

    it("renders signed out", async () => {
        await htmlSnap(SignedOut);
    });

    it("renders 128 px with magenta", async () => {
        await htmlSnap(Default, { size: "128", color: "magenta" });
    });

    it("renders with test as usernames", async () => {
        await htmlSnap(Default, { username: "test" });
    });
    it("renders with robert as username", async () => {
        await htmlSnap(Default, { username: "robert" });
    });

    it("renders with doggy as username", async () => {
        await htmlSnap(Default, { username: "doggy" });
    });

    it("renders with custom body", async () => {
        await htmlSnap(Default, addRenderBodies({ renderBody: "custom body" }));
    });
});
