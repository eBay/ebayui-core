import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../chip.stories"; // import all stories from the stories file
const { WithDelete } = composeStories(stories);

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
