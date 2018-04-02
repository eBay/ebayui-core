const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('breadcrumb should emit breadcrumb-click event', () => {
    let widget;
    let list;
    describe('when breadcrumb item is clicked', () => {
        let clickSpy;
        widget = renderer.renderSync(mock.basicItems).appendTo(document.body).getWidget();
        beforeEach((done) => {
            list = document.querySelectorAll('nav li a');
            clickSpy = sinon.spy();
            widget.on('breadcrumb-click', clickSpy);
            testUtils.triggerEvent(list[0], 'click');
            setTimeout(done);
        });
        afterEach(() => widget.destroy());

        it('then it emits the breadcrumb-click event', () => {
            expect(clickSpy.calledOnce).to.equal(true);
            expect(Object.keys(clickSpy.args[0][0])).to.deep.equal(['event', 'currentTarget']);
        });
    });
});
