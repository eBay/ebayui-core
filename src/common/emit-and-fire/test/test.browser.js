const sinon = require('sinon');
const expect = require('chai').expect;
const emitAndFire = require('../');

const originalCustomEvent = window.CustomEvent;
function testEventCalls() {
    const mockWidget = {
        emit: sinon.spy(),
        el: {
            dispatchEvent: sinon.spy()
        }
    };
    emitAndFire(mockWidget, 'name');
    expect(mockWidget.emit.calledOnce).to.equal(true);
    expect(mockWidget.el.dispatchEvent.calledOnce).to.equal(true);
}

afterEach(() => {
    window.CustomEvent = originalCustomEvent;
});

test('emits marko event and fires dom event', () => {
    testEventCalls();
});

test('creates event if CustomEvent is not in window', () => {
    window.CustomEvent = undefined;
    testEventCalls();
});

test('creates event if CustomEvent is not a function', () => {
    window.CustomEvent = {};
    testEventCalls();
});
