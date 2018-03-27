const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('breadcrumb with prevent-default state', () => {
    let widget;
    let list;
    describe('when breadcrumb item is clicked', () => {
        let clickSpy;
        beforeEach((done) => {
            widget = renderer.renderSync(mock.itemsWithPreventDefault).appendTo(document.body).getWidget();
            list = document.querySelectorAll('nav li a');
            clickSpy = sinon.spy();
            widget.on('breadcrumb-click', clickSpy);
            testUtils.triggerEvent(list[0], 'click');
            setTimeout(done);
        });
        afterEach(() => widget.destroy());

        it('then it emits the breadcrumb-click event', () => {
            expect(clickSpy.calledOnce).to.equal(true);
        });
    });
});

describe('breadcrumb with prevent-default is not set', () => {
    let widget;
    let list;
    describe('when breadcrumb item is clicked', () => {
        let clickSpy;
        beforeEach((done) => {
            widget = renderer.renderSync(mock.items).appendTo(document.body).getWidget();
            list = document.querySelectorAll('nav li a');
            clickSpy = sinon.spy();
            widget.on('breadcrumb-click', clickSpy);
            testUtils.triggerEvent(list[0], 'click');
            setTimeout(done);
        });
        afterEach(() => widget.destroy());

        it('then it should not emit the breadcrumb-click event', () => {
            expect(clickSpy.calledOnce).to.equal(false);
        });
    });
});
