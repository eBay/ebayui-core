const sinon = require('sinon');
const expect = require('chai').expect;
const observer = require('../');

const mockWidget = {
    el: {},
    state: {},
    setState: sinon.spy()
};

const mockCallback = sinon.spy();

test('the root element observer listens for a property change, then calls a callback', () => {
    observer.observeRoot(mockWidget, ['name'], mockCallback);
    mockWidget.el.name = 'test';
    expect(mockWidget.setState.calledOnce).to.equal(true);
    expect(mockCallback.calledOnce).to.equal(true);
});
