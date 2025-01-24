import { render, fireEvent, cleanup } from "@marko/testing-library";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import * as mock from "../mock";
import template from "../index.marko";
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a basic breadcrumb", () => {
    const input = mock.Links;
    const firstItem = input.item[0];

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("when an <a> item is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByText(firstItem.renderBody.text),
            );
        });

        it("then it emits the select event with correct data", () => {
            expect(component.emitted("select")).has.length(1);
        });
    });
});

describe("button", () => {
    const input = mock.Buttons;
    const lastItem = input.item[input.item.length - 1];

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("when a <button> is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByText(lastItem.renderBody.text),
            );
        });

        it("then it does not emit the select event", () => {
            expect(component.emitted("select")).has.length(0);
        });
    });
});
