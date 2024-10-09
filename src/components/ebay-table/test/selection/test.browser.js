import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../../table.stories";

const { SelectionModeBasic, SelectionModeWithDisabled } =
    composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given table mode selection", () => {
    beforeEach(async () => {
        component = await render(SelectionModeBasic);
    });

    describe("when first row is selected", () => {
        beforeEach(async () => {
            const rowCheckboxes = component.getAllByRole("checkbox", {
                name: "Select row",
            });
            expect(rowCheckboxes).has.length(5);
            await fireEvent.click(rowCheckboxes[0]);
        });
        it("then tri-state checkbox in header should be mixed state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "mixed");
        });

        it("then it emits the select event", async () => {
            expect(component.emitted("select")).toMatchInlineSnapshot(`
              [
                [
                  {
                    "selected": {
                      "0": true,
                      "1": false,
                      "2": false,
                      "3": false,
                      "4": false,
                    },
                  },
                ],
              ]
            `);
        });

        describe("when select-all is clicked afterwards", () => {
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

            describe("when select-all is clicked again", () => {
                it("then all rows should be unselected and tri-state checkbox should be none-selected state", async () => {
                    selectAllCheckbox = component.getByRole("checkbox", {
                        name: "Select all",
                    });
                    await fireEvent.click(selectAllCheckbox);
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
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
            };
            for (const [index, checkbox] of Object.entries(rowCheckboxes)) {
                await fireEvent.click(checkbox);
                selected[index] = true;
                expect(component.emitted("select")[0][0]).toMatchObject({
                    selected,
                });
            }
        });
        it("then tri-state checkbox in header should be all-selected state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "true");
        });
    });

    describe("when select-all checkbox is clicked", () => {
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
            expect(selectAllCheckbox).toHaveAttribute("aria-checked", "true");
        });

        it("then it emits the select event", async () => {
            expect(component.emitted("select")).toMatchInlineSnapshot(`
              [
                [
                  {
                    "selected": {
                      "0": true,
                      "1": true,
                      "2": true,
                      "3": true,
                      "4": true,
                    },
                  },
                ],
              ]
            `);
        });

        describe("when last row is unselected", () => {
            beforeEach(async () => {
                // clear emits from last step
                component.emitted("select");
                const rowCheckboxes = component.getAllByRole("checkbox", {
                    name: "Select row",
                });
                await fireEvent.click(rowCheckboxes[4]);
            });
            it("then tri-state checkbox in header should be mixed state", async () => {
                expect(selectAllCheckbox).toHaveAttribute(
                    "aria-checked",
                    "mixed",
                );
            });

            it("then it emits the select event", async () => {
                expect(component.emitted("select")).toMatchInlineSnapshot(`
                  [
                    [
                      {
                        "selected": {
                          "0": true,
                          "1": true,
                          "2": true,
                          "3": true,
                          "4": false,
                        },
                      },
                    ],
                  ]
                `);
            });
        });
    });

    describe("when rerender with different selected input", () => {
        beforeEach(async () => {
            await component.rerender({
                selected: {
                    0: true,
                    1: false,
                    2: false,
                    3: false,
                    4: true,
                },
                a11ySelectAllText: "Select all",
            });
            component
                .getAllByRole("checkbox", {
                    name: "Select row",
                })
                .forEach((checkbox, i) => {
                    if (i === 0 || i === 4) {
                        expect(checkbox).has.property("checked", true);
                    } else {
                        expect(checkbox).has.property("checked", false);
                    }
                });
        });
        it("then tri-state checkbox in header should be mixed state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "mixed");
        });
    });
});
describe("given table mode selection with disabled rows", () => {
    function isAllRowsSelected() {
        component
            .getAllByRole("checkbox", {
                name: "Select row",
            })
            .forEach((checkbox, i) => {
                if (i % 2 === 0 && i !== 2) {
                    expect(checkbox).has.property("checked", false);
                } else {
                    expect(checkbox).has.property("checked", true);
                }
            });
    }
    beforeEach(async () => {
        component = await render(SelectionModeWithDisabled);
    });

    describe("when first enabled row (2nd row) is selected", () => {
        beforeEach(async () => {
            const rowCheckboxes = component.getAllByRole("checkbox", {
                name: "Select row",
            });
            expect(rowCheckboxes).has.length(5);
            rowCheckboxes.forEach((checkbox, index) => {
                expect(checkbox).has.property("disabled", index % 2 === 0);
            });
            // third row is checked and disabled by default
            expect(rowCheckboxes[2]).has.property("checked", true);
            await fireEvent.click(rowCheckboxes[1]);
        });
        it("then tri-state checkbox in header should be mixed state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all rows" }),
            ).toHaveAttribute("aria-checked", "mixed");
        });

        it("then it emits the select event", async () => {
            expect(component.emitted("select")).toMatchInlineSnapshot(`
              [
                [
                  {
                    "selected": {
                      "row_0": false,
                      "row_1": true,
                      "row_2": true,
                      "row_3": false,
                      "row_4": false,
                    },
                  },
                ],
              ]
            `);
        });

        describe("when select-all is clicked afterwards", () => {
            it("then all rows should be selected and tri-state checkbox should be all-selected state", async () => {
                const selectAllCheckbox = component.getByRole("checkbox", {
                    name: "Select all rows",
                });
                await fireEvent.click(selectAllCheckbox);
                isAllRowsSelected();
                expect(selectAllCheckbox).toHaveAttribute(
                    "aria-checked",
                    "true",
                );
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
                row_0: false,
                row_1: false,
                row_2: true,
                row_3: false,
                row_4: false,
            };
            for (const [index, checkbox] of Object.entries(rowCheckboxes)) {
                if (!checkbox.disabled) {
                    await fireEvent.click(checkbox);
                    selected[`row_${index}`] = true;
                    expect(component.emitted("select")[0][0]).toMatchObject({
                        selected,
                    });
                }
            }
        });
        it("then tri-state checkbox in header should be all-selected state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all rows" }),
            ).toHaveAttribute("aria-checked", "true");
        });
    });

    describe("when select-all checkbox is clicked", () => {
        let selectAllCheckbox;
        beforeEach(async () => {
            selectAllCheckbox = component.getByRole("checkbox", {
                name: "Select all rows",
            });
            await fireEvent.click(selectAllCheckbox);
        });
        it("then all rows should be selected and tri-state checkbox should be all-selected state", async () => {
            isAllRowsSelected();
            expect(selectAllCheckbox).toHaveAttribute("aria-checked", "true");
        });

        it("then it emits the select event", async () => {
            expect(component.emitted("select")).toMatchInlineSnapshot(`
              [
                [
                  {
                    "selected": {
                      "row_0": false,
                      "row_1": true,
                      "row_2": true,
                      "row_3": true,
                      "row_4": false,
                    },
                  },
                ],
              ]
            `);
        });

        describe("when last enabled row (4th row) is unselected", () => {
            beforeEach(async () => {
                // clear emits from last step
                component.emitted("select");
                const rowCheckboxes = component.getAllByRole("checkbox", {
                    name: "Select row",
                });
                await fireEvent.click(rowCheckboxes[3]);
            });
            it("then tri-state checkbox in header should be mixed state", async () => {
                expect(selectAllCheckbox).toHaveAttribute(
                    "aria-checked",
                    "mixed",
                );
            });

            it("then it emits the select event", async () => {
                expect(component.emitted("select")).toMatchInlineSnapshot(`
                  [
                    [
                      {
                        "selected": {
                          "row_0": false,
                          "row_1": true,
                          "row_2": true,
                          "row_3": false,
                          "row_4": false,
                        },
                      },
                    ],
                  ]
                `);
            });
        });
    });
});

describe("given table mode selection with defined selected rows", () => {
    describe("when extra row is expected to be selected and rendered rows are NOT selected", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                selected: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    _other: true,
                },
            });
        });
        it("then tri-state checkbox in header should be mixed state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "mixed");
        });

        describe("when select-all is clicked afterwards", () => {
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
                expect(component.emitted("select")).toMatchInlineSnapshot(`
                  [
                    [
                      {
                        "selected": {
                          "0": true,
                          "1": true,
                          "2": true,
                          "3": true,
                          "4": true,
                          "_other": true,
                        },
                      },
                    ],
                  ]
                `);
            });
        });
    });

    describe("when extra row is expected to be NOT selected and rendered rows are selected", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                selected: {
                    0: true,
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    _other: false,
                },
            });
        });
        it("then tri-state checkbox in header should be mixed state", async () => {
            expect(
                component.getByRole("checkbox", { name: "Select all" }),
            ).toHaveAttribute("aria-checked", "mixed");
        });

        describe("when select-all is clicked afterwards", () => {
            let selectAllCheckbox;
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
                expect(component.emitted("select")).toMatchInlineSnapshot(`
                  [
                    [
                      {
                        "selected": {
                          "0": false,
                          "1": false,
                          "2": false,
                          "3": false,
                          "4": false,
                          "_other": false,
                        },
                      },
                    ],
                  ]
                `);
            });
        });
    });

    describe("when extra row is expected to be NOT selected and rendered rows are NOT selected", () => {
        beforeEach(async () => {
            component = await render(SelectionModeBasic, {
                selected: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    _other: false,
                },
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

            it("then all rows should be unselected and tri-state checkbox should be none-selected state", async () => {
                component
                    .getAllByRole("checkbox", {
                        name: "Select row",
                    })
                    .forEach((checkbox) => {
                        expect(checkbox).has.property("checked", true);
                    });
                expect(selectAllCheckbox).toHaveAttribute(
                    "aria-checked",
                    "mixed",
                );
            });
        });
    });
});
