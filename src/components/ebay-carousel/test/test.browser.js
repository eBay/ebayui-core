const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');
const styleOverrides = document.createElement('style');
// No need to run the full length animation when testing the carousel.
styleOverrides.innerHTML = `.carousel__list { transition: transform 0.05s linear; }`;
document.head.appendChild(styleOverrides);

// wait until after marko processing and requestAnimationFrame execution
function delay(callback) {
    setTimeout(callback, 30);
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
    return parseInt(el.style.transform.match(/translate3d\(-?(\d+)/)[1], 10);
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
        delay(done);
    });
    afterEach(() => widget.destroy());

    describe('when index is updated programmatically', () => {
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            root.index = 1;
            widget.subscribeTo(list).once('transitionend', done);
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            widget.setState('index', 1);
            widget.subscribeTo(list).once('transitionend', done);
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            widget.subscribeTo(list).once('transitionend', done);
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
        let moveSpy;
        let updateSpy;
        beforeEach((done) => {
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            root.index = -1;
            widget.subscribeTo(list).once('transitionend', done);
        });

        it('then index is normalized to the next index', () => {
            expect(root.index).to.equal(1);
        });

        it('then it emits the marko events', () => {
            expect(updateSpy.called).to.equal(true);
        });
    });

    describe('when index is set above the number of items', () => {
        let moveSpy;
        let updateSpy;
        beforeEach((done) => {
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-move', moveSpy);
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
        delay(() => {
            testUtils.triggerEvent(nextButton, 'click');
            widget.subscribeTo(list).once('transitionend', () => {
                expect(getTranslateX(list)).to.equal(480);
                done();
            });
        });
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let prevSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(prevButton, 'click');
            widget.subscribeTo(list).once('transitionend', done);
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
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
        delay(done);
    });
    afterEach(() => widget.destroy());

    describe('when index is set', () => {
        let moveSpy;
        let updateSpy;
        beforeEach(() => {
            expect(getTranslateX(list)).to.equal(0);
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-move', moveSpy);
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
        delay(done);
    });
    afterEach(() => widget.destroy());

    describe('when next button is clicked three times', () => {
        let nextSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            const listSub = widget.subscribeTo(list);
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            listSub.once('transitionend', () => {
                testUtils.triggerEvent(nextButton, 'click');
                listSub.once('transitionend', () => {
                    testUtils.triggerEvent(nextButton, 'click');
                    listSub.once('transitionend', done);
                });
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            const listSub = widget.subscribeTo(list);
            prevSpy = sinon.spy();
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            const listSub = widget.subscribeTo(list);
            prevSpy = sinon.spy();
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            listSub.once('transitionend', () => {
                testUtils.triggerEvent(nextButton, 'click');
                listSub.once('transitionend', () => {
                    testUtils.triggerEvent(prevButton, 'click');
                    listSub.once('transitionend', done);
                });
            });
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
        delay(done);
    });
    afterEach(() => widget.destroy());

    describe('when next button is clicked', () => {
        let nextSpy;
        let slideSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-move', moveSpy);
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
        delay(() => {
            testUtils.triggerEvent(nextButton, 'click');
            widget.subscribeTo(list).once('transitionend', () => {
                const { offsetLeft } = list.children[1];
                expect(getTranslateX(list)).to.equal(offsetLeft);
                done();
            });
        });
    });
    afterEach(() => widget.destroy());

    describe('when the previous button is clicked', () => {
        let prevSpy;
        let slideSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            slideSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(prevButton, 'click');
            widget.subscribeTo(list).once('transitionend', done);
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
        delay(done);
    });
    afterEach(() => widget.destroy());

    describe('when next button is clicked', () => {
        let nextSpy;
        let slideSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-move', moveSpy);
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-move', moveSpy);
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
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            nextSpy = sinon.spy();
            slideSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-slide', slideSpy);
            widget.on('carousel-move', moveSpy);
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
