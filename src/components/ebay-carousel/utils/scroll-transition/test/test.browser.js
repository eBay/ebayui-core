const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
const scrollTransition = require('../');

describe('scroll-transition', () => {
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

    it('scrolls an element to an offset and calls a function once done', (done) => {
        scrollTransition(scrollEl, 100, () => {
            expect(scrollEl.scrollLeft).to.equal(100);
            done();
        });
    });

    it('cancels the transition on additional touches', (done) => {
        const spy = sinon.spy();
        setTimeout(() => {
            testUtils.triggerEvent(scrollEl, 'touchstart');
            setTimeout(() => {
                expect(scrollEl.scrollLeft).to.not.equal(0);
                expect(scrollEl.scrollLeft).to.not.equal(100);
                expect(spy.callCount).to.equal(0);
                done();
            }, 300);
        }, 50);

        scrollTransition(scrollEl, 100, spy);
    });
});
