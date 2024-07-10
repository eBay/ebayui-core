import { expect, use } from "chai";
import chaiDom from "chai-dom";
import {
    render,
    cleanup,
    waitFor,
    fireEvent,
    screen,
} from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../donut-chart.stories";

const { Standard, FiveValues } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a donut chart", () => {
    beforeEach(async () => {
        component = await render(Standard, {});
    });

    it("that it renders with three paths", async () => {
        await waitFor(() => {
            expect(component.getAllByRole("img")).to.have.length(3);
        });
    });

    describe("when it is hovered", () => {
        beforeEach(async () => {
            const path = await screen.findAllByRole("img");
            await fireEvent.mouseOver(path[0]);
        });

        it("then it displays a tooltip", async () => {
            const tooltip = await screen.findByRole("tooltip");
            expect(tooltip.textContent).to.equal("Portion 120");
        });
    });
});

describe("given a donut chart with five values", () => {
    beforeEach(async () => {
        component = await render(FiveValues, {});
    });

    it("that it renders with five paths", async () => {
        await waitFor(() => {
            expect(component.getAllByRole("img")).to.have.length(5);
        });
    });
});
