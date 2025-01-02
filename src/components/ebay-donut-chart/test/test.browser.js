import { afterEach, beforeEach, describe, it, expect } from "vitest";
import {
    render,
    cleanup,
    fireEvent,
    screen,
    waitFor,
} from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../donut-chart.stories";

const { Standard, FiveValues } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe.skip("given a donut chart", () => {
    beforeEach(async () => {
        component = await render(Standard, {});
        // Chart is fully rendered when aria-label for highcharts is present
        await waitFor(
            () =>
                expect(
                    component.getByLabelText(
                        "Chart. Highcharts interactive chart.",
                    ),
                ).to.exist,
            { timeout: 1500 },
        );
    });

    it("that it renders with three paths", async () => {
        const paths = component.getAllByRole("img");
        expect(paths).to.have.length(3);
    });

    describe("when it is hovered", () => {
        beforeEach(async () => {
            const paths = component.getAllByRole("img");
            await fireEvent.mouseOver(paths[0]);
        });

        it("then it displays a tooltip", async () => {
            const tooltip = await screen.findByRole("tooltip");
            expect(tooltip.textContent).to.equal("Portion 120");
        });
    });
});

describe.skip("given a donut chart with five values", () => {
    beforeEach(async () => {
        component = await render(FiveValues, {});
        // Chart is fully rendered when aria-label for highcharts is present
        await waitFor(
            () =>
                expect(
                    component.getByLabelText(
                        "Chart. Highcharts interactive chart.",
                    ),
                ).to.exist,
            { timeout: 1500 },
        );
    });

    it("that it renders with five paths", async () => {
        const paths = component.getAllByRole("img");
        expect(paths).to.have.length(5);
    });
});
