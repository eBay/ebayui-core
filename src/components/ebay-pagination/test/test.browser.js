const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

function testControlEvent(spy, el) {
    expect(spy.calledOnce).to.equal(true);
    expect(spy.getCall(0).args[0].el).to.deep.equal(el);
    testUtils.testOriginalEvent(spy);
}

function testSelectEvent(spy, el) {
    const eventData = spy.getCall(0).args[0];
    expect(spy.calledOnce).to.equal(true);
    expect(eventData.el).to.deep.equal(el);
    expect(eventData.value).to.equal('1');
    testUtils.testOriginalEvent(spy);
}

function testItemVisibility(root, start, end) {
    const pageItems = Array.from(root.querySelectorAll('li'));
    let testStart = 0;
    let testEnd = pageItems.length;
    const numVisible = pageItems.reduce((acc, item, i) => {
        if (!item.hasAttribute('hidden') && acc === 0) {
            testStart = i;
        }
        if (item.hasAttribute('hidden') && acc > 0 && testEnd === pageItems.length) {
            testEnd = i;
        }
        return item.hasAttribute('hidden') ? acc : acc + 1;
    }, 0);
    expect(testStart).to.equal(start);
    expect(testEnd).to.equal(end);
    expect(numVisible).to.equal(end - start);
}

describe('given the pagination is in the default state with links', () => {
    let widget;
    let root;
    let previousButton;
    let previousButtonInner;
    let pageItem;
    let nextButton;
    let nextButtonInner;

    beforeEach(() => {
        widget = renderer.renderSync(mock.hijax).appendTo(document.body).getWidget();
        root = document.querySelector('nav.pagination');
        previousButton = root.querySelector('.pagination__previous');
        nextButton = root.querySelector('.pagination__next');
        pageItem = root.querySelector('.pagination__item');
        nextButtonInner = nextButton.querySelector('span');
        previousButtonInner = previousButton.querySelector('span');
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-previous', spy);
            testUtils.triggerEvent(previousButton, 'click');
        });

        test('then it emits the marko event called pagination-previous', () => {
            testControlEvent(spy, previousButton);
        });
    });

    describe('when an previous button\'s inner span is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('pagination-previous', spy);
            testUtils.triggerEvent(previousButtonInner, 'click');
            setTimeout(done);
        });

        test('then it emits the pagination-previous event with correct data', () => {
            testControlEvent(spy, previousButton);
        });
    });

    describe('when the next button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-next', spy);
            testUtils.triggerEvent(nextButton, 'click');
        });

        test('then it emits the marko event called pagination-next', () => {
            testControlEvent(spy, nextButton);
        });
    });

    describe('when an next button\'s inner span is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('pagination-next', spy);
            testUtils.triggerEvent(nextButtonInner, 'click');
            setTimeout(done);
        });

        test('then it emits the pagination-next event with correct data', () => {
            testControlEvent(spy, nextButton);
        });
    });

    describe('when the page number is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-select', spy);
            testUtils.triggerEvent(pageItem, 'click');
        });

        test('then it emits the marko event called pagination-select', () => {
            testSelectEvent(spy, pageItem);
        });
    });

    describe('when the previous button is activated through keydown', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-previous', spy);
            testUtils.triggerEvent(previousButton, 'keydown', 32);
        });

        test('then it emits the marko event called pagination-previous', () => {
            testControlEvent(spy, previousButton);
        });
    });

    describe('when the next button is activated through keydown', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-next', spy);
            testUtils.triggerEvent(nextButton, 'keydown', 32);
        });

        test('then it emits the marko event called pagination-next', () => {
            testControlEvent(spy, nextButton);
        });
    });

    describe('when the page number is activated through keydown', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-select', spy);
            testUtils.triggerEvent(pageItem, 'keydown', 32);
        });

        test('then it emits the marko event called pagination-select', () => {
            testSelectEvent(spy, pageItem);
        });
    });
});

describe('given the pagination is rendered with disabled controls', () => {
    let widget;
    let root;
    let previousButton;
    let nextButton;

    beforeEach(() => {
        widget = renderer.renderSync(mock.disabledNavigation).appendTo(document.body).getWidget();
        root = document.querySelector('nav.pagination');
        previousButton = root.querySelector('.pagination__previous');
        nextButton = root.querySelector('.pagination__next');
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('pagination-previous', spy);
            testUtils.triggerEvent(previousButton, 'click');
        });

        test('then it does not emit the marko event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when the next button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('next-previous', spy);
            testUtils.triggerEvent(nextButton, 'click');
        });

        test('then it does not emit the marko event', () => {
            expect(spy.called).to.equal(false);
        });
    });
});

describe('given the pagination has the second item selected', () => {
    let widget;
    let root;

    beforeEach(() => {
        widget = renderer.renderSync(mock.basicLinks).appendTo(document.body).getWidget();
        root = document.querySelector('nav.pagination');
    });
    afterEach(() => widget.destroy());

    describe('when the component is 400px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '400px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 0 through 5', () => testItemVisibility(root, 0, 5));
    });

    describe('when the component is 550px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '550px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 0 through 7', () => testItemVisibility(root, 0, 7));
    });

    describe('when the component is 640px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '640px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 0 through 9', () => testItemVisibility(root, 0, 9));
    });
});

describe('given the pagination has the fifth item selected', () => {
    let widget;
    let root;

    beforeEach(() => {
        widget = renderer.renderSync(mock.FifthSelected).appendTo(document.body).getWidget();
        root = document.querySelector('nav.pagination');
    });
    afterEach(() => widget.destroy());

    describe('when the component is 400px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '400px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 2 through 7', () => testItemVisibility(root, 2, 7));
    });

    describe('when the component is 550px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '550px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 1 through 8', () => testItemVisibility(root, 1, 8));
    });

    describe('when the component is 640px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '640px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 0 through 9', () => testItemVisibility(root, 0, 9));
    });
});

describe('given the pagination has the eighth item selected', () => {
    let widget;
    let root;

    beforeEach(() => {
        widget = renderer.renderSync(mock.EighthSelected).appendTo(document.body).getWidget();
        root = document.querySelector('nav.pagination');
    });
    afterEach(() => widget.destroy());

    describe('when the component is 400px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '400px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 4 through 9', () => testItemVisibility(root, 4, 9));
    });

    describe('when the component is 550px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '550px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 2 through 9', () => testItemVisibility(root, 2, 9));
    });

    describe('when the component is 640px wide', () => {
        beforeEach((done) => {
            widget.el.style.width = '640px';
            testUtils.triggerEvent(window, 'resize');
            setTimeout(done, 20);
        });
        afterEach(() => widget.destroy());

        it('then it shows items 0 through 9', () => testItemVisibility(root, 0, 9));
    });
});
