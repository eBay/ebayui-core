import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, waitFor, cleanup } from "@marko/testing-library";
import { addRenderBodies } from "../../../../.storybook/utils";
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../lightbox-dialog.stories"; // import all stories from the stories file
const { Default, WithPrevButton } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

const hasTouch = typeof Touch !== "undefined";

async function triggerTouch(element, diff) {
    const initPageY = 400;
    const newPageY = initPageY + diff;
    await fireEvent.touchStart(element, getTouchedData(element, initPageY));
    await fireEvent.touchMove(element, getTouchedData(element, newPageY));
    await fireEvent.touchEnd(element, getTouchedData(element, newPageY));
}

function getTouchedData(target, pageY) {
    const changedTouches = [
        new Touch({
            identifier: 1,
            target,
            pageX: 0,
            pageY,
            radiusX: 2.5,
            radiusY: 2.5,
            rotationAngle: 10,
            force: 0.5,
        }),
    ];
    return {
        changedTouches,
    };
}

const { a11yMinimizeText, a11yMaximizeText } = Default.args;

describe("given a closed dialog", () => {
    beforeEach(async () => {
        component = await render(Default);
    });

    it("then it is hidden in the DOM", () => {
        expect(component.getByRole("dialog", { hidden: true })).toHaveAttribute(
            "hidden",
        );
    });

    describe("then it is opened", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    open: true,
                }),
            );
        });

        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(component.emitted("open")).has.length(1),
            );
        });
    });
});

describe("given an open dialog", () => {
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("button"));
        sibling.focus();
        component = await render(Default, { open: true });
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it("then it is visible in the DOM", () => {
        expect(component.getByRole("dialog")).not.toHaveAttribute("hidden");
    });

    describe("when the close button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByLabelText(Default.args.a11yCloseText),
            );
        });

        thenItIsClosed();
    });

    describe("when the mask is clicked", () => {
        beforeEach(async () => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole("dialog"));
        });

        thenItIsClosed();
    });

    function thenItIsClosed() {
        it("then it is hidden in the DOM", async () => {
            await waitFor(() =>
                expect(
                    component.getByRole("dialog", { hidden: true }),
                ).toHaveAttribute("hidden"),
            );
        });

        it("then it restores the previous focus", async () => {
            await waitFor(() =>
                expect(component.emitted("close")).has.length(1),
            );
        });
    }
});

describe("given an open dialog with prev button", () => {
    beforeEach(async () => {
        component = await render(WithPrevButton, { open: true });
    });

    it("then it is visible in the DOM", () => {
        expect(component.getByRole("dialog")).not.toHaveAttribute("hidden");
    });

    describe("when the prev button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText("Go back"));
        });
        it("then it gets prev button clicked event", async () => {
            await waitFor(() =>
                expect(component.emitted("prev-button-click")).has.length(1),
            );
        });
    });
});

describe("given an open and non expanded dialog for touch events", () => {
    beforeEach(async () => {
        component = await render(Default, { open: true });
    });

    it("then it is hidden in the DOM", () => {
        expect(
            component.getByRole("dialog", { hidden: true }),
        ).not.toHaveAttribute("hidden");
    });

    (hasTouch ? describe : describe.skip)(
        "then it is expanded on touch drag up",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMaximizeText),
                    -50,
                );
            });

            it("then it is expanded in DOM", async () => {
                await waitFor(() =>
                    expect(component.emitted("expanded")).has.length(1),
                );
            });
        },
    );

    (hasTouch ? describe : describe.skip)(
        "then does not trigger when threshold is not met for drag up",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMaximizeText),
                    -10,
                );
            });

            it("then it did not trigger", async () => {
                await waitFor(() =>
                    expect(component.emitted("expanded")).has.length(0),
                );
                await waitFor(() =>
                    expect(component.emitted("close")).has.length(0),
                );
                await waitFor(() =>
                    expect(component.emitted("collapsed")).has.length(0),
                );
            });
        },
    );

    (hasTouch ? describe : describe.skip)(
        "then does not trigger when threshold is not met for drag down",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMaximizeText),
                    10,
                );
            });

            it("then it did not trigger threshold when dragged down", async () => {
                await checkNoEvenets(component);
            });
        },
    );

    (hasTouch ? describe : describe.skip)(
        "then it is closed on touch drag down",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMaximizeText),
                    50,
                );
            });

            it("then it is closed", async () => {
                await waitFor(() =>
                    expect(component.emitted("close")).has.length(1),
                );
            });

            it("then it is hidden in the DOM when dragged down", async () => {
                await waitFor(() =>
                    expect(
                        component.getByRole("dialog", { hidden: true }),
                    ).toHaveAttribute("hidden"),
                );
            });
        },
    );
});

describe("given an open and expanded dialog for touch events", () => {
    beforeEach(async () => {
        component = await render(Default, { open: true, expanded: true });
    });

    it("then it is shown in the DOM", () => {
        expect(component.getByRole("dialog")).not.toHaveAttribute("hidden");
    });

    (hasTouch ? describe : describe.skip)(
        "nothing happens on touch drag up",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMinimizeText),
                    -50,
                );
            });

            it("then it is expanded in DOM", async () => {
                await waitFor(() =>
                    expect(component.emitted("expanded")).has.length(0),
                );
            });
        },
    );

    (hasTouch ? describe : describe.skip)(
        "then it is collapsed on touch drag down",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMinimizeText),
                    50,
                );
            });

            it("then it is closed", async () => {
                await waitFor(() =>
                    expect(component.emitted("collapsed")).has.length(1),
                );
            });
        },
    );

    (hasTouch ? describe : describe.skip)(
        "then does not trigger when threshold is not met for drag up",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMinimizeText),
                    -10,
                );
            });

            it("then it did not trigger", async () => {
                await checkNoEvenets(component);
            });
        },
    );

    (hasTouch ? describe : describe.skip)(
        "then does not trigger when threshold is not met for drag down",
        () => {
            // eslint-disable-next-line mocha/no-sibling-hooks
            beforeEach(async () => {
                await triggerTouch(
                    component.getByLabelText(a11yMinimizeText),
                    10,
                );
            });

            it("then it did not trigger on drag down", async () => {
                await checkNoEvenets(component);
            });
        },
    );
});

async function checkNoEvenets(triggerComponent) {
    await waitFor(() =>
        expect(triggerComponent.emitted("expanded")).has.length(0),
    );
    await waitFor(() =>
        expect(triggerComponent.emitted("close")).has.length(0),
    );
    await waitFor(() =>
        expect(triggerComponent.emitted("collapsed")).has.length(0),
    );
}
