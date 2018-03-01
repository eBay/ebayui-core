const sinon = require('sinon');
const expect = require('chai').expect;
const eventUtils = require('../');

const handleActionKeydown = eventUtils.handleActionKeydown;
const handleEscapeKeydown = eventUtils.handleEscapeKeydown;
const handleUpDownArrowsKeydown = eventUtils.handleUpDownArrowsKeydown;

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
