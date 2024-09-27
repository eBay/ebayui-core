import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../button.stories"; // import all stories from the stories file
const { Standard } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given button is enabled", () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    describe("when button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole("button"));
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("click")).has.length(1);
        });
    });

    describe("when escape key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getByRole("button"), {
                key: "Escape",
                keyCode: 27,
            });
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("escape")).has.length(1);
        });
    });
});

describe("given button is disabled", () => {
    beforeEach(async () => {
        component = await render(Standard, { disabled: true });
    });

    describe("when button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole("button"));
        });

        it("then it does not emit the event", () => {
            expect(component.emitted("click")).has.length(0);
        });
    });

    describe("when escape key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getByRole("button"), {
                key: "Escape",
                keyCode: 27,
            });
        });

        it("then it does not emit the event", () => {
            expect(component.emitted("escape")).has.length(0);
        });
    });
});
