const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const fps = require('../../../common/test-utils/fps');
const mock = require('../mock');
const renderer = require('../');

function renderAndGetRoot(input) {
    renderer.renderSync(input).appendTo(document.body);
    return document.querySelector('.carousel');
}

it('runs at 60fps with changing index', (done) => {
    const root = renderAndGetRoot({ items: mock.debugItems });
    const nextButton = root.querySelector('.carousel__control--next');
    const prevButton = root.querySelector('.carousel__control--prev');
    let i = 0;

    fps.start(() => {
        if (i % 2) {
            testUtils.triggerEvent(nextButton, 'click');
        } else {
            testUtils.triggerEvent(prevButton, 'click');
        }
        i++;
    }, 50);

    setTimeout(() => {
        fps.end();
        expect(fps.getAverage()).to.be.above(58);
        done();
    }, 1500);
});
