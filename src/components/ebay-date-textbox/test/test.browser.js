import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { page } from "@vitest/browser/context";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../date-textbox.stories"; // import all stories from the stories file

const { Default } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("ebay-date-textbox", () => {
    describe("default", () => {
        beforeEach(async () => {
            await page.viewport(1250, 500);
            component = await render(Default, { value: "01/27/2024" });
        });

        describe("when a date is selected", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("open calendar"),
                );
                await fireEvent.click(component.getAllByText("16")[0]);
            });

            it("then it emits the event with correct data", () => {
                const [[value]] = component.emitted("change");
                expect(value.selected).to.equal("2024-01-16");
            });
        });
    });

    describe("previous month selected", () => {
        beforeEach(async () => {
            component = await render(Default, { value: "01/27/2024" });
        });

        describe("when a date is selected in previous month", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("open calendar"),
                );
                await fireEvent.click(
                    component.getByLabelText("Show December 2023"),
                );
                await fireEvent.click(component.getAllByText("16")[0]);
            });

            it("then it emits the event with correct data", () => {
                const [[value]] = component.emitted("change");
                expect(value.selected).to.equal("2023-12-16");
            });
        });
    });

    describe("next month selected", () => {
        beforeEach(async () => {
            component = await render(Default, { value: "01/27/2024" });
        });

        describe("when a date is selected in next month", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("open calendar"),
                );
                await fireEvent.click(
                    component.getByLabelText("Show March 2024"),
                );
                await fireEvent.click(component.getAllByText("16")[1]);
            });

            it("then it emits the event with correct data", () => {
                const [[value]] = component.emitted("change");
                expect(value.selected).to.equal("2024-03-16");
            });
        });
    });

    describe("with range", () => {
        beforeEach(async () => {
            component = await render(Default, {
                value: "01/27/2024",
                range: true,
            });
        });

        describe("when a date is selected after default value", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("open calendar"),
                );
                await fireEvent.click(component.getAllByText("3")[1]);
            });

            it("then it emits the event with correct data", () => {
                const [[value]] = component.emitted("change");
                expect(value.rangeStart).to.equal("2024-01-27");
                expect(value.rangeEnd).to.equal("2024-02-03");
            });
        });

        describe("when a date is selected before default value", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("open calendar"),
                );
                await fireEvent.click(component.getAllByText("16")[0]);
            });

            it("then it emits the event with correct data", () => {
                const [[value]] = component.emitted("change");
                expect(value.rangeStart).to.equal("2024-01-16");
                expect(value.rangeEnd).to.equal("2024-01-27");
            });
        });
    });
});
