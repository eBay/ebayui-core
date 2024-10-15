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
                          "row_0": false,
                          "row_1": false,
                          "row_2": false,
                          "row_3": false,
                          "row_4": false,
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
            it("then all rows should be selected and tri-state checkbox should be true state", async () => {
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
                        "allSelected": "true",
                        "selected": {
                          "row_0": true,
                          "row_1": true,
                          "row_2": true,
                          "row_3": true,
                          "row_4": true,
                        },
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
                            "allSelected": "true",
                            "selected": {
                              "row_0": true,
                              "row_1": true,
                              "row_2": true,
                              "row_3": true,
                              "row_4": true,
                            },
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
                row_0: true,
                row_1: false,
                row_2: false,
                row_3: false,
                row_4: false,
            };
            for (const [index, checkbox] of Object.entries(rowCheckboxes)) {
                if (index !== "0") {
                    await fireEvent.click(checkbox);
                    selected[`row_${index}`] = true;
                    expect(component.emitted("select")[0][0]).toMatchObject({
                        selected,
                    });
                }
            }
        });
        it("then tri-state checkbox in header should be true state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "true");
        });
    });
});
describe("given table mode selection with allSelected input", () => {
    describe("when input.allSelected = false", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                allSelected: "false",
            });
        });
        it("then tri-state checkbox in header should be false state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "false");
        });
    });

    describe("when input.allSelected = true", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                allSelected: "true",
            });
        });
        it("then tri-state checkbox in header should be true state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "true");
        });

        describe("when first row is selected", () => {
            it("then it should NOT update header tri-state checkbox", async () => {
                await fireEvent.click(
                    component.getAllByRole("checkbox", {
                        name: "Select row",
                    })[0],
                );
                expect(
                    component.getByRole("checkbox", { name: "Select all" }),
                ).toHaveAttribute("aria-checked", "true");
                expect(component.emitted("select")[0][0])
                    .toMatchInlineSnapshot(`
                  {
                    "selected": {
                      "row_0": false,
                      "row_1": false,
                      "row_2": false,
                      "row_3": false,
                      "row_4": false,
                    },
                  }
                `);
            });
        });

        describe("when tri-state checkbox in header is clicked", () => {
            it("then it should unselect all rows", async () => {
                await fireEvent.click(
                    component.getByRole("checkbox", { name: "Select all" }),
                );
                expect(
                    component.getByRole("checkbox", { name: "Select all" }),
                ).toHaveAttribute("aria-checked", "false");
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
                        "allSelected": "false",
                        "selected": {
                          "row_0": false,
                          "row_1": false,
                          "row_2": false,
                          "row_3": false,
                          "row_4": false,
                        },
                      }
                    `);
            });
        });
    });
});
