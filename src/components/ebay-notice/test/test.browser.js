const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

describe('given the notice is in the default state', () => {
    let widget;
    let button;

    beforeEach(() => {
        widget = renderer.renderSync({ type: 'page', dismissible: true }).appendTo(document.body).getWidget();
        button = document.querySelector('.page-notice__close');
    });
    afterEach(() => widget.destroy());

    describe('when the dismiss button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('notice-dismissed', spy);
            testUtils.triggerEvent(button, 'click');
        });

        test('then it emits the marko event from notice-dismissed', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
