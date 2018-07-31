const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

function testSelectEvent(spy, index) {
    const eventData = spy.getCall(0).args[0];
    expect(spy.calledOnce).to.equal(true);
    expect(eventData.index).to.equal(index);
}

function testSelectBehavior(itemEl) {
    expect(itemEl.getAttribute('aria-selected')).to.equal('true');
}

describe('given tabs with first item selected', () => {
    let widget;
    let root;
    let itemEls;
    let firstItemEl;
    let secondItemEl;
    let secondItemInnerEl;

    beforeEach(() => {
        widget = renderer.renderSync({ items: mock.items }).appendTo(document.body).getWidget();
        root = widget.el;
        itemEls = document.querySelectorAll('.tabs__item');
        firstItemEl = itemEls[0];
        secondItemEl = itemEls[1];
        secondItemInnerEl = secondItemEl.querySelector('span');
    });
    afterEach(() => widget.destroy());

    describe('when the first item is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(firstItemEl, 'click');
        });

        test('then it does not emit the select event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when the second item is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondItemEl, 'click');
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the item is selected', () => testSelectBehavior(secondItemEl));
    });

    describe('when the second item is selected via keyboard action button', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondItemEl, 'keydown', 32);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the item is selected', () => testSelectBehavior(secondItemEl));
    });

    describe('when the second item\'s inner content is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondItemInnerEl, 'click');
            setTimeout(done);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the item is selected', () => testSelectBehavior(secondItemEl));
    });

    describe('when the second item is selected programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            root.index = '1';
            setTimeout(done);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the item is selected', () => testSelectBehavior(secondItemEl));
    });
});
