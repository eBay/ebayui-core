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
            widget.on('notice-close', spy);
            testUtils.triggerEvent(button, 'click');
            setTimeout(done);
        });
        test('then root not present in the DOM', () => {
            expect(document.querySelector('section.page-notice')).to.equal(null);
        });

        test('then it emits the marko event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
