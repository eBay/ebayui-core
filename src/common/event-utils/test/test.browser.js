import sinon from 'sinon';
import { expect } from 'chai';
import { fireEvent } from '@marko/testing-library';
import { waitFrames } from '../../test-utils/browser';
import * as eventUtils from '../';

const resizeUtil = eventUtils.resizeUtil;
const handleActionKeydown = eventUtils.handleActionKeydown;
const handleEscapeKeydown = eventUtils.handleEscapeKeydown;
const handleUpDownArrowsKeydown = eventUtils.handleUpDownArrowsKeydown;
const handleLeftRightArrowsKeydown = eventUtils.handleLeftRightArrowsKeydown;
const preventDefaultIfHijax = eventUtils.preventDefaultIfHijax;

describe('handleActionKeydown()', () => {
    [{ keyCode: 13 }, { keyCode: 32 }].forEach((event) => {
        it(`calls callback for keyCode=${event.keyCode}`, () => {
            const callback = sinon.spy();
            handleActionKeydown(event, callback);
            expect(callback.calledOnce).to.equal(true);
        });
    });

    it("doesn't call callback for other keyCode", () => {
        const callback = sinon.spy();
        handleActionKeydown({ keyCode: 1 }, callback);
        expect(callback.called).to.equal(false);
    });
});

describe('handleEscapeKeydown()', () => {
    const escapeKeyCode = 27;
    it(`calls callback for keyCode=${escapeKeyCode}`, () => {
        const callback = sinon.spy();
        handleEscapeKeydown({ keyCode: escapeKeyCode }, callback);
        expect(callback.calledOnce).to.equal(true);
    });
});

describe('handleUpDownArrowsKeydown()', () => {
    [{ keyCode: 38 }, { keyCode: 40 }].forEach((event) => {
        it(`calls callback for keyCode=${event.keyCode}`, () => {
            const callback = sinon.spy();
            handleUpDownArrowsKeydown(event, callback);
            expect(callback.calledOnce).to.equal(true);
        });
    });

    it("doesn't call callback for other keyCode", () => {
        const callback = sinon.spy();
        handleUpDownArrowsKeydown({ keyCode: 1 }, callback);
        expect(callback.called).to.equal(false);
    });
});

describe('handleLeftRightArrowsKeydown()', () => {
    [{ keyCode: 37 }, { keyCode: 39 }].forEach((event) => {
        it(`calls callback for keyCode=${event.keyCode}`, () => {
            const callback = sinon.spy();
            handleLeftRightArrowsKeydown(event, callback);
            expect(callback.calledOnce).to.equal(true);
        });
    });

    it("doesn't call callback for other keyCode", () => {
        const callback = sinon.spy();
        handleLeftRightArrowsKeydown({ keyCode: 1 }, callback);
        expect(callback.called).to.equal(false);
    });
});

describe('preventDefaultIfHijax()', () => {
    let preventDefaultSpy;
    beforeEach(() => {
        preventDefaultSpy = sinon.spy();
    });

    it('executes preventDefault if hijax', () => {
        const e = { preventDefault: preventDefaultSpy };
        preventDefaultIfHijax(e, true);
        expect(preventDefaultSpy.calledOnce).to.equal(true);
    });

    it('does not execute preventDefault if not hijax', () => {
        const e = { preventDefault: preventDefaultSpy };
        preventDefaultIfHijax(e, false);
        expect(preventDefaultSpy.called).to.equal(false);
    });
});

describe('resizeEventUtil', () => {
    it('the root element listens for a window resize, then calls a callback', (done) => {
        const mockCallback = sinon.spy();
        resizeUtil.addEventListener('resize', mockCallback.bind(this));
        expect(mockCallback.callCount).to.equal(0);
        fireEvent(window, new Event('resize'));
        const fn = () => {
            expect(mockCallback.callCount).to.equal(1);
            done();
        };

        waitFrames(2, fn);
    });

    it('the root element does not listen for a window resize, after eventListener is removed', (done) => {
        const mockCallback = sinon.spy();
        resizeUtil.addEventListener('resize', mockCallback.bind(this));
        resizeUtil.removeEventListener('resize', mockCallback.bind(this));
        expect(mockCallback.callCount).to.equal(0);
        fireEvent(window, new Event('resize'));
        const fn = () => {
            expect(mockCallback.callCount).to.equal(0);
            done();
        };
        waitFrames(2, fn);
    });
});
