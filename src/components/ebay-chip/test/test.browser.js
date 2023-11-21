import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../chip.stories"; // import all stories from the stories file
const { WithDelete } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given delete button is present", () => {
    beforeEach(async () => {
        component = await render(WithDelete);
    });

    describe("when button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole("button"));
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("delete")).has.length(1);
        });
    });
});
