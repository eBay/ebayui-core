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

function testSelectBehavior(headingEl, done) {
    setTimeout(() => {
        expect(headingEl.getAttribute('aria-selected')).to.equal('true');
        done();
    }, 10);
}

function testFakeSelectBehavior(headingEl, done) {
    setTimeout(() => {
        expect(headingEl.classList.contains('fake-tabs__item--current')).to.equal(true);
        expect(headingEl.querySelector('a').getAttribute('aria-current')).to.equal('page');
        done();
    }, 10);
}

describe('given tabs with first heading selected', () => {
    let widget;
    let root;
    let headingEls;
    let firstHeadingEl;
    let secondHeadingEl;
    let thirdHeadingEl;
    let secondHeadingInnerEl;

    beforeEach(() => {
        widget = renderer.renderSync({ headings: mock.headings }).appendTo(document.body).getWidget();
        root = widget.el;
        headingEls = document.querySelectorAll('.tabs__item');
        firstHeadingEl = headingEls[0];
        secondHeadingEl = headingEls[1];
        thirdHeadingEl = headingEls[2];
        secondHeadingInnerEl = secondHeadingEl.querySelector('span');
    });
    afterEach(() => widget.destroy());

    describe('when the first heading is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(firstHeadingEl, 'click');
        });

        test('then it does not emit the select event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when the second heading is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondHeadingEl, 'click');
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testSelectBehavior(secondHeadingEl, done));
    });

    describe('when the second heading is selected via keyboard action button', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondHeadingEl, 'keydown', 32);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testSelectBehavior(secondHeadingEl, done));
    });

    describe('when the second heading\'s inner content is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondHeadingInnerEl, 'click');
            setTimeout(done);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testSelectBehavior(secondHeadingEl, done));
    });

    describe('when the second heading is selected programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            root.index = '1';
            setTimeout(done);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testSelectBehavior(secondHeadingEl, done));
    });

    describe('when the second heading is selected via keyboard right arrow key', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(firstHeadingEl, 'keydown', 39);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testSelectBehavior(secondHeadingEl, done));
    });

    describe('when the third heading is selected via keyboard left arrow key', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(firstHeadingEl, 'keydown', 37);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 2));
        test('then the heading is selected', (context, done) => testSelectBehavior(thirdHeadingEl, done));
    });
});

describe('given tabs with third heading selected', () => {
    let widget;
    let headingEls;
    let firstHeadingEl;
    let secondHeadingEl;
    let thirdHeadingEl;

    beforeEach(() => {
        widget = renderer.renderSync({
            headings: mock.headings,
            index: 2
        }).appendTo(document.body).getWidget();
        headingEls = document.querySelectorAll('.tabs__item');
        firstHeadingEl = headingEls[0];
        secondHeadingEl = headingEls[1];
        thirdHeadingEl = headingEls[2];
    });
    afterEach(() => widget.destroy());

    describe('when the second heading is selected via keyboard left arrow key', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(thirdHeadingEl, 'keydown', 37);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testSelectBehavior(secondHeadingEl, done));
    });

    describe('when the first heading is selected via keyboard right arrow key', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(thirdHeadingEl, 'keydown', 39);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 0));
        test('then the heading is selected', (context, done) => testSelectBehavior(firstHeadingEl, done));
    });
});

describe('given fake tabs with first heading selected', () => {
    let widget;
    let root;
    let secondHeadingEl;

    beforeEach(() => {
        const input = { fake: true, headings: mock.fakeHeadings, panels: mock.panels };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = widget.el;
        secondHeadingEl = document.querySelectorAll('.fake-tabs__item')[1];
    });
    afterEach(() => widget.destroy());

    describe('when the second heading is selected programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            root.index = '1';
            setTimeout(done);
        });

        test('then it emits the select event with correct data', () => testSelectEvent(spy, 1));
        test('then the heading is selected', (context, done) => testFakeSelectBehavior(secondHeadingEl, done));
    });
});
