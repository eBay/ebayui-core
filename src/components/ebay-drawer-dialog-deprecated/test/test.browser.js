import { composeStories } from "@storybook/marko";
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
import { fastAnimations } from "../../../common/test-utils/browser";
import * as stories from "../drawer-dialog.stories"; // import all stories from the stories file
import { addRenderBodies } from "../../../common/storybook/utils";
const { Standard } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

const hasTouch = typeof Touch !== "undefined";

/** @type import("@marko/testing-library").RenderResult */
let component;

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

const { a11yMinimizeText, a11yMaximizeText, renderBody } = Standard.args;

describe("given a closed drawer", () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    it("then it is hidden in the DOM", () => {
        expect(component.getByRole("dialog", { hidden: true })).toHaveAttribute(
            "hidden",
        );
    });

    describe("then it is opened", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Standard.args), {
                    open: true,
                }),
            );
        });

        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(component.emitted("open")).has.length(1),
            );
        });
        describe("then it is expanded", () => {
            beforeEach(async () => {
                await fireEvent.click(
                    component.getByLabelText(a11yMaximizeText),
                );
            });

            it("then it is expanded in DOM", async () => {
                await waitFor(() =>
                    expect(component.emitted("expanded")).has.length(1),
                );
                expect(
                    component.getAllByLabelText(a11yMinimizeText),
                ).has.length(1);
            });
        });
        describe("then it is expanded on scroll", () => {
            beforeEach(async () => {
                await fireEvent.scroll(component.getByText(renderBody));
                // Fire multiple scrolls, expect only 1 expanded is called
                await fireEvent.scroll(component.getByText(renderBody));
                await fireEvent.scroll(component.getByText(renderBody));
            });

            it("then it is expanded in DOM", async () => {
                await waitFor(() =>
                    expect(component.emitted("expanded")).has.length(1),
                );
            });
        });
    });
});

describe("given an open and expanded drawer", () => {
    beforeEach(async () => {
        component = await render(Standard, { open: true, expanded: true });
    });

    it("then it is not hidden in the DOM", () => {
        expect(
            component.getByRole("dialog", { hidden: true }),
        ).not.toHaveAttribute("hidden");
    });

    describe("then it is collapsed", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText(a11yMinimizeText));
        });

        it("then it is expanded in DOM", async () => {
            await waitFor(() =>
                expect(component.emitted("collapsed")).has.length(1),
            );
            expect(component.getAllByLabelText(a11yMaximizeText)).has.length(1);
        });
    });

    describe("no events on scroll", () => {
        beforeEach(async () => {
            await fireEvent.scroll(component.getByText(renderBody));
        });

        it("then it is expanded in DOM", async () => {
            await waitFor(() =>
                expect(component.emitted("expanded")).has.length(0),
            );
        });
    });
});

describe("given an open and non expanded drawer for touch events", () => {
    beforeEach(async () => {
        component = await render(Standard, { open: true });
    });

    it("then it is hidden in the DOM", () => {
        expect(
            component.getByRole("dialog", { hidden: true }),
        ).not.toHaveAttribute("hidden");
    });

    (hasTouch ? describe : describe.skip)(
        "then it is expanded on touch drag up",
        () => {
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

describe("given an open and expanded drawer for touch events", () => {
    beforeEach(async () => {
        component = await render(Standard, { open: true, expanded: true });
    });

    it("then it is shown in the DOM", () => {
        expect(component.getByRole("dialog")).not.toHaveAttribute("hidden");
    });

    (hasTouch ? describe : describe.skip)(
        "nothing happens on touch drag up",
        () => {
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
