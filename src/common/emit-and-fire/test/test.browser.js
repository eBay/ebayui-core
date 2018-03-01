const sinon = require('sinon');
const expect = require('chai').expect;
const emitAndFire = require('../');

const mockWidget = {
    emit: sinon.spy(),
    el: {
        dispatchEvent: sinon.spy()
    }
};

test('emits marko event and fires dom event', () => {
    emitAndFire(mockWidget, 'name');
    expect(mockWidget.emit.calledOnce).to.equal(true);
    expect(mockWidget.el.dispatchEvent.calledOnce).to.equal(true);
});
