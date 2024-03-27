import { expect, use } from "chai";
import { render } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import template from "..";
import * as stories from "../progress-bar-expressive.stories";

const { Default, Localized } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

describe("progress-bar-expressive", () => {
    it("renders default", async () => {
        await htmlSnap(Default);
    });

    it("renders with default accessible name", async () => {
        const { getByLabelText, getByRole } = await render(template);
        const progressBar = getByRole("progressbar");
        expect(progressBar).to.equal(getByLabelText("Loading..."));
    });

    it("renders with custom accessible name", async () => {
        const customA11yText = "Custom";
        const { getByLabelText, getByRole } = await render(template, {
            a11yText: customA11yText,
        });
        const progressBar = getByRole("progressbar");
        expect(progressBar).to.equal(getByLabelText(customA11yText));
    });

    describe("with messages", () => {
        it("renders with message container", async () => {
            await htmlSnap(Localized);
        });

        it("renders with accessible description", async () => {
            const { getByRole } = await render(template, {
                messages: [{ text: "One moment" }, { text: "Hold on" }],
            });
            const statusId = getByRole("status").id;
            expect(getByRole("progressbar")).to.have.attr(
                "aria-describedby",
                statusId,
            );
        });
    });
});
