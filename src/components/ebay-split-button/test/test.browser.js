import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../split-button.stories"; // import all stories from the stories file

const { Standard } = composeStories(stories);

import { pressKey } from "../../../common/test-utils/browser";
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given button is enabled", () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    describe("when button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText("Button"));
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("click")).has.length(1);
        });
    });

    describe("when escape key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getByText("Button"), {
                key: "Escape",
                keyCode: 27,
            });
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("escape")).has.length(1);
        });
    });
    describe("when menu is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText("Menu"));
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("expand")).has.length(1);
        });

        describe("when menu is clicked again", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText("Menu"));
            });

            it("then it emits the event with correct data", () => {
                expect(component.emitted("collapse")).has.length(1);
            });
        });
    });
});

describe("given button is disabled", () => {
    beforeEach(async () => {
        component = await render(Standard, { disabled: true });
    });

    describe("when button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText("Button"));
        });

        it("then it does not emit the event", () => {
            expect(component.emitted("click")).has.length(0);
        });
    });

    describe("when escape key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getByText("Button"), {
                key: "Escape",
                keyCode: 27,
            });
        });

        it("then it does not emit the event", () => {
            expect(component.emitted("escape")).has.length(0);
        });
    });
    describe("when menu is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText("Menu"));
        });

        it("then it does not emit the event", () => {
            expect(component.emitted("expand")).has.length(0);
            expect(component.emitted("collapse")).has.length(0);
        });
    });
});
