import sinon from 'sinon';
import { expect } from 'chai';
import { scrollTransition } from '../';

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

    it('does not call finish function if scroll is canceled', (done) => {
        const spy = sinon.spy();
        const cancel = scrollTransition(scrollEl, 100, spy);
        setTimeout(() => {
            cancel();
            setTimeout(() => {
                expect(spy.callCount).to.equal(0);
                done();
            }, 300);
        }, 50);
    });
});
