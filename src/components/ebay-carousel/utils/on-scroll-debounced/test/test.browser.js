import sinon from 'sinon';
import { expect } from 'chai';
import { simulateScroll } from '../../../../../common/test-utils/browser';
import { onScrollDebounced } from '..';

describe('scroll-debounced', () => {
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

    it('calls a handler at most every 600ms', (done) => {
        const scrollSpy = sinon.spy();
        onScrollDebounced(scrollEl, scrollSpy);
        simulateScroll(scrollEl, 50, () => {
            simulateScroll(scrollEl, 100, () => {
                setTimeout(() => {
                    expect(scrollSpy.calledOnce).to.equal(true);
                    done();
                }, 400);
            });
        });
    });

    it('can be canceled', (done) => {
        const scrollEndSpy = sinon.spy();
        const cancel = onScrollDebounced(scrollEl, scrollEndSpy);
        simulateScroll(scrollEl, 100);
        setTimeout(() => {
            expect(scrollEndSpy.notCalled).to.equal(true);
            done();
        }, 700);

        cancel();
    });
});
