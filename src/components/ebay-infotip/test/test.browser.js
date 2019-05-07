const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default infotip', () => {
    let widget;
    let host;

    beforeEach(() => {
        const input = {
            host: {},
            heading: {},
            content: {}
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        host = widget.el.querySelector('.infotip__host');
    });

    afterEach(() => widget.destroy());

    thenItCanBeOpenAndClosed();

    describe('after it is rerendered', () => {
        before(() => {
            // Force rerender by passing new props.
            widget.setProps({
                host: {},
                heading: {},
                content: {}
            });
            widget.update();
        });

        thenItCanBeOpenAndClosed();
    });

    function thenItCanBeOpenAndClosed() {
        describe('when the host element is clicked', () => {
            let spy;
            beforeEach(() => {
                spy = sinon.spy();
                widget.on('tooltip-expand', spy);
                testUtils.triggerEvent(host, 'click');
            });

            test('then it emits the tooltip-expand event', () => {
                expect(spy.calledOnce).to.equal(true);
            });
        });

        describe('when the host element is clicked a second time to close', () => {
            let spy;
            beforeEach(() => {
                spy = sinon.spy();
                widget.on('tooltip-collapse', spy);
                testUtils.triggerEvent(host, 'click');
                testUtils.triggerEvent(host, 'click');
            });

            test('then it emits the tooltip-collapse event', () => {
                expect(spy.calledOnce).to.equal(true);
            });
        });
    }
});
