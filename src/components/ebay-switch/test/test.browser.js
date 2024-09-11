import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import template from "../index.marko";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given switch button is enabled", () => {
    beforeEach(async () => {
        component = await render(template, { value: "food" });
    });

    describe("when switch button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByRole("switch", { hidden: true }),
            );
        });

        it("then it emits the event", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[eventArg]] = changeEvents;
            expect(eventArg)
                .has.property("originalEvent")
                .is.an.instanceof(Event);
            expect(eventArg).has.property("value", "food");
        });
    });
});

describe("given switch button is disabled", () => {
    beforeEach(async () => {
        component = await render(template, { disabled: true });
    });

    describe("when switch button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByRole("switch", { hidden: true }),
            );
        });

        it("then it doesn't emit the event", () => {
            expect(component.emitted("change")).has.length(0);
        });
    });
});
