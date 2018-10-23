const sinon = require('sinon');
const expect = require('chai').expect;
const observer = require('../');

function createMock() {
    return {
        mockWidget: {
            el: {},
            state: {},
            setState: sinon.spy(),
            setStateDirty: sinon.spy()
        },
        mockCallback: sinon.spy()
    };
}

describe('observeRoot()', () => {
    test('listens for a property change, then calls a callback', () => {
        const { mockWidget, mockCallback } = createMock();
        observer.observeRoot(mockWidget, ['name'], mockCallback);
        mockWidget.el.name = 'test';
        expect(mockWidget.el.name).to.equal(mockWidget.state.name);
        expect(mockWidget.setState.calledOnce).to.equal(true);
        expect(mockCallback.calledOnce).to.equal(true);
    });
});

describe('observeInner()', () => {
    test('listens for a property change and calls setStateDirty() when specified', () => {
        const { mockWidget, mockCallback } = createMock();
        observer.observeInner(mockWidget, mockWidget.el, 'name', 'path', true, mockCallback);
        mockWidget.el.name = 'test';
        expect(mockWidget.el.name).to.equal(mockWidget.state.path.name);
        expect(mockWidget.setState.called).to.equal(false);
        expect(mockWidget.setStateDirty.calledOnce).to.equal(true);
        expect(mockCallback.calledOnce).to.equal(true);
    });
    test('listens for a property change and does not call setStateDirty() when specified', () => {
        const { mockWidget, mockCallback } = createMock();
        observer.observeInner(mockWidget, mockWidget.el, 'name', 'path', false, mockCallback);
        mockWidget.el.name = 'test';
        expect(mockWidget.el.name).to.equal(mockWidget.state.path.name);
        expect(mockWidget.setState.called).to.equal(false);
        expect(mockWidget.setStateDirty.called).to.equal(false);
        expect(mockCallback.calledOnce).to.equal(true);
    });
});
