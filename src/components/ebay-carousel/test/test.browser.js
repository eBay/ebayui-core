require('../../../common/test-utils/transitions');

const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

function delay(callback) {
    setTimeout(callback, 42);
}

// wait until after marko processing and requestAnimationFrame execution
function waitForUpdate(widget, callback) {
    widget.once('update', () => requestAnimationFrame(() => callback()));
}

function testControlEvent(spy) {
    expect(spy.calledOnce).to.equal(true);
    testUtils.testOriginalEvent(spy);
}

function getVisibleIndexes(items) {
    const visibleIndexes = [];
    items.forEach((item, i) => {
        if (item.fullyVisible) visibleIndexes.push(i);
    });

    return visibleIndexes;
}

function getTranslateX(el) {
    return parseInt(getComputedStyle(el).transform.match(/^matrix\((?:-?\d+, ?){4}(-?\d+)/)[1], 10) * -1;
}

describe('given the carousel is in the default state', () => {
    let widget;
    let root;

    beforeEach(() => {
        widget = renderer.renderSync().appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
    });
    afterEach(() => widget.destroy());

    describe('when it is rendered', () => {
        it('then it sets state to correct defaults', () => {
            expect(widget.state.gap).to.equal(16);
        });

        it('then it exposes state on root element', () => {
            expect(root.index).to.equal(0);
        });
    });
});

describe('given the carousel starts in the default state with items', () => {
    const input = { items: mock.sixItems };
    let widget;
    let root;
    let list;
    let prevButton;
    let nextButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        nextButton = root.querySelector('.carousel__control--next');
        prevButton = root.querySelector('.carousel__control--prev');
        waitForUpdate(widget, done);
    });
    afterEach(() => widget.destroy());

    describe('when index is updated programmatically', () => {
        let updateSpy;
        beforeEach(done => {
            updateSpy = sinon.spy();
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            root.index = 1;
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([1, 2, 3]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[1];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([1, 2, 3]);
        });
    });

    // simulate parent state change
    describe('when index is updated via state', () => {
        let updateSpy;
        beforeEach(done => {
            updateSpy = sinon.spy();
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            widget.setState('index', 1);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([1, 2, 3]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[1];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([1, 2, 3]);
        });
    });

    describe('when the previous button is clicked while disabled', () => {
        let prevSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            testUtils.triggerEvent(prevButton, 'click');
            delay(done);
        });

        it('then it does not emit the marko prev event', () => {
            expect(prevSpy.called).to.equal(false);
        });
    });

    describe('when next button is clicked', () => {
        let nextSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            testUtils.triggerEvent(nextButton, 'click');
        });

        it('then it emits the marko next event', () => testControlEvent(nextSpy));

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([3, 4, 5]);
        });

        it('then it applies a translation', () => {
            expect(getTranslateX(list)).to.equal(480);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([3, 4, 5]);
        });
    });

    describe('when index is set below zero', () => {
        let updateSpy;
        beforeEach((done) => {
            updateSpy = sinon.spy();
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            root.index = -1;
        });

        it('then index is normalized to the next index', () => {
            expect(root.index).to.equal(1);
        });

        it('then it emits the marko events', () => {
            expect(updateSpy.called).to.equal(true);
        });
    });

    describe('when index is set above the number of items', () => {
        let updateSpy;
        beforeEach((done) => {
            updateSpy = sinon.spy();
            widget.on('carousel-update', updateSpy);
            root.index = 6;
            delay(done);
        });

        it('then index is normalized to the next index', () => {
            expect(root.index).to.equal(0);
        });

        it('then it does not emit the marko events', () => {
            expect(updateSpy.calledOnce).to.equal(false);
        });
    });
});

describe('given a continuous carousel has next button clicked', () => {
    const input = { items: mock.sixItems };
    let widget;
    let root;
    let list;
    let nextButton;
    let prevButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        nextButton = root.querySelector('.carousel__control--next');
        prevButton = root.querySelector('.carousel__control--prev');
        waitForUpdate(widget, () => {
            widget.subscribeTo(list).once('transitionend', () => {
                expect(getTranslateX(list)).to.equal(480);
                done();
            });
            testUtils.triggerEvent(nextButton, 'click');
        });
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let prevSpy;
        let updateSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            testUtils.triggerEvent(prevButton, 'click');
        });

        it('then it emits the marko prev event', () => testControlEvent(prevSpy));

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([0, 1, 2]);
        });

        it('then it applies a translation back to 0', () => {
            expect(getTranslateX(list)).to.equal(0);
        });
    });

    describe('when the next button is clicked while disabled', () => {
        let nextSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            delay(done);
        });

        it('then it does not emit the marko events', () => {
            expect(nextSpy.called).to.equal(false);
            expect(updateSpy.called).to.equal(false);
        });
    });
});

describe('given a continuous carousel with few items', () => {
    const input = { items: mock.threeItems };
    let widget;
    let root;
    let list;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = document.querySelector('.carousel__list');
        waitForUpdate(widget, done);
    });
    afterEach(() => widget.destroy());

    describe('when index is set', () => {
        let updateSpy;
        beforeEach(() => {
            expect(getTranslateX(list)).to.equal(0);
            updateSpy = sinon.spy();
            widget.on('carousel-update', updateSpy);
            root.index = 1;
        });

        it('then it does not emit the marko events', () => {
            expect(updateSpy.called).to.equal(false);
        });
    });
});

describe('given a continuous carousel with many items', () => {
    const input = { items: mock.twelveItems };
    let widget;
    let root;
    let list;
    let prevButton;
    let nextButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        prevButton = root.querySelector('.carousel__control--prev');
        nextButton = root.querySelector('.carousel__control--next');
        waitForUpdate(widget, done);
    });
    afterEach(() => widget.destroy());

    describe('when next button is clicked three times', () => {
        let nextSpy;
        let updateSpy;
        beforeEach(done => {
            const listSub = widget.subscribeTo(list);
            nextSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            listSub.once('transitionend', () => {
                listSub.once('transitionend', () => {
                    listSub.once('transitionend', done);
                    testUtils.triggerEvent(nextButton, 'click');
                });
                testUtils.triggerEvent(nextButton, 'click');
            });
        });

        it('then it emits the marko events', () => {
            expect(nextSpy.callCount).to.equal(3);
            expect(updateSpy.callCount).to.equal(3);
        });

        it('then the last item is visible', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([9, 10, 11]);
        });
    });

    describe('when next button is clicked three times, and previous button is clicked once', () => {
        let prevSpy;
        let nextSpy;
        let updateSpy;
        beforeEach(done => {
            const listSub = widget.subscribeTo(list);
            prevSpy = sinon.spy();
            nextSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            listSub.once('transitionend', () => {
                testUtils.triggerEvent(nextButton, 'click');
                listSub.once('transitionend', () => {
                    testUtils.triggerEvent(nextButton, 'click');
                    listSub.once('transitionend', () => {
                        testUtils.triggerEvent(prevButton, 'click');
                        listSub.once('transitionend', done);
                    });
                });
            });
        });

        it('then it emits the marko events', () => {
            expect(prevSpy.callCount).to.equal(1);
            expect(nextSpy.callCount).to.equal(3);
            expect(updateSpy.callCount).to.equal(4);
        });

        it('then it moves to the correct index', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(root.index).to.equal(6);
            expect(visibleIndexes).to.deep.equal([6, 7, 8]);
        });
    });

    describe('when next button is clicked twice, and previous button is clicked once', () => {
        let prevSpy;
        let nextSpy;
        let updateSpy;
        beforeEach(done => {
            const listSub = widget.subscribeTo(list);
            prevSpy = sinon.spy();
            nextSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-update', updateSpy);
            listSub.once('transitionend', () => {
                listSub.once('transitionend', () => {
                    listSub.once('transitionend', done);
                    testUtils.triggerEvent(prevButton, 'click');
                });
                testUtils.triggerEvent(nextButton, 'click');
            });
            testUtils.triggerEvent(nextButton, 'click');
        });

        it('then it emits the marko events', () => {
            expect(prevSpy.callCount).to.equal(1);
            expect(nextSpy.callCount).to.equal(2);
            expect(updateSpy.callCount).to.equal(3);
        });

        it('then it moves to the correct index', () => {
            expect(root.index).to.equal(3);
        });
    });
});

describe('given a discrete carousel', () => {
    const input = { items: mock.threeItems, itemsPerSlide: 1 };
    let widget;
    let root;
    let list;
    let nextButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        nextButton = root.querySelector('.carousel__control--next');
        waitForUpdate(widget, done);
    });
    afterEach(() => widget.destroy());

    describe('when next button is clicked', () => {
        let nextSpy;
        let slideSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            testUtils.triggerEvent(nextButton, 'click');
        });

        it('then it emits the marko next event', () => testControlEvent(nextSpy));

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([1]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[1];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([1]);
        });
    });

    describe('when the window is resized', () => {
        let originalFrame;

        beforeEach(done => {
            originalFrame = widget.renderFrame;
            testUtils.triggerEvent(window, 'resize');
            delay(done);
        });

        it('then it causes the widget to render', () => {
            expect(widget.renderFrame).to.not.equal(originalFrame);
        });
    });
});

describe('given a discrete carousel has next button clicked', () => {
    const input = { items: mock.threeItems, itemsPerSlide: 1 };
    let widget;
    let root;
    let list;
    let nextButton;
    let prevButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        nextButton = root.querySelector('.carousel__control--next');
        prevButton = root.querySelector('.carousel__control--prev');
        waitForUpdate(widget, () => {
            widget.subscribeTo(list).once('transitionend', () => {
                const { offsetLeft } = list.children[1];
                expect(getTranslateX(list)).to.equal(offsetLeft);
                done();
            });
            testUtils.triggerEvent(nextButton, 'click');
        });
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let prevSpy;
        let slideSpy;
        let updateSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            slideSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            testUtils.triggerEvent(prevButton, 'click');
        });

        it('then it emits the marko prev event', () => testControlEvent(prevSpy));

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(1);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([0]);
        });

        it('then it applies a translation back to 0', () => {
            expect(getTranslateX(list)).to.equal(0);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([0]);
        });
    });
});

describe('given a discrete carousel with half width items', () => {
    const input = { itemsPerSlide: 2, items: mock.sixItems };
    let widget;
    let root;
    let list;
    let nextButton;
    let nextSlideDot;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        nextButton = root.querySelector('.carousel__control--next');
        nextSlideDot = root.querySelector('[data-slide="1"]');
        waitForUpdate(widget, done);
    });
    afterEach(() => widget.destroy());

    describe('when next button is clicked', () => {
        let nextSpy;
        let slideSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            widget.subscribeTo(list).once('transitionend', done);
        });

        it('then it emits the marko next event', () => testControlEvent(nextSpy));

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[2];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([2, 3]);
        });
    });

    describe('when next slide dot is clicked', () => {
        let nextSpy;
        let slideSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextSlideDot, 'click');
            widget.subscribeTo(list).once('transitionend', done);
        });

        it('then it does not emit the marko next event', () => {
            expect(nextSpy.called).to.equal(false);
        });

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[2];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([2, 3]);
        });
    });

    describe('when index is updated programmatically', () => {
        let nextSpy;
        let slideSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-update', updateSpy);
            root.index = 4;
            widget.subscribeTo(list).once('transitionend', done);
        });

        it('then it does not emit the marko next event', () => {
            expect(nextSpy.called).to.equal(false);
        });

        it('then it does not emit the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(false);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([4, 5]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[4];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([4, 5]);
        });
    });
});

describe('given an autoplay carousel in the default state', () => {
    const input = { itemsPerSlide: 2, items: mock.sixItems, autoplay: 200 };
    let widget;
    let root;
    let list;
    let pauseButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        pauseButton = root.querySelector('.carousel__pause');
        waitForUpdate(widget, done);
    });

    afterEach(() => widget.destroy());

    describe('when one autoplay interval has passed', () => {
        let nextSpy;
        let slideSpy;
        let updateSpy;

        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-update', updateSpy);
            // Wait for both update events.
            widget.subscribeTo(list).once('transitionend', done);
        });

        it('then it does not emit next or slide events', () => {
            expect(nextSpy.notCalled).to.equal(true);
            expect(slideSpy.notCalled).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[2];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([2, 3]);
        });
    });

    describe('when it is set to paused programmatically', () => {
        let updateSpy;

        beforeEach(done => {
            updateSpy = sinon.spy();

            waitForUpdate(widget, () => {
                widget.on('carousel-update', updateSpy);
                setTimeout(done, 350);
            });

            root.paused = true;
        });

        it('then it does not autoplay', () => {
            expect(updateSpy.notCalled).to.equal(true);
        });
    });

    describe('when the pause button is clicked', () => {
        let updateSpy;

        beforeEach(done => {
            updateSpy = sinon.spy();

            waitForUpdate(widget, () => {
                widget.on('carousel-update', updateSpy);
                setTimeout(done, 350);
            });

            testUtils.triggerEvent(pauseButton, 'click');
        });

        it('then it does not autoplay', () => {
            expect(updateSpy.notCalled).to.equal(true);
        });
    });
});

describe('given an autoplay carousel in the paused state', () => {
    const input = { itemsPerSlide: 2, items: mock.sixItems, autoplay: 200, paused: true };
    let widget;
    let root;
    let list;
    let playButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        playButton = root.querySelector('.carousel__play');
        waitForUpdate(widget, done);
    });

    afterEach(() => widget.destroy());

    describe('when one autoplay interval has passed', () => {
        let updateSpy;

        beforeEach(done => {
            updateSpy = sinon.spy();
            widget.on('carousel-update', updateSpy);
            setTimeout(done, 200);
        });

        it('then it does not autoplay', () => {
            expect(updateSpy.notCalled).to.equal(true);
        });
    });

    describe('when the play button is clicked', () => {
        let nextSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-update', updateSpy);
            widget.subscribeTo(list).once('transitionend', done);
            testUtils.triggerEvent(playButton, 'click');
        });

        it('then it does not emit the marko next event', () => {
            expect(nextSpy.notCalled).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            const { offsetLeft } = list.children[2];
            expect(getTranslateX(list)).to.equal(offsetLeft);
        });

        it('then it calculates item visibility correctly', () => {
            const { state: { items } } = widget;
            const visibleIndexes = getVisibleIndexes(items);
            expect(visibleIndexes).to.deep.equal([2, 3]);
        });
    });
});
