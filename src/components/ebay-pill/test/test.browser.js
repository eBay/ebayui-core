const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

let widget;

function renderAndGetRoot(input) {
    widget = renderer.renderSync(input).appendTo(document.body).getWidget('ebay-button');
    return document.querySelector('.btn--pill');
}

// TODO: spy on lasso-ed emitAndFire?

describe('given pill is enabled', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot();
    });
    afterEach(() => widget.destroy());

    describe('when pill is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'click');
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });

    describe('when pill is clicked via action key', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'keydown', 32);
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });

    describe('when escape key is pressed', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-escape', spy);
            testUtils.triggerEvent(root, 'keydown', 27);
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });
});

describe('given pill is disabled', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ disabled: true });
    });
    afterEach(() => widget.destroy());

    describe('when pill is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'click');
        });

        test('then it doesn\'t emit the event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when escape key is pressed', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-escape', spy);
            testUtils.triggerEvent(root, 'keydown', 27);
        });

        test('then it doesn\'t emit the event', () => {
            expect(spy.called).to.equal(false);
        });
    });
});
