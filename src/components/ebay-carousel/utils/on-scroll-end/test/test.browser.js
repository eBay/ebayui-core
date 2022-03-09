import sinon from 'sinon';
import { expect } from 'chai';
import { simulateScroll, waitFrames } from '../../../../../common/test-utils/browser';
import { onScrollEnd } from '..';

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
        simulateScroll(scrollEl, 50, () => {
            setTimeout(() => {
                expect(scrollEndSpy.calledOnce).to.equal(true);
                expect(scrollEndSpy.args[0][0]).to.equal(50);
                done();
            }, 250);
        });
    });

    it('groups scroll events with additional touches', (done) => {
        const scrollEndSpy = sinon.spy();
        onScrollEnd(scrollEl, scrollEndSpy);
        setTimeout(() => {
            simulateScroll(scrollEl, 100, () => {
                setTimeout(() => {
                    expect(scrollEndSpy.calledOnce).to.equal(true);
                    expect(scrollEndSpy.args[0][0]).to.equal(100);
                    done();
                }, 250);
            });
        }, 0);
        simulateScroll(scrollEl, 50);
    });

    it('can be canceled immediately', (done) => {
        const scrollEndSpy = sinon.spy();
        const cancel = onScrollEnd(scrollEl, scrollEndSpy);
        simulateScroll(scrollEl, 100);
        waitFrames(5, () => {
            expect(scrollEndSpy.notCalled).to.equal(true);
            done();
        });

        cancel();
    });

    it('can be canceled after scrolling starts', (done) => {
        const scrollEndSpy = sinon.spy();
        const cancel = onScrollEnd(scrollEl, scrollEndSpy);
        const startLeft = scrollEl.scrollLeft;
        simulateScroll(scrollEl, 100);
        waitFrames(2, () => {
            cancel();
            waitFrames(3, () => {
                expect(scrollEndSpy.notCalled).to.equal(true);
                expect(scrollEl.scrollLeft).to.not.equal(startLeft);
                done();
            });
        });
    });
});
