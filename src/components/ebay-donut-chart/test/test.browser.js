import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../donut-chart.stories";
const { Standard } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("donut-chart", () => {
    describe("given a donut chart with three values", () => {
        beforeEach(async () => {
            component = await render(Standard);
        });

        it("then it renders the donut chart", () => {
            console.log(component);
            // expect(component.getByRole("figure")).has.descendants("svg");
        });
    });
});
