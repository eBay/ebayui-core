import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../chips-combobox.stories"; // import all stories from the stories file
const { Default, Selected } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("ebay-chips-combobox default", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    describe("when the input receives focus", () => {
        beforeEach(async () => {
            await fireEvent.focus(component.getByRole("combobox"));
        });

        it("then it should expand the combobox", () => {
            expect(component.getByRole("combobox")).toHaveAttribute(
                "aria-expanded",
                "true",
            );
        });

        describe("when any character key is pressed", () => {
            beforeEach(async () => {
                await pressKey(component.getByRole("combobox"), {
                    key: "A",
                    keyCode: 65,
                });
            });

            describe("when the down arrow key is pressed", () => {
                beforeEach(async () => {
                    await pressKey(component.getByRole("combobox"), {
                        key: "ArrowDown",
                        keyCode: 40,
                    });
                });

                describe("when the enter key is pressed", () => {
                    beforeEach(async () => {
                        pressKey(component.getByRole("combobox"), {
                            key: "Enter",
                            keyCode: 13,
                        });
                    });

                    it("then it should emit a change event", () => {
                        const changeEvent = component.emitted("change");
                        expect(changeEvent).has.length(1);
                        expect(changeEvent[0][0].selected).to.deep.equal([
                            "Option 1",
                        ]);
                    });
                });

                describe("when the down arrow key is pressed a second time", () => {
                    beforeEach(async () => {
                        await pressKey(component.getByRole("combobox"), {
                            key: "ArrowDown",
                            keyCode: 40,
                        });
                    });

                    describe("when the enter key is pressed", () => {
                        beforeEach(async () => {
                            pressKey(component.getByRole("combobox"), {
                                key: "Enter",
                                keyCode: 13,
                            });
                        });

                        it("then it should emit a change event", async () => {
                            const changeEvent = component.emitted("change");
                            expect(changeEvent).has.length(1);
                            expect(changeEvent[0][0].selected).to.deep.equal([
                                "Option 2",
                            ]);
                            await waitFor(() =>
                                expect([
                                    ...component.getByText("Option 2")
                                        .classList,
                                ]).to.include.members(["chip__text"]),
                            );
                        });
                    });
                });
            });
        });
    });
});

describe("ebay-chips-combobox selected", () => {
    beforeEach(async () => {
        component = await render(Selected);
    });

    describe("when the input receives focus", () => {
        beforeEach(async () => {
            await fireEvent.focus(component.getByRole("combobox"));
        });

        it("then it should expand the combobox", () => {
            expect(component.getByRole("combobox")).toHaveAttribute(
                "aria-expanded",
                "true",
            );
        });

        it("Should display default selected options", () => {
            expect([
                ...component.getByText("Option 1").classList,
            ]).to.include.members(["chip__text"]);
            expect([
                ...component.getByText("Option 3").classList,
            ]).to.include.members(["chip__text"]);
            expect([
                ...component.getByText("Custom Option").classList,
            ]).to.include.members(["chip__text"]);
        });

        describe("when an option is removed", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("Remove Option 1"),
                );
            });
            it("then it should emit a change event", () => {
                const changeEvent = component.emitted("change");
                expect(changeEvent).has.length(1);
                expect(changeEvent[0][0].selected).to.deep.equal([
                    "Option 3",
                    "Custom Option",
                ]);
                expect([
                    ...component.getByText("Option 1").classList,
                ]).to.not.include.members(["chip__text"]);
            });
        });

        describe("when multiple options are removed", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText("Remove Option 1"),
                );
                await fireEvent.click(
                    component.getByLabelText("Remove Custom Option"),
                );
            });
            it("then it should emit a change event", () => {
                const changeEvent = component.emitted("change");
                expect(changeEvent).has.length(2);
                expect(changeEvent[0][0].selected).to.deep.equal([
                    "Option 3",
                    "Custom Option",
                ]);
                expect(changeEvent[1][0].selected).to.deep.equal(["Option 3"]);
                expect([
                    ...component.getByText("Option 1").classList,
                ]).to.not.include.members(["chip__text"]);
                expect(component.queryAllByText("Custom Option")).has.length(0);
            });
        });

        describe("when any character key is pressed", () => {
            beforeEach(async () => {
                await pressKey(component.getByRole("combobox"), {
                    key: "A",
                    keyCode: 65,
                });
            });

            describe("when the down arrow key is pressed", () => {
                beforeEach(async () => {
                    await pressKey(component.getByRole("combobox"), {
                        key: "ArrowDown",
                        keyCode: 40,
                    });
                });

                describe("when the enter key is pressed", () => {
                    beforeEach(async () => {
                        pressKey(component.getByRole("combobox"), {
                            key: "Enter",
                            keyCode: 13,
                        });
                    });

                    it("then it should emit a change event", async () => {
                        const changeEvent = component.emitted("change");
                        expect(changeEvent).has.length(1);
                        expect(changeEvent[0][0].selected).to.deep.equal([
                            "Option 1",
                            "Option 3",
                            "Custom Option",
                            "Option 2",
                        ]);

                        await waitFor(() => {
                            expect([
                                ...component.getByText("Option 2").classList,
                            ]).to.include.members(["chip__text"]);
                            expect([
                                ...component.getByText("Option 1").classList,
                            ]).to.include.members(["chip__text"]);
                            expect([
                                ...component.getByText("Option 3").classList,
                            ]).to.include.members(["chip__text"]);
                        });
                    });
                });
            });
        });
    });
});
