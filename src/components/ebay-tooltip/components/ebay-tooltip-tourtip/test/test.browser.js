const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default tourtip', () => {
    let widget;
    let host;
    let closeButton;

    beforeEach(() => {
        const input = {
            type: 'tourtip',
            hosts: [{}],
            contents: [{}]
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        host = widget.el.querySelector('.tourtip__host');
        closeButton = widget.el.querySelector('.tourtip__close');
    });

    afterEach(() => widget.destroy());

    describe('when it is rerendered', () => {
        beforeEach((done) => {
            widget.once('update', () => setTimeout(done));
            widget.setStateDirty('expanded', true);
        });

        test('then it sets the expandInit state properly', () => {
            expect(widget.state.expandInit).to.equal(true);
        });
    });

    describe('when the host element is opened', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-expand', spy);
            testUtils.triggerEvent(host, 'expander-expand');
        });

        test('then it emits the marko event from expander-expand event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the host element is closed', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-collapse', spy);
            testUtils.triggerEvent(host, 'expander-collapse');
        });

        test('then it emits the marko event from expander-collapse event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the overlay element closed button is clicked', () => {
        beforeEach(() => {
            testUtils.triggerEvent(closeButton, 'click');
        });

        test('then it correctly sets the expanded state', () => {
            expect(widget.state.expanded).to.equal(false);
        });
    });
});
