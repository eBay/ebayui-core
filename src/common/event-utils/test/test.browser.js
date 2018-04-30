const sinon = require('sinon');
const expect = require('chai').expect;
const eventUtils = require('../');
const resizeUtil = eventUtils.resizeUtil;
const testUtils = require('../../test-utils/browser');

const handleActionKeydown = eventUtils.handleActionKeydown;
const handleEscapeKeydown = eventUtils.handleEscapeKeydown;
const handleUpDownArrowsKeydown = eventUtils.handleUpDownArrowsKeydown;
const preventDefaultIfHijax = eventUtils.preventDefaultIfHijax;

describe('handleActionKeydown()', () => {
    [
        { keyCode: 13 },
        { keyCode: 32 }
    ].forEach(event => {
        test(`calls callback for keyCode=${event.keyCode}`, () => {
            const callback = sinon.spy();
            handleActionKeydown(event, callback);
            expect(callback.calledOnce).to.equal(true);
        });
    });

    test('doesn\'t call callback for other keyCode', () => {
        const callback = sinon.spy();
        handleActionKeydown({ keyCode: 1 }, callback);
        expect(callback.called).to.equal(false);
    });
});

describe('handleEscapeKeydown()', () => {
    const escapeKeyCode = 27;
    test(`calls callback for keyCode=${escapeKeyCode}`, () => {
        const callback = sinon.spy();
        handleEscapeKeydown({ keyCode: escapeKeyCode }, callback);
        expect(callback.calledOnce).to.equal(true);
    });
});

describe('handleUpDownArrowsKeydown()', () => {
    [
        { keyCode: 38 },
        { keyCode: 40 }
    ].forEach(event => {
        test(`calls callback for keyCode=${event.keyCode}`, () => {
            const callback = sinon.spy();
            handleUpDownArrowsKeydown(event, callback);
            expect(callback.calledOnce).to.equal(true);
        });
    });

    test('doesn\'t call callback for other keyCode', () => {
        const callback = sinon.spy();
        handleUpDownArrowsKeydown({ keyCode: 1 }, callback);
        expect(callback.called).to.equal(false);
    });
});

describe('preventDefaultIfHijax()', () => {
    let preventDefaultSpy;
    beforeEach(() => {
        preventDefaultSpy = sinon.spy();
    });

    test('executes preventDefault if hijax', () => {
        const e = { preventDefault: preventDefaultSpy };
        preventDefaultIfHijax(e, true);
        expect(preventDefaultSpy.calledOnce).to.equal(true);
    });

    test('does not execute preventDefault if not hijax', () => {
        const e = { preventDefault: preventDefaultSpy };
        preventDefaultIfHijax(e, false);
        expect(preventDefaultSpy.called).to.equal(false);
    });
});

describe('resizeEventUtil', () => {
    test('the root element listens for a window resize, then calls a callback', (context, done) => {
        const mockCallback = sinon.spy();
        resizeUtil.addEventListener('resize', mockCallback.bind(this));
        expect(mockCallback.callCount).to.equal(0);
        testUtils.triggerEvent(window, 'resize');
        setTimeout(() => {
            expect(mockCallback.callCount).to.equal(1);
            done();
        }, 26);
    });

    test('the root element does not listen for a window resize, after eventListner is removed', (context, done) => {
        const mockCallback = sinon.spy();
        resizeUtil.addEventListener('resize', mockCallback.bind(this));
        resizeUtil.removeEventListener('resize', mockCallback.bind(this));
        expect(mockCallback.callCount).to.equal(0);
        testUtils.triggerEvent(window, 'resize');
        setTimeout(() => {
            expect(mockCallback.callCount).to.equal(0);
            done();
        }, 26);
    });
});
