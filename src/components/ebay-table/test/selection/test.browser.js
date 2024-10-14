import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../../table.stories";

const { SelectionModeBasic } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given table mode selection", () => {
    beforeEach(async () => {
        component = await render(SelectionModeBasic);
    });

    describe("when first row is selected (from input)", () => {
        it("then tri-state checkbox in header should be mixed state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "mixed");
        });

        describe("when first row is unselected", () => {
            beforeEach(async () => {
                const rowCheckboxes = component.getAllByRole("checkbox", {
                    name: "Select row",
                });
                await fireEvent.click(rowCheckboxes[0]);
            });
            it("then tri-state checkbox in header should be none-selected state", async () => {
                expect(
                    component.getByRole("checkbox", { name: "Select all" }),
                ).toHaveAttribute("aria-checked", "false");
            });

            it("then it emits the select event", async () => {
                expect(component.emitted("select")[0][0])
                    .toMatchInlineSnapshot(`
                  {
                    "selected": {
                      "1": false,
                      "2": false,
                      "3": false,
                      "4": false,
                      "named_row": false,
                    },
                  }
                `);
            });
        });

        describe("when select-all is clicked", () => {
            let selectAllCheckbox;
            beforeEach(async () => {
                selectAllCheckbox = component.getByRole("checkbox", {
                    name: "Select all",
                });
                await fireEvent.click(selectAllCheckbox);
            });
            it("then all rows should be selected and tri-state checkbox should be all-selected state", async () => {
                component
                    .getAllByRole("checkbox", {
                        name: "Select row",
                    })
                    .forEach((checkbox) => {
                        expect(checkbox).has.property("checked", true);
                    });
                expect(selectAllCheckbox).toHaveAttribute(
                    "aria-checked",
                    "true",
                );
            });

            it("then it emits the select event", async () => {
                expect(component.emitted("select")[0][0])
                    .toMatchInlineSnapshot(`
                  {
                    "selected": {
                      "1": true,
                      "2": true,
                      "3": true,
                      "4": true,
                      "named_row": true,
                    },
                    "selectionState": "all-selected",
                  }
                `);
            });

            describe("when select-all is clicked again", () => {
                beforeEach(async () => {
                    selectAllCheckbox = component.getByRole("checkbox", {
                        name: "Select all",
                    });
                    await fireEvent.click(selectAllCheckbox);
                });
                it("then all rows should be unselected and tri-state checkbox should be none-selected state", async () => {
                    component
                        .getAllByRole("checkbox", {
                            name: "Select row",
                        })
                        .forEach((checkbox) => {
                            expect(checkbox).has.property("checked", false);
                        });
                    expect(selectAllCheckbox).toHaveAttribute(
                        "aria-checked",
                        "false",
                    );
                });

                it("then it emits the select event", async () => {
                    expect(component.emitted("select")[0][0])
                        .toMatchInlineSnapshot(`
                      {
                        "selected": {
                          "1": true,
                          "2": true,
                          "3": true,
                          "4": true,
                          "named_row": true,
                        },
                        "selectionState": "all-selected",
                      }
                    `);
                });
            });
        });
    });

    describe("when all rows are selected one by one", () => {
        beforeEach(async () => {
            const rowCheckboxes = component.getAllByRole("checkbox", {
                name: "Select row",
            });
            expect(rowCheckboxes).has.length(5);
            const selected = {
                named_row: true,
                1: false,
                2: false,
                3: false,
                4: false,
            };
            for (const [index, checkbox] of Object.entries(rowCheckboxes)) {
                if (index !== "0") {
                    await fireEvent.click(checkbox);
                    selected[index] = true;
                    expect(component.emitted("select")[0][0]).toMatchObject({
                        selected,
                    });
                }
            }
        });
        it("then tri-state checkbox in header should be all-selected state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "true");
        });
    });
});
describe("given table mode selection with selectionState input", () => {
    describe("when input.selectionState = none-selected", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                selectionState: "none-selected",
            });
        });
        it("then tri-state checkbox in header should be none-selected state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "false");
        });
    });

    describe("when input.selectionState = all-selected", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                selectionState: "all-selected",
            });
        });
        it("then tri-state checkbox in header should be all-selected state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "true");
        });

        describe("when tri-state checkbox in header is clicked", () => {
            it("then it should honor user input selectionState and unselect all rows", async () => {
                await fireEvent.click(
                    component.getByRole("checkbox", { name: "Select all" }),
                );
                expect(
                    component.getByRole("checkbox", { name: "Select all" }),
                ).toHaveAttribute("aria-checked", "true");
                component
                    .getAllByRole("checkbox", {
                        name: "Select row",
                    })
                    .forEach((checkbox) => {
                        expect(checkbox).has.property("checked", false);
                    });

                expect(component.emitted("select")[0][0])
                    .toMatchInlineSnapshot(`
                  {
                    "selected": {
                      "1": false,
                      "2": false,
                      "3": false,
                      "4": false,
                      "named_row": false,
                    },
                    "selectionState": "none-selected",
                  }
                `);
            });
        });
    });
});
