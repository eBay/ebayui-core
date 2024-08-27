import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../segmented-buttons.stories"; // import all stories from the stories file

const { Default } = composeStories(stories);

afterEach(cleanup);

let component;

describe("given button is toggled", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    describe("when button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText("Q2"));
        });

        it("then it emits the event with correct data", () => {
            const data = component.emitted("change");
            expect(data).has.length(1);
            expect(data[0][0].index).equals(1);
            expect(data[0][0].value).equals("quarter2");
        });
    });

    describe("when the same button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText("Q1"));
        });

        it("then it emits the event with correct data", () => {
            const data = component.emitted("change");
            expect(data).has.length(0);
        });
    });
    describe("when the button is clicked twice", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText("Q3"));
            await fireEvent.click(component.getByText("Q3"));
        });

        it("then it emits the event with correct data", () => {
            const data = component.emitted("change");
            expect(data).has.length(1);
            expect(data[0][0].index).equals(2);
            expect(data[0][0].value).equals("quarter3");
        });
    });
});
