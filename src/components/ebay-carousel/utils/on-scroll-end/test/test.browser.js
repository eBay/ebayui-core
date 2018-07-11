const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
const onScrollEnd = require('../');

describe('scroll-end', () => {
    let scrollEl;

    before(() => {
        scrollEl = document.createElement('div');
        scrollEl.style.overflowX = 'scroll';
        scrollEl.innerHTML = `<div style="width: 200%; border: 25px dashed #000;"></div>`;
        document.body.appendChild(scrollEl);
    });

    beforeEach(() => {
        scrollEl.scrollLeft = 0;
    });

    after(() => {
        document.body.removeChild(scrollEl);
    });

    it('calls a function when a scroll has ended', (done) => {
        const scrollEndSpy = sinon.spy();
        onScrollEnd(scrollEl, scrollEndSpy);
        simulateScroll(scrollEl, 50);
        setTimeout(() => {
            simulateScroll(scrollEl, 100);
            setTimeout(() => {
                expect(scrollEndSpy.calledTwice).to.equal(true);
                expect(scrollEndSpy.args[0][0]).to.equal(50);
                expect(scrollEndSpy.args[1][0]).to.equal(100);
                done();
            }, 300);
        }, 150);
    });

    it('groups scroll events with additional touches', (done) => {
        const scrollEndSpy = sinon.spy();
        onScrollEnd(scrollEl, scrollEndSpy);
        simulateScroll(scrollEl, 50);
        setTimeout(() => {
            simulateScroll(scrollEl, 100);
            setTimeout(() => {
                expect(scrollEndSpy.calledOnce).to.equal(true);
                expect(scrollEndSpy.args[0][0]).to.equal(100);
                done();
            }, 150);
        }, 0);
    });
});

/**
 * Simulates a touch based scroll event over 100ms.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The new scrollLeft for the element.
 */
function simulateScroll(el, to) {
    const { scrollLeft } = el;
    const distance = to - scrollLeft;
    const duration = 10;
    testUtils.triggerEvent(el, 'touchstart');
    requestAnimationFrame(startTime => {
        (function animate(curTime) {
            const delta = curTime - startTime;
            if (delta > duration) {
                testUtils.triggerEvent(el, 'touchend');
                el.scrollLeft = to;
                return;
            }

            testUtils.triggerEvent(el, 'touchmove');
            el.scrollLeft = (delta / duration) * distance + scrollLeft;
            requestAnimationFrame(animate);
        }());
    });
}
