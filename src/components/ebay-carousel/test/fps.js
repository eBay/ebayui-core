import { expect } from "chai";
import { render, cleanup } from "@marko/testing-library";
const fps = require("../../../common/test-utils/fps");
const template = require("../");
const mock = require("./mock");

afterEach(cleanup);

it("runs at 60fps with changing index", async () => {
    const input = mock.discrete2PerSlide6Items;
    const { getByLabelText } = await render(template, input);
    const nextButton = getByLabelText(input.a11yNextText);
    const prevButton = getByLabelText(input.a11yPreviousText);
    let i = 0;

    fps.start(() => {
        if (i % 2) {
            nextButton.click();
        } else {
            prevButton.click();
        }
        i++;
    }, 50);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    fps.end();
    expect(fps.getAverage()).to.be.above(58);
});
