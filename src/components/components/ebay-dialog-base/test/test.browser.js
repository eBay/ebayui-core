import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { render, fireEvent, waitFor, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../../common/test-utils/browser";
import { pressKey } from "../../../../common/test-utils/browser";
import template from "../index.marko";
import * as mock from "./mock";
import "@ebay/skin/lightbox-dialog";

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);
// Because dialog base does not have all the data this needs to be run by each module separately

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a closed dialog", () => {
    const input = mock.dialog;
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("div"));
        component = await render(template, input);
        // VI test adds some extra things to the body which causes the test to fail
        document.body.removeAttribute("style");
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it("then it is hidden in the DOM", async () => {
        await waitFor(() =>
            expect(
                component.getByRole("dialog", { hidden: true }),
            ).toHaveAttribute("hidden"),
        );
    });

    it("then <body> is scrollable", () => {
        expect(document.body).not.toHaveAttribute("style");
    });

    it("then it's siblings are visible", () => {
        expect(sibling).not.toHaveAttribute("aria-hidden");
    });

    it("then it does not trap focus", () => {
        expect(
            component.getByRole("dialog", { hidden: true }).children[0],
        ).not.toHaveClass("keyboard-trap--active");
    });

    describe("when it is rerendered to be open", () => {
        beforeEach(async () => {
            await component.rerender(Object.assign({}, input, { open: true }));
        });

        thenItIsOpen(true);
    });

    function thenItIsOpen(wasToggled) {
        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(
                    component.getByRole("dialog", { hidden: true }),
                ).not.toHaveAttribute("hidden"),
            );
        });

        it("then <body> is not scrollable", () => {
            expect(document.body).toHaveAttribute("style");
            expect(getComputedStyle(document.body).overflow).toContain(
                "hidden",
            );
        });

        it("then it's siblings are hidden", async () => {
            await waitFor(() =>
                expect(sibling).toHaveAttribute("aria-hidden", "true"),
            );
        });

        if (wasToggled) {
            it("then it traps focus", async () => {
                await waitFor(() => {
                    expect(
                        component.getByRole("dialog", { hidden: true })
                            .children[1],
                    ).toHaveClass("keyboard-trap--active");
                    component
                        .getByLabelText(input.a11yCloseText)
                        .classList.forEach((cls) =>
                            expect(document.activeElement).toHaveClass(cls),
                        );
                });
            });

            it("then it emits the open event", async () => {
                await waitFor(() =>
                    expect(component.emitted("open")).has.length(1),
                );
            });

            describe("when it is rerendered with the same input", () => {
                beforeEach(async () => await component.rerender());
                thenItIsOpen();
            });
        }
    }
});

describe("given an open dialog", () => {
    const input = mock.dialogOpen;
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("button"));
        sibling.focus();
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    thenItIsOpen();

    describe("when the close button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByLabelText(input.a11yCloseText),
            );
        });

        thenItIsClosed(true);
    });

    describe("when the escape is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getByText(input.renderBody.text), {
                key: "Escape",
                keyCode: 27,
            });
        });

        thenItIsClosed(true);
    });

    describe("when the escape is outside modal", () => {
        beforeEach(async () => {
            await pressKey(document, {
                key: "Escape",
                keyCode: 27,
            });
        });

        thenItIsClosed(true);
    });

    describe("when the escape is pressed on input", () => {
        beforeEach(async () => {
            const inputEl = document.createElement("input");
            inputEl.setAttribute("placeholder", "sample input");
            component
                .getByRole("dialog", { hidden: true })
                .appendChild(inputEl);
            await pressKey(component.getByPlaceholderText("sample input"), {
                key: "Escape",
                keyCode: 27,
            });
        });

        thenItIsClosed(true);
    });

    describe("when the mask is clicked", () => {
        beforeEach(async () => {
            // simulate clicking outside the dialog.
            await fireEvent.click(
                component.getByRole("dialog", { hidden: true }),
            );
        });

        thenItIsClosed(true);
    });

    function thenItIsOpen() {
        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(
                    component.getByRole("dialog", { hidden: true }),
                ).not.toHaveAttribute("hidden"),
            );
        });

        it("then <body> is not scrollable", () => {
            expect(document.body).toHaveAttribute("style");
            expect(getComputedStyle(document.body).overflow).toContain(
                "hidden",
            );
        });

        it("then it's siblings are hidden", async () => {
            await waitFor(() =>
                expect(sibling).toHaveAttribute("aria-hidden", "true"),
            );
        });

        it("then it traps focus", async () => {
            await waitFor(() => {
                expect(
                    component.getByRole("dialog", { hidden: true }).children[1],
                ).toHaveClass("keyboard-trap--active");
                component
                    .getByLabelText(input.a11yCloseText)
                    .classList.forEach((cls) =>
                        expect(document.activeElement).toHaveClass(cls),
                    );
            });
        });
    }

    function thenItIsClosed(wasToggled) {
        it("then it is hidden in the DOM", async () => {
            await waitFor(() =>
                expect(
                    component.getByRole("dialog", { hidden: true }),
                ).toHaveAttribute("hidden"),
            );
        });

        it("then <body> is scrollable", async () => {
            await waitFor(() => {
                expect(document.body).not.toHaveAttribute("style");
            });
        });

        it("then it's siblings are visible", () => {
            expect(sibling).not.toHaveAttribute("aria-hidden");
        });

        it("then it restores the previous focus", async () => {
            expect(
                component.getByRole("dialog", { hidden: true }).children[0],
            ).not.toHaveClass("keyboard-trap--active");
            await waitFor(() =>
                expect(document.activeElement).to.equal(sibling),
            );
        });

        if (wasToggled) {
            it("then it emits the close event", async () => {
                await waitFor(() =>
                    expect(component.emitted("close")).has.length(1),
                );
            });

            describe("when it is rerendered with the same input", () => {
                beforeEach(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 600));
                    await component.rerender(input);
                });
                thenItIsOpen();
            });
        }
    }
});

describe("given an open dialog with no trap", () => {
    const input = mock.dialogOpen;
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("button"));
        sibling.focus();
        component = await render(
            template,
            Object.assign({}, input, { isModal: false }),
        );
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it("then it is visible in the DOM", async () => {
        await waitFor(() =>
            expect(component.getByRole("dialog")).not.toHaveAttribute("hidden"),
        );
    });

    it("then <body> is scrollable", () => {
        expect(document.body).not.toHaveAttribute("style");
    });

    it("then it's siblings are not hidden", () => {
        expect(sibling).not.toHaveAttribute("aria-hidden", "true");
    });

    it("then it does not traps focus", async () => {
        await waitFor(() => {
            expect(
                component.getByRole("dialog", { hidden: true }).children[1],
            ).to.equal(undefined);
            component
                .getByLabelText(input.a11yCloseText)
                .classList.forEach((cls) =>
                    expect(document.activeElement).not.toHaveClass(cls),
                );
        });
    });
});

describe("given an open with no close button", () => {
    const input = mock.dialogOpen;
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("button"));
        sibling.focus();
        component = await render(
            template,
            Object.assign({}, input, {
                buttonPosition: "hidden",
                skipEscape: true,
            }),
        );
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    thenItIsOpen();

    describe("when the escape is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getByText(input.renderBody.text), {
                key: "Escape",
                keyCode: 27,
            });
        });

        thenItIsOpen();
    });

    describe("when the escape is outside modal", () => {
        beforeEach(async () => {
            await pressKey(document, {
                key: "Escape",
                keyCode: 27,
            });
        });

        thenItIsOpen(true);
    });

    describe("when the mask is clicked", () => {
        beforeEach(async () => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole("dialog"));
        });

        thenItIsOpen(true);
    });

    function thenItIsOpen() {
        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(component.getByRole("dialog")).not.toHaveAttribute(
                    "hidden",
                ),
            );
        });

        it("then <body> is not scrollable", () => {
            expect(document.body).toHaveAttribute("style");

            expect(getComputedStyle(document.body).overflow).toContain(
                "hidden",
            );
        });
    }
});

describe("given a closed dialog with useHiddenProperty", () => {
    const input = Object.assign({}, mock.dialog, { useHiddenProperty: true });
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("div"));
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it("then it is hidden in the DOM", async () => {
        await waitFor(() =>
            expect(
                component.getByRole("dialog", { hidden: true }),
            ).toHaveAttribute("hidden"),
        );
    });

    it("then <body> is scrollable", () => {
        expect(document.body).not.toHaveAttribute("style");
    });

    it("then it's siblings are visible", async () => {
        await waitFor(() => expect(sibling).not.toHaveAttribute("hidden"));
    });

    it("then it does not trap focus", () => {
        expect(
            component.getByRole("dialog", { hidden: true }).children[0],
        ).not.toHaveClass("keyboard-trap--active");
    });

    describe("when it is rerendered to be open", () => {
        beforeEach(async () => {
            await component.rerender(Object.assign({}, input, { open: true }));
        });

        useHiddenPropertyIsOpened(true);
    });

    function useHiddenPropertyIsOpened(wasToggled) {
        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(component.getByRole("dialog")).not.toHaveAttribute(
                    "hidden",
                ),
            );
        });

        it("then <body> is not scrollable", () => {
            expect(document.body).toHaveAttribute("style");

            expect(getComputedStyle(document.body).overflow).toContain(
                "hidden",
            );
        });

        it("then it's siblings are hidden", async () => {
            await waitFor(() => expect(sibling).toHaveAttribute("hidden"));
        });

        if (wasToggled) {
            it("then it still does not trap focus", () => {
                expect(
                    component.getByRole("dialog", { hidden: true }).children[0],
                ).not.toHaveClass("keyboard-trap--active");
            });

            it("then it emits the show event", async () => {
                await waitFor(() =>
                    expect(component.emitted("open")).has.length(1),
                );
            });

            describe("when it is rerendered with the same input", () => {
                beforeEach(async () => await component.rerender());
                useHiddenPropertyIsOpened();
            });
        }
    }
});
