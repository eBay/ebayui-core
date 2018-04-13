const sinon = require('sinon');
const expect = require('chai').expect;
const resizeObserver = require('../');
const testUtils = require('../../test-utils/browser');

test('the root element listens for a window resize, then calls a callback', (context, done) => {
    const mockCallback = sinon.spy();
    resizeObserver.addEventListener('resize', mockCallback.bind(this));
    testUtils.triggerEvent(window, 'resize');
    expect(mockCallback.callCount).to.equal(0);
    setTimeout(() => {
        expect(mockCallback.callCount).to.equal(1);
        done();
    }, 26);
});


test('the root element does not listen for a window resize, after eventListner is removed', (context, done) => {
    const mockCallback = sinon.spy();
    resizeObserver.addEventListener('resize', mockCallback.bind(this));
    resizeObserver.removeEventListener('resize', mockCallback.bind(this));
    testUtils.triggerEvent(window, 'resize');
    expect(mockCallback.callCount).to.equal(0);
    setTimeout(() => {
        expect(mockCallback.callCount).to.equal(0);
        done();
    }, 26);
});
