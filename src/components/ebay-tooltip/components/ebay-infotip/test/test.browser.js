const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
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
});
