import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { render, waitFor, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { addRenderBodies } from "../../../../.storybook/utils";
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../toast-dialog.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

use(chaiDom);
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a closed toast", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    it("then it is hidden in the DOM", () => {
        expect(component.getByRole("dialog", { hidden: true })).has.attr(
            "hidden",
        );
    });

    describe("then it is opened", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    open: true,
                }),
            );
        });

        it("then it is visible in the DOM", async () => {
            await waitFor(
                () => expect(component.emitted("open")).has.length(1),
                100,
            );
        });
    });
});

describe("given an open toast", () => {
    beforeEach(async () => {
        component = await render(Default, { open: true });
    });

    describe("then it is closed", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    open: false,
                }),
            );
        });

        it("then it is closed in dom", async () => {
            await waitFor(
                () => expect(component.emitted("close")).has.length(1),
                100,
            );
        });
    });
});
