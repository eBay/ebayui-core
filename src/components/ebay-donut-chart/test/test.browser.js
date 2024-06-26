import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { render, cleanup, waitFor } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../donut-chart.stories";

const { Standard, FiveValues } = composeStories(stories);
use(chaiDom);
afterEach(cleanup);

describe("given a donut chart", () => {
    let component;

    beforeEach(async () => {
        component = await render(Standard);
    });

    it("that it renders with three paths", async () => {
        await waitFor(() =>
            expect(
                component.container.querySelectorAll(".highcharts-point"),
            ).to.have.length(3),
        );
    });
});

describe("given a donut chart with five values", () => {
    let component;

    beforeEach(async () => {
        component = await render(FiveValues);
    });

    it("that it renders with five paths", async () => {
        await waitFor(() =>
            expect(
                component.container.querySelectorAll(".highcharts-point"),
            ).to.have.length(5),
        );
    });
});
