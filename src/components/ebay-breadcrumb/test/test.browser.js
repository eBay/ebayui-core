const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given a basic breadcrumb', () => {
    let widget;
    let firstItem;
    let lastItem;

    beforeEach(() => {
        widget = renderer.renderSync(mock.basicItems).appendTo(document.body).getWidget();
        firstItem = document.querySelector('nav li a');
        lastItem = document.querySelector('nav li a:not([href])');
    });
    afterEach(() => widget.destroy());

    describe('when an <a> item is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('breadcrumb-select', spy);
            testUtils.triggerEvent(firstItem, 'click');
            setTimeout(done);
        });

        it('then it emits the breadcrumb-select event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            expect(spy.getCall(0).args[0].el).to.deep.equal(firstItem);
            testUtils.testOriginalEvent(spy);
        });
    });

    describe('when a <a> with no href is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('breadcrumb-select', spy);
            testUtils.triggerEvent(lastItem, 'click');
            setTimeout(done);
        });

        it('then it does not emit the breadcrumb-select event', () => {
            expect(spy.called).equal(false);
        });
    });
});
