const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default tourtip', () => {
    let widget;
    let closeButton;
    let expanderRoot;

    beforeEach(() => {
        const input = {
            host: {},
            heading: {},
            content: {}
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        closeButton = widget.el.querySelector('.tourtip__close');
        expanderRoot = widget.el.querySelector('.tourtip');
    });

    afterEach(() => widget.destroy());

    thenItIsOpen();
    thenItCanBeClosed();

    describe('after it is rerendered', () => {
        before(() => {
            widget.setProps({
                host: {},
                heading: {},
                content: {},
                test: 1
            });
        });

        thenItIsOpen();
        thenItCanBeClosed();
    });

    function thenItIsOpen() {
        test('then it is open', () => {
            expect(expanderRoot.className).to.equal('tourtip tourtip--expanded');
        });
    }

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

            test('then it is closed', () => {
                expect(expanderRoot.className).to.equal('tourtip');
            });
        });
    }
});
