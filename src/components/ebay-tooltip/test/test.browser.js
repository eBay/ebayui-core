import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../tooltip.stories";

const { Standard } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

const renderBodyText = "View options";

describe("given the default tooltip", () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    describe("when the host element is hovered", () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it("then it emits the expand event", async () => {
            await waitFor(() =>
                expect(component.emitted("expand")).has.length(1),
            );
        });

        describe("when the host element loses hover", () => {
            beforeEach(async () => {
                await fireEvent.mouseLeave(
                    component.getByText(renderBodyText).parentElement,
                );
            });

            it("then it emits the collapse event", async () => {
                await waitFor(() =>
                    expect(component.emitted("collapse")).has.length(1),
                );
            });
        });

        describe("when the escape key is pressed", () => {
            beforeEach(async () => {
                await fireEvent.keyDown(
                    component.getByText(renderBodyText).parentElement,
                    {
                        key: "Escape",
                        keyCode: 27,
                    },
                );
            });

            it("then it emits the collapse event", async () => {
                await waitFor(() =>
                    expect(component.emitted("collapse")).has.length(1),
                );
            });
        });
    });
});

describe("given the a custom aligned tooltip", () => {
    beforeEach(async () => {
        component = await render(Standard, {
            offset: 50,
        });
    });

    describe("when the host element is hovered", () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it("then it sets the overlay styles correctly", () => {
            const overlay =
                component.getByText(renderBodyText).nextElementSibling;
            expect(overlay.style.transform).to.equal("");
            expect(overlay.style.top).to.not.equal("");
            expect(overlay.style.right).to.equal("");
            expect(overlay.style.bottom).to.equal("");
        });
    });
});
