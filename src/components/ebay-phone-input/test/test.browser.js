import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../phone-input.stories"; // import all stories from the stories file

const { Default } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("ebay-phone-input", () => {
    beforeEach(async () => {
        component = await render(Default, {
            floatingLabel: "Floating Label",
            value: "4153456789",
        });
    });

    describe("Initial render triggers a change event on textbox", () => {
        beforeEach(async () => {
            await fireEvent.input(component.getByLabelText("Floating Label"));
        });

        it("then it emits the event with correct data", async () => {
            const [[data]] = component.emitted("change");

            expect(data.value).to.equal("(415) 345-6789");
            expect(data.callingCode).to.equal("1");
            expect(data.countryCode).to.equal("US");
        });
    });

    describe("when values are changed in input", () => {
        beforeEach(async () => {
            await fireEvent.input(component.getByLabelText("Floating Label"), {
                target: { value: "4081234567" },
            });
        });

        it("then it emits the event with correct data", async () => {
            const [[data]] = component.emitted("change");

            expect(data.value).to.equal("(408) 123-4567");
            expect(data.callingCode).to.equal("1");
            expect(data.countryCode).to.equal("US");
        });
    });

    describe("when values is larger than formatter", () => {
        beforeEach(async () => {
            await fireEvent.input(component.getByLabelText("Floating Label"), {
                target: { value: "408123456789012345" },
            });
        });

        it("then it emits the event with correct data", async () => {
            const [[data]] = component.emitted("change");

            expect(data.value).to.equal("(408) 123-4567 89012345");
            expect(data.callingCode).to.equal("1");
            expect(data.countryCode).to.equal("US");
        });
    });

    describe("when dropdown is changed", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole("button"));
            await fireEvent.click(component.getByText("United Kingdom"));
        });

        it("then it emits the event with correct data", async () => {
            await waitFor(() => {
                const [[data]] = component.emitted("change");

                expect(data.value).to.equal("41534 56789");
                expect(data.callingCode).to.equal("44");
                expect(data.countryCode).to.equal("GB");
            });
        });
    });

    describe("when component is rerendered with new country code", () => {
        beforeEach(async () => {
            await component.rerender({
                floatingLabel: "Floating Label",
                value: "4153456789",
                countryCode: "RU",
            });

            await fireEvent.input(component.getByLabelText("Floating Label"));
        });

        it("then it emits the event with correct data", async () => {
            const [[data]] = component.emitted("change");

            expect(data.value).to.equal("4 (153) 456-78-9");
            expect(data.callingCode).to.equal("7");
            expect(data.countryCode).to.equal("RU");
        });
    });
});
