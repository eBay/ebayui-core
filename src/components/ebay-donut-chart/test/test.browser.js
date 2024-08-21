import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { render, cleanup, fireEvent, screen } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../donut-chart.stories";

const { Standard, FiveValues } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

describe("given a donut chart", () => {
    beforeEach(async () => {
        await render(Standard, {});
    });

    it("that it renders with three paths", async () => {
        const paths = await screen.findAllByRole("img");
        expect(paths).to.have.length(3);
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
        await render(FiveValues, {});
    });

    it("that it renders with five paths", async () => {
        const paths = await screen.findAllByRole("img");
        expect(paths).to.have.length(5);
    });
});
