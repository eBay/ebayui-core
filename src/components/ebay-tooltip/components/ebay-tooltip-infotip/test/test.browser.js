const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default infotip', () => {
    let widget;
    let host;
    let closeButton;

    beforeEach(() => {
        const input = {
            type: 'infotip',
            hosts: [{}],
            contents: [{}]
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        host = widget.el.querySelector('.infotip__host');
        closeButton = widget.el.querySelector('.infotip__close');
    });

    afterEach(() => widget.destroy());

    describe('when the host element is hovered', () => {
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
            testUtils.triggerEvent(host, 'expander-expand');
            testUtils.triggerEvent(closeButton, 'click');
        });

        test('then it correctly sets the expanded state', () => {
            expect(widget.state.expanded).to.equal(false);
        });
    });
});
