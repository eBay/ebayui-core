const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default tourtip', () => {
    let widget;
    let closeButton;

    beforeEach(() => {
        const input = {
            host: {},
            heading: {},
            content: {}
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        closeButton = widget.el.querySelector('.tourtip__close');
    });

    afterEach(() => widget.destroy());

    thenItCanBeClosed();

    describe('after it is rerendered', () => {
        before(() => {
            widget.setStateDirty('test');
            widget.update();
        });

        thenItCanBeClosed();
    });

    function thenItCanBeClosed() {
        describe('when the closeButton element is closed', () => {
            let spy;
            beforeEach(() => {
                spy = sinon.spy();
                widget.on('tooltip-collapse', spy);
                testUtils.triggerEvent(closeButton, 'click');
            });

            test('then it emits the tooltip-collapse event', () => {
                expect(spy.calledOnce).to.equal(true);
            });
        });
    }
});
