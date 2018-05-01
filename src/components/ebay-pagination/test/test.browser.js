const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given the menu is in the default state with links', () => {
    let widget;
    let root;
    let previousButton;
    let pageItem;
    let nextButton;

    beforeEach(() => {
        widget = renderer.renderSync(mock.hijax).appendTo(document.body).getWidget();
        root = document.querySelector('nav.pagination');
        previousButton = root.querySelector('.pagination__previous');
        nextButton = root.querySelector('.pagination__next');
        pageItem = root.querySelector('.pagination__item');
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-previous', spy);
            testUtils.triggerEvent(previousButton, 'click');
        });

        test('then it emits the marko event called pagination-previous', () => {
            expect(spy.calledOnce).to.equal(true);
            expect(Object.keys(spy.args[0][0])).to.deep.equal(['el']);
        });
    });

    describe('when the next button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-next', spy);
            testUtils.triggerEvent(nextButton, 'click');
        });

        test('then it emits the marko event called pagination-next', () => {
            expect(spy.calledOnce).to.equal(true);
            expect(Object.keys(spy.args[0][0])).to.deep.equal(['el']);
        });
    });

    describe('when the page number is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-select', spy);
            testUtils.triggerEvent(pageItem, 'click');
        });

        test('then it emits the marko event called pagination-select', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(Object.keys(spy.args[0][0])).to.deep.equal(['el', 'value']);
            expect(eventData.value).to.be.equal('1');
        });
    });

    describe('when the previous button is activated through keydown', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-previous', spy);
            testUtils.triggerEvent(previousButton, 'keydown', 32);
        });

        test('then it emits the marko event called pagination-previous', () => {
            expect(spy.calledOnce).to.equal(true);
            expect(Object.keys(spy.args[0][0])).to.deep.equal(['el']);
        });
    });

    describe('when the next button is activated through keydown', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-next', spy);
            testUtils.triggerEvent(nextButton, 'keydown', 32);
        });

        test('then it emits the marko event called pagination-next', () => {
            expect(spy.calledOnce).to.equal(true);
            expect(Object.keys(spy.args[0][0])).to.deep.equal(['el']);
        });
    });

    describe('when the page number is activated through keydown', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-select', spy);
            testUtils.triggerEvent(pageItem, 'keydown', 32);
        });

        test('then it emits the marko event called pagination-select', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(Object.keys(spy.args[0][0])).to.deep.equal(['el', 'value']);
            expect(eventData.value).to.be.equal('1');
        });
    });
    describe('when an action button is activated for a hijax pagination', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy(widget, 'handleHijax');
            testUtils.triggerEvent(previousButton, 'click');
        });

        afterEach(() => widget.handleHijax.restore());

        test('then handleHijax method is called', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
