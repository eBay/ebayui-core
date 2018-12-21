const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default tooltip overlay', () => {
    let widget;
    let closeButton;

    beforeEach(() => {
        const input = {
            type: 'infotip',
            tooltipId: 'fakeID-1',
            heading: {},
            content: {}
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        closeButton = widget.el.querySelector('.infotip__close');
    });

    afterEach(() => widget.destroy());

    describe('when the close button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-close', spy);
            testUtils.triggerEvent(closeButton, 'click');
        });

        test('then it emits the marko event from button click', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
