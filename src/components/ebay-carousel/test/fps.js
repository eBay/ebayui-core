const { expect } = require('chai');
const { render, cleanup } = require('@marko/testing-library');
const fps = require('../../../common/test-utils/fps');
const mock = require('./mock');
const template = require('../');

afterEach(cleanup);

it('runs at 60fps with changing index', async () => {
    const { getByLabelText } = await render(template, mock.Discrete_2PerSlide_6Items);
    const nextButton = getByLabelText(input.a11yNextText)
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

    await new Promise(resolve => setTimeout(resolve, 1500));

    fps.end();
    expect(fps.getAverage()).to.be.above(58);
});
