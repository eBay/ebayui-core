const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

describe('given the notice is in the default state', () => {
    let widget;
    let root;
    let button;

    beforeEach(() => {
        widget = renderer.renderSync({ type: 'page', dismissible: true }).appendTo(document.body).getWidget();
        root = document.querySelector('section.page-notice');
        button = root.querySelector('.page-notice__close');
    });
    afterEach(() => widget.destroy());

    describe('when the dismiss button is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('notice-hide', spy);
            testUtils.triggerEvent(button, 'click');
            setTimeout(done);
        });
        test('then root not present in the DOM', () => {
            expect(document.querySelector('section.page-notice')).to.equal(null);
        });

        test('then it emits the marko event from notice-hide', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the widget is dismissed through hidden property', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('notice-hide', spy);
            root.hidden = true;
            setTimeout(done);
        });

        test('then root not present in the DOM', () => {
            expect(document.querySelector('section.page-notice')).to.equal(null);
        });

        test('then it emits the marko event from notice-hide', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given the notice is in the hidden state', () => {
    let widget;
    let root;
    beforeEach(() => {
        widget = renderer.renderSync({ type: 'page', dismissible: true }).appendTo(document.body).getWidget();
        root = document.querySelector('section.page-notice');
        root.hidden = true;
    });
    afterEach(() => widget.destroy());
    describe('when the widget is undismissed through hidden property', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('notice-show', spy);
            root.hidden = false;
            setTimeout(done);
        });

        test('then root is present in the DOM', () => {
            expect(document.querySelector('.page-notice')).to.not.equal(null);
        });

        test('then it emits the marko event from notice-show', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

