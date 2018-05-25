const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

const privates = renderer.privates;
const constants = privates.constants;
const containerWidth = 800; // puppeteer default

// wait until after marko processing and requestAnimationFrame execution
function delay(callback) {
    setTimeout(callback, 30);
}

function testControlEvent(spy) {
    expect(spy.calledOnce).to.equal(true);
    testUtils.testOriginalEvent(spy);
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
            expect(widget.state.type).to.equal('continuous');
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
            delay(done);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([1, 2, 3]);
        });

        it('then it applies a translation', () => {
            const translation = mock.itemWidth + constants.margin;
            expect(list.style.transform).to.equal(`translateX(-${translation}px)`);
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(1);
            expect(widget.lastVisibleIndex).to.equal(3);
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
            delay(done);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([1, 2, 3]);
        });

        it('then it applies a translation', () => {
            const translation = mock.itemWidth + constants.margin;
            expect(list.style.transform).to.equal(`translateX(-${translation}px)`);
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(1);
            expect(widget.lastVisibleIndex).to.equal(3);
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
            delay(done);
        });

        it('then it emits the marko next event', () => testControlEvent(nextSpy));

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([3, 4, 5]);
        });

        it('then it applies a translation', () => {
            expect(list.style.transform).to.equal('translateX(-480px)');
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(3);
            expect(widget.lastVisibleIndex).to.equal(5);
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
            delay(done);
        });

        it('then index is normalized to 0', () => {
            expect(root.index).to.equal(0);
        });

        it('then it does not emit the marko events', () => {
            expect(moveSpy.called).to.equal(false);
            expect(updateSpy.called).to.equal(false);
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
            root.index = 99;
            delay(done);
        });

        it('then index is normalized to lastIndex', () => {
            expect(root.index).to.equal(widget.state.lastIndex);
        });

        it('then it emits the marko events', () => {
            expect(moveSpy.calledOnce).to.equal(true);
            expect(updateSpy.calledOnce).to.equal(true);
        });
    });

    describe('when the window is resized', () => {
        let spy;
        beforeEach(done => {
            spy = sinon.spy(widget, 'calculateWidths');
            testUtils.triggerEvent(window, 'resize');
            delay(done);
        });
        afterEach(() => widget.calculateWidths.restore());

        it('then it executes the calculateWidths', () => {
            expect(spy.calledOnce).to.equal(true);
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
            delay(() => {
                expect(list.style.transform).to.equal('translateX(-480px)');
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
            delay(done);
        });

        it('then it emits the marko prev event', () => testControlEvent(prevSpy));

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([0, 1, 2]);
        });

        it('then it applies a translation back to 0', () => {
            expect(list.style.transform).to.equal('translateX(0px)');
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

        it('then it does not emits the marko events', () => {
            expect(nextSpy.called).to.equal(false);
            expect(moveSpy.called).to.equal(false);
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
            expect(list.style.transform).to.equal(`translateX(0px)`);
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            root.index = 1;
        });

        it('then it does not emit the marko events', () => {
            expect(moveSpy.called).to.equal(false);
            expect(updateSpy.called).to.equal(false);
        });
    });
});

describe('given a continuous carousel with many items', () => {
    const input = { items: mock.twelveItems };
    let widget;
    let root;
    let prevButton;
    let nextButton;

    beforeEach(done => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
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
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            delay(() => {
                testUtils.triggerEvent(nextButton, 'click');
                delay(() => {
                    testUtils.triggerEvent(nextButton, 'click');
                    delay(done);
                });
            });
        });

        it('then it emits the marko events', () => {
            expect(nextSpy.callCount).to.equal(3);
            expect(moveSpy.callCount).to.equal(3);
            expect(updateSpy.callCount).to.equal(3);
        });

        it('then the last item is visible', () => {
            expect(widget.firstVisibleIndex).to.equal(9);
            expect(widget.lastVisibleIndex).to.equal(mock.twelveItems.length - 1);
        });
    });

    describe('when next button is clicked three times, and previous button is clicked once', () => {
        let prevSpy;
        let nextSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            delay(() => {
                testUtils.triggerEvent(nextButton, 'click');
                delay(() => {
                    testUtils.triggerEvent(nextButton, 'click');
                    delay(() => {
                        testUtils.triggerEvent(prevButton, 'click');
                        delay(done);
                    });
                });
            });
        });

        it('then it emits the marko events', () => {
            expect(prevSpy.callCount).to.equal(1);
            expect(nextSpy.callCount).to.equal(3);
            expect(moveSpy.callCount).to.equal(4);
            expect(updateSpy.callCount).to.equal(4);
        });

        it('then it moves to the correct index', () => {
            expect(root.index).to.equal(6);
            expect(widget.firstVisibleIndex).to.equal(6);
            expect(widget.lastVisibleIndex).to.equal(8);
        });
    });

    describe('when next button is clicked twice, and previous button is clicked once', () => {
        let prevSpy;
        let nextSpy;
        let moveSpy;
        let updateSpy;
        beforeEach(done => {
            prevSpy = sinon.spy();
            nextSpy = sinon.spy();
            moveSpy = sinon.spy();
            updateSpy = sinon.spy();
            widget.on('carousel-prev', prevSpy);
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-move', moveSpy);
            widget.on('carousel-update', updateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            delay(() => {
                testUtils.triggerEvent(nextButton, 'click');
                delay(() => {
                    testUtils.triggerEvent(prevButton, 'click');
                    delay(done);
                });
            });
        });

        it('then it emits the marko events', () => {
            expect(prevSpy.callCount).to.equal(1);
            expect(nextSpy.callCount).to.equal(2);
            expect(moveSpy.callCount).to.equal(3);
            expect(updateSpy.callCount).to.equal(3);
        });

        it('then it moves to the correct index', () => {
            expect(root.index).to.equal(3);
        });
    });
});

describe('given a discrete carousel', () => {
    const input = { type: 'discrete', items: mock.threeItems };
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
            delay(done);
        });

        it('then it emits the marko next event', () => testControlEvent(nextSpy));

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([1]);
        });

        it('then it applies a translation', () => {
            expect(list.style.transform).to.equal(`translateX(-${containerWidth + constants.margin}px)`);
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(1);
            expect(widget.lastVisibleIndex).to.equal(1);
        });
    });

    describe('when the window is resized', () => {
        let spy;
        beforeEach(done => {
            spy = sinon.spy(widget, 'calculateWidths');
            testUtils.triggerEvent(window, 'resize');
            delay(done);
        });
        afterEach(() => widget.calculateWidths.restore());

        it('then it executes the calculateWidths', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given a discrete carousel has next button clicked', () => {
    const input = { type: 'discrete', items: mock.threeItems };
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
            delay(() => {
                expect(list.style.transform).to.equal(`translateX(-${containerWidth + constants.margin}px)`);
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
            delay(done);
        });

        it('then it emits the marko prev event', () => testControlEvent(prevSpy));

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(1);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([0]);
        });

        it('then it applies a translation back to 0', () => {
            expect(list.style.transform).to.equal('translateX(0px)');
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(0);
            expect(widget.lastVisibleIndex).to.equal(0);
        });
    });
});

describe('given a discrete carousel with half width items', () => {
    const input = { type: 'discrete', itemsPerSlide: 2, items: mock.sixItems };
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
        nextSlideDot = root.querySelector('[data-slide="2"]');
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
            delay(done);
        });

        it('then it emits the marko next event', () => testControlEvent(nextSpy));

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            expect(list.style.transform).to.equal(`translateX(-${containerWidth + constants.margin}px)`);
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(2);
            expect(widget.lastVisibleIndex).to.equal(3);
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
            delay(done);
        });

        it('then it does not emit the marko next event', () => {
            expect(nextSpy.called).to.equal(false);
        });

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            expect(list.style.transform).to.equal(`translateX(-${containerWidth + constants.margin}px)`);
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(2);
            expect(widget.lastVisibleIndex).to.equal(3);
        });
    });

    describe('when slide is updated programmatically', () => {
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
            root.slide = 2;
            delay(done);
        });

        it('then it does not emit the marko next event', () => {
            expect(nextSpy.called).to.equal(false);
        });

        it('then it emits the marko slide event', () => {
            expect(slideSpy.calledOnce).to.equal(true);
            const eventData = slideSpy.getCall(0).args[0];
            expect(eventData.slide).to.equal(2);
        });

        it('then it emits the marko move event', () => {
            expect(moveSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko update event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
            const eventData = updateSpy.getCall(0).args[0];
            expect(eventData.visibleIndexes).to.deep.equal([2, 3]);
        });

        it('then it applies a translation', () => {
            expect(list.style.transform).to.equal(`translateX(-${containerWidth + constants.margin}px)`);
        });

        it('then it calculates item visibility correctly', () => {
            expect(widget.firstVisibleIndex).to.equal(2);
            expect(widget.lastVisibleIndex).to.equal(3);
        });
    });
});
