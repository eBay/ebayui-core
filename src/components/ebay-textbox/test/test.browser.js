import "@ebay/skin/tokens";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import template from "../index.marko";
import componentB from "../component-browser";
import * as stories from "../textbox.stories";

const { Isolated, FloatingLabel, BothIcons } = composeStories(stories);

const floatingLabel = "Email address";

componentB.renderer = template._; // Allow re-rendering the split component for testing.
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given an input textbox", () => {
    beforeEach(async () => {
        component = await render(Isolated, { value: "test-value" });
    });

    [
        "change",
        "input",
        "focus",
        "blur",
        "keyDown",
        "keyPress",
        "keyUp",
        "invalid",
    ].forEach((eventName) => {
        describe(`when native event is fired: ${eventName}`, () => {
            beforeEach(async () => {
                await fireEvent[eventName](component.getByRole("textbox"));
            });

            it("then it emits the event", () => {
                const events = component.emitted(
                    eventName === "input"
                        ? "input-change"
                        : eventName.toLowerCase(),
                );
                expect(events).has.length(1);

                const [[eventArg]] = events;
                expect(eventArg).has.property("value", "test-value");
                expect(eventArg)
                    .has.property("originalEvent")
                    .is.an.instanceOf(Event);
            });
        });
    });
});

describe("given an input textbox with floating label and no value", () => {
    beforeEach(async () => {
        component = await render(FloatingLabel, { value: "" });
    });

    it("then component is wrapped into floating label element", () => {
        expect(component.container.firstElementChild).toHaveClass(
            "floating-label",
        );
    });

    it("then is showing the label inline", async () => {
        expect(component.getByText(floatingLabel)).toHaveClass(
            "floating-label__label--inline",
        );
    });

    describe("when the input is focused", () => {
        beforeEach(async () => {
            await fireEvent.focus(component.getByRole("textbox"));
        });

        it("then it is not showing the label inline", () => {
            expect(component.getByText(floatingLabel)).not.toHaveClass(
                "floating-label__label--inline",
            );
        });

        describe("when the input is blurred", () => {
            beforeEach(async () => {
                await fireEvent.blur(component.getByRole("textbox"));
            });

            it("then is showing the label inline", () => {
                expect(component.getByText(floatingLabel)).toHaveClass(
                    "floating-label__label--inline",
                );
            });
        });
    });

    describe("when the component is updated/re-rendered", () => {
        beforeEach(async () => {
            await component.rerender();
        });

        it("it should send a textbox floating label init event", () => {
            expect(component.emitted("floating-label-init")).has.length(1);
        });
    });
});

describe("when the component has a postfix button", () => {
    beforeEach(async () => {
        component = await render(BothIcons);
        await fireEvent.click(component.getByLabelText("Clear"));
    });

    it("it should trigger a postfix click event", () => {
        expect(component.emitted("button-click")).has.length(1);
    });
});
