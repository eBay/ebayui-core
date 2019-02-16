const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

let widget;

function renderAndGetRoot(input) {
    widget = renderer.renderSync(input).appendTo(document.body).getWidget('ebay-button');
    return document.querySelector('.btn--pill');
}

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

        test('the widget has a pressed state', () => {
            expect(widget.state.pressed).to.equal(true);
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });

    describe('when pill is clicked a second time', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'click');
            testUtils.triggerEvent(root, 'click');
        });

        test('the widget does not have a pressed state', () => {
            expect(widget.state.pressed).to.equal(false);
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

describe('given pill is fake and pressed', () => {
    let root; // eslint-disable-line
    beforeEach(() => {
        root = renderAndGetRoot({
            href: 'https://ebay.com',
            pressed: true
        });
    });
    afterEach(() => widget.destroy());

    test('the pill has a11y text for the active state', () => {
        expect(widget.el.querySelectorAll('.pill__active-text').length).to.equal(1);
    });
});
