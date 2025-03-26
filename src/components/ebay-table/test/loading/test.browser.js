import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../../table.stories";

const { SelectionModeBasic, TableWithActions, ColumnSortingClientSide } =
    composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */

describe("given table mode selection with loading", () => {
    let component;
    beforeEach(async () => {
        component = await render(SelectionModeBasic, { bodyState: "loading" });
    });

    describe("when first row is rendered", () => {
        it("then tri-state checkbox in header should be disabled", async () => {
            expect(
                component.getByRole("checkbox", {
                    name: "Select all",
                    hidden: true,
                }),
            ).toHaveAttribute("disabled", "");
        });
    });

    describe("all rows should have disabled items", () => {
        it("should be disabled", () => {
            const rowCheckboxes = component.getAllByRole("checkbox", {
                name: "Select row",
                hidden: true,
            });
            expect(rowCheckboxes).has.length(5);
            for (const [, checkbox] of Object.entries(rowCheckboxes)) {
                expect(checkbox).toHaveAttribute("disabled");
            }
        });
    });

    describe("When table is rerendered without loading", () => {
        beforeEach(async () => {
            await component.rerender({ bodyState: "default" });
        });

        describe("all interactive elements should be enabled", () => {
            it("then tri-state checkbox in header should not be disabled", async () => {
                expect(
                    component.getByRole("checkbox", {
                        name: "Select all rows",
                        hidden: true,
                    }),
                ).not.toHaveAttribute("disabled");
            });

            it("all row checkboxes should not be disabled", async () => {
                const rowCheckboxes = component.getAllByRole("checkbox", {
                    name: "Select row",
                    hidden: true,
                });
                expect(rowCheckboxes).has.length(5);
                for (const [, checkbox] of Object.entries(rowCheckboxes)) {
                    expect(checkbox).not.toHaveAttribute("disabled");
                }
            });
        });
    });
});

describe("given table with actions with loading", () => {
    let component;
    beforeEach(async () => {
        component = await render(TableWithActions, { bodyState: "loading" });
    });

    describe("all interactive elements should be disabled and have tabindex -1", () => {
        it("should have all buttons disabled", async () => {
            component
                .getAllByRole("button", { hidden: true })
                .forEach(async (button) => {
                    await waitFor(() => {
                        expect(button).toHaveAttribute("disabled", "");
                        expect(button).toHaveAttribute("tabindex", "-1");
                    });
                });
        });
        it("should have all links disabled", async () => {
            component
                .getAllByRole("link", { hidden: true })
                .forEach(async (button) => {
                    await waitFor(() => {
                        expect(button).toHaveAttribute("disabled", "");
                        expect(button).toHaveAttribute("tabindex", "-1");
                    });
                });
        });
    });
    describe("When table is rerendered without loading", () => {
        beforeEach(async () => {
            await component.rerender({ bodyState: "default" });
        });

        describe("all interactive elements should be enabled", () => {
            it("should have all buttons disabled", async () => {
                component
                    .getAllByRole("button", { hidden: true })
                    .forEach(async (button) => {
                        await waitFor(() => {
                            expect(button).not.toHaveAttribute("disabled", "");
                            expect(button).not.toHaveAttribute(
                                "tabindex",
                                "-1",
                            );
                        });
                    });
            });
        });
    });
});

describe("given table with header actions with loading", () => {
    let component;
    beforeEach(async () => {
        component = await render(ColumnSortingClientSide, {
            bodyState: "loading",
        });
    });

    describe("all interactive elements should be disabled and have tabindex -1", () => {
        it("should have all buttons disabled", async () => {
            component
                .getAllByRole("button", { hidden: true })
                .forEach(async (button) => {
                    await waitFor(() => {
                        expect(button).toHaveAttribute("disabled", "");
                        expect(button).toHaveAttribute("tabindex", "-1");
                    });
                });
        });
    });
    describe("When table is rerendered without loading", () => {
        beforeEach(async () => {
            await component.rerender({ bodyState: "default" });
        });

        describe("all interactive elements should be enabled", () => {
            it("should have all buttons disabled", async () => {
                component.getAllByRole("button").forEach(async (button) => {
                    await waitFor(() => {
                        expect(button).not.toHaveAttribute("disabled", "");
                        expect(button).not.toHaveAttribute("tabindex", "-1");
                    });
                });
            });
        });
    });
});
