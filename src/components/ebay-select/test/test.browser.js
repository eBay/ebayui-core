import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import template from "../index.marko";
import * as mock from "./mock";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given the select with 3 options", () => {
    const input = mock.basic3Options;
    beforeEach(async () => {
        component = await render(template, input);
    });

    it("then the first option should be selected", () => {
        component.getAllByRole("option").forEach((optionEl, i) => {
            expect(optionEl).has.property("selected", i === 0);
        });
    });

    describe("when the index is set through dom change event", () => {
        beforeEach(async () => {
            const combobox = component.getByRole("combobox");
            combobox.selectedIndex = 1;
            await fireEvent.change(combobox);
        });

        it("then it emits the change event with the correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[eventArg]] = changeEvents;
            expect(eventArg).has.property("index", 1);
            expect(eventArg)
                .has.property("selected")
                .deep.equal([input.option[1].value]);
        });
    });
});

describe("given an input select with floating label and no value", () => {
    const input = mock.floatingLabelNoValue;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("then component is wrapped into floating label element", () => {
        expect(component.container.firstElementChild).toHaveClass(
            "floating-label",
        );
    });

    it("then is showing the label inline", () => {
        expect(component.getByText(input.floatingLabel)).toHaveClass(
            "floating-label__label--inline",
        );
    });

    describe("when the input is focused", () => {
        beforeEach(async () => {
            await fireEvent.focus(component.getByRole("combobox"));
        });

        it("then it is not showing the label inline", () => {
            expect(component.getByText(input.floatingLabel)).not.toHaveClass(
                "floating-label__label--inline",
            );
        });

        describe("when the input is blurred", () => {
            beforeEach(async () => {
                await fireEvent.blur(component.getByRole("combobox"));
            });

            it("then is showing the label inline", () => {
                expect(component.getByText(input.floatingLabel)).toHaveClass(
                    "floating-label__label--inline",
                );
            });
        });
    });

    describe("when the component is updated/re-rendered", () => {
        beforeEach(async () => {
            await component.rerender();
        });

        it("it should send a select floating label init event", () => {
            expect(component.emitted("floating-label-init")).has.length(1);
        });
    });
});

describe("given an input select with floating label and no value with all options filled", () => {
    const input = mock.floatingLabel_Always;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("then component is wrapped into floating label element", () => {
        expect(component.container.firstElementChild).toHaveClass(
            "floating-label",
        );
    });

    it("then is showing the label not inline", () => {
        expect(component.getByText(input.floatingLabel)).not.toHaveClass(
            "floating-label__label--inline",
        );
    });
});
