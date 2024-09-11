import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import * as stories from "../character-count.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a default character count", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    describe("when it is rerendered", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Default.args, { value: "hello world" }),
            );
            await new Promise((resolve) => setTimeout(resolve, 600));
        });

        it("then it emits the event with correct data", async () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("count", 11);
            expect(changeEvent).has.property("inputAriaLive", "off");
        });
    });

    describe("when it is rerendered with too many characters", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Default.args, {
                    value: "hello world",
                    max: "5",
                }),
            );
            await new Promise((resolve) => setTimeout(resolve, 600));
        });

        it("then it emits the event with correct data", async () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("count", 11);
            expect(changeEvent).has.property("inputAriaLive", "polite");
        });
    });

    describe("when it is rerendered with a number value", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Default.args, { value: 12 }),
            );
            await new Promise((resolve) => setTimeout(resolve, 600));
        });

        it("then it emits the event with correct data", async () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("count", 12);
            expect(changeEvent).has.property("inputAriaLive", "off");
        });
    });

    describe("when it is rerendered with an invalid value", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Default.args, { value: { object: "123" } }),
            );
            await new Promise((resolve) => setTimeout(resolve, 600));
        });

        it("then it emits the event with correct data", async () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("count", 0);
            expect(changeEvent).has.property("inputAriaLive", "off");
        });
    });

    describe("when it is rerendered twice", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Default.args, { value: 3 }),
            );
            await component.rerender(
                Object.assign({}, Default.args, { value: 4 }),
            );
            await component.rerender(
                Object.assign({}, Default.args, { value: 5 }),
            );
            await new Promise((resolve) => setTimeout(resolve, 600));
        });

        it("then it emits the event with correct data", async () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("count", 5);
            expect(changeEvent).has.property("inputAriaLive", "off");
        });
    });
});
