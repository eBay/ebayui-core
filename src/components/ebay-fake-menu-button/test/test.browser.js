import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import template from "../index.marko";
import * as mock from "./mock";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given the menu is in the default state", () => {
    const input = mock.basic2Items;
    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("when the button is clicked once", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole("button"));
        });

        it("then it expands", async () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "true",
            );
        });

        it("then it emits the marko event from expander-expand", () => {
            expect(component.emitted("expand")).has.length(1);
        });

        describe("when it is clicked again", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole("button"));
            });

            it("then it collapses", async () => {
                expect(component.getByRole("button")).toHaveAttribute(
                    "aria-expanded",
                    "false",
                );
            });

            it("then it emits the marko event from expander-collapse", () => {
                expect(component.emitted("collapse")).has.length(1);
            });
        });
    });

    describe("when an item is added via input from its parent and the new item is clicked", () => {
        const newInput = mock.basic3Items;
        const thirdItemText = newInput.item[2].renderBody.text;
        beforeEach(async () => {
            await component.rerender(newInput);
            await fireEvent.click(component.getByText(thirdItemText));
        });

        it("then it uses the new input in event data", () => {
            const selectEvents = component.emitted("select");
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg)
                .has.property("el")
                .toHaveTextContent(thirdItemText);
        });
    });

    describe("when re-rendered with expanded set to false", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, input, { expanded: false }),
            );
        });

        it("then it remains collapsed", () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "false",
            );
        });

        it("then it doesn't emit the marko collapse event", () => {
            expect(component.emitted("collapse")).has.length(0);
        });
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip("when re-rendered with expanded set to true", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, input, { expanded: true }),
            );
        });

        it("then it expands", () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "true",
            );
        });

        it("then it emits the expand event", () => {
            expect(component.emitted("expand")).has.length(1);
        });
    });
});

describe("given the menu is in the expanded state", () => {
    const input = mock.basic2Items;
    const firstItemText = input.item[0].renderBody.text;

    beforeEach(async () => {
        component = await render(template, input);
        await fireEvent.click(component.getByRole("button"));
        expect(component.emitted("expand")).has.length(1);
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip("when re-rendered with expanded set to true", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, input, { expanded: true }),
            );
        });

        it("then it remains expanded", () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "true",
            );
        });

        it("then it doesn't emit the marko expand event", () => {
            expect(component.emitted("expand")).has.length(0);
        });
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip("when re-rendered with expanded set to false", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, input, { expanded: false }),
            );
        });

        it("then it expands", () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "false",
            );
        });

        it("then it emits the expand event", () => {
            expect(component.emitted("collapse")).has.length(1);
        });
    });

    describe("when an item is clicked", () => {
        beforeEach(async () => {
            await fireEvent.mouseDown(component.getByText(firstItemText));
            await fireEvent.click(component.getByText(firstItemText));
        });

        it("then it emits the select event with correct data", () => {
            const selectEvents = component.emitted("select");
            expect(selectEvents).to.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg)
                .has.property("el")
                .toHaveTextContent(firstItemText);
        });

        it("then it emits the mousedown event", () => {
            expect(component.emitted("mousedown")).has.length(1);
        });
    });

    describe("when the escape key is pressed from an item", () => {
        beforeEach(async () => {
            await pressKey(component.getByText(firstItemText), {
                key: "Escape",
                keyCode: 27,
            });
        });

        it("then it collapses", () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "false",
            );
        });

        it("then it emits the marko collapse event", () => {
            expect(component.emitted("collapse")).to.have.property("length", 1);
        });
    });

    describe("when the escape key is pressed from the button", () => {
        beforeEach(async () => {
            await pressKey(component.getByRole("button"), {
                key: "Escape",
                keyCode: 27,
            });
        });

        it("then it collapses", () => {
            expect(component.getByRole("button")).toHaveAttribute(
                "aria-expanded",
                "false",
            );
        });

        it("then it emits the marko collapse event", () => {
            expect(component.emitted("collapse")).to.have.property("length", 1);
        });
    });
});
