const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given a basic breadcrumb', () => {
    let widget;
    let firstItem;

    beforeEach(() => {
        widget = renderer.renderSync(mock.basicItems).appendTo(document.body).getWidget();
        firstItem = document.querySelectorAll('nav li a')[0];
    });
    afterEach(() => widget.destroy());

    describe('when item is clicked', () => {
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
});
