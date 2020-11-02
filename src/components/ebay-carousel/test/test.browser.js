const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, waitFor, cleanup } = require('@marko/testing-library');
const { fastAnimations } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');
const supportsNativeScrolling = CSS.supports && CSS.supports(
    `(not (-moz-appearance:none)) and (
    (-webkit-scroll-snap-coordinate: 0 0) or
    (-ms-scroll-snap-coordinate: 0 0) or
    (scroll-snap-coordinate: 0 0) or
    (scroll-snap-align: start))`
);

use(require('chai-dom'));
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

// TODO: should be testing the tab-index of children, would need to change test setup a bit.
// The above test should also be tested when resizing the carousel.

describe('given a continuous carousel', () => {
    describe('without any items', () => {
        const input = mock.Continuous_0Items;

        beforeEach(async() => {
            component = await render(template, input);
        });

        it('then prev and next controls are disabled', () => {
            expect(component.getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(component.getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });
    });

    describe('with 1 item (single slide)', () => {
        const input = mock.Continuous_1Item;

        beforeEach(async() => {
            component = await render(template, input);
        });

        it('then prev and next controls are disabled', () => {
            expect(component.getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(component.getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });
    });

    describe('with 6 items at the beginning', () => {
        const input = mock.Continuous_6Items;

        beforeEach(async() => {
            component = await render(template, input);
            // The carousel is not fully initialized until
            // the next button is no longer disabled.
            await waitFor(() =>
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled')
            );
        });

        describe('when it is rerendered to show the second item', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { index: 1 }));
                await waitForCarouselUpdate();
            });

            it('then it moved to the second item', () => {
                const secondItem = component.getByText(input.items[1].renderBody.text);
                assertAtStartOfSlide(secondItem);
            });
        });

        describe('when it is rerendered with an index below zero', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { index: -1 }));
                await doesNotEventuallyScroll();
            });

            it('then shows the first item', () => {
                const firstItem = component.getByText(input.items[0].renderBody.text);
                assertAtStartOfSlide(firstItem);
            });
        });

        describe('when it is rerendered with an index higher than the number of items', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { index: 6 }));
                await doesNotEventuallyScroll();
            });

            it('then shows the first item', () => {
                const firstItem = component.getByText(input.items[0].renderBody.text);
                assertAtStartOfSlide(firstItem);
            });
        });

        describe('when the previous button is clicked while disabled', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yPreviousText));
            });

            it('then it did not emit the prev event', () => {
                expect(component.emitted('previous')).has.length(0);
            });
        });

        describe('when next button is clicked', () => {
            let nextHiddenItem;
            beforeEach(async() => {
                nextHiddenItem = input.items
                    .map(item => component.getByText(item.renderBody.text))
                    .find(el => el.hasAttribute('aria-hidden'));
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
            });

            it('then it emitted the next event', () => {
                expect(component.emitted('next')).has.length(1);
            });

            it('then it moved to the next hidden item', () => {
                assertAtStartOfSlide(nextHiddenItem);
            });
        });
    });

    describe('with 6 items at the end', () => {
        const input = assign({}, mock.Continuous_6Items, { index: 5 });

        beforeEach(async() => {
            component = await render(template, input);
            await waitForCarouselUpdate();
        });

        describe('when the next button is clicked while disabled', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yNextText));
            });

            it('then it did not emit the next event', () => {
                expect(component.emitted('next')).has.length(0);
            });
        });

        describe('when previous button is clicked', () => {
            let previousHiddenItem;
            beforeEach(async() => {
                previousHiddenItem = input.items
                    .map(item => component.getByText(item.renderBody.text))
                    .reverse()
                    .find(el => el.hasAttribute('aria-hidden'));

                fireEvent.click(component.getByLabelText(input.a11yPreviousText));
                await waitForCarouselUpdate();
            });

            it('then it emitted the previous event', () => {
                expect(component.emitted('previous')).has.length(1);
            });

            it('then it moved to the previous hidden item', () => {
                assertAtEndOfSlide(previousHiddenItem);
            });
        });
    });

    describe('with 12 items', () => {
        const input = mock.Continuous_12Items;

        beforeEach(async() => {
            component = await render(template, input);

            // The carousel is not fully initialized until
            // the next button is no longer disabled.
            await waitFor(() =>
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled')
            );
        });

        describe('when next button is clicked three times', () => {
            beforeEach(async() => {
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
            });

            it('then emitted 3 next events', () => {
                expect(component.emitted('next')).has.length(3);
            });

            it('then the last item is visible', () => {
                const lastItem = component.getByText(input.items[input.items.length - 1].renderBody.text);
                assertAtEndOfSlide(lastItem);
            });
        });

        describe('when next button is clicked three times, and previous button is clicked once', () => {
            beforeEach(async() => {
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
                fireEvent.click(component.getByLabelText(input.a11yPreviousText));
                await waitForCarouselUpdate();
            });

            it('then emitted 3 next events', () => {
                expect(component.emitted('next')).has.length(3);
            });

            it('then emitted a prev event', () => {
                expect(component.emitted('previous')).has.length(1);
            });

            it('then the last item is not visible', () => {
                const lastItem = component.getByText(input.items[input.items.length - 1].renderBody.text);
                assertIsNotVisible(lastItem);
            });
        });
    });
});

describe('given a discrete carousel', () => {
    describe('without any items', () => {
        const input = mock.Discrete_1PerSlide_0Items;

        beforeEach(async() => {
            component = await render(template, input);
        });

        it('then prev and next controls are disabled', () => {
            expect(component.getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(component.getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });
    });

    describe('with 1 item per slide and 1 item', () => {
        const input = mock.Discrete_1PerSlide_1Items;

        beforeEach(async() => {
            component = await render(template, input);
        });

        it('then prev and next controls are disabled', () => {
            expect(component.getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(component.getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });

        it('then has the appropriate heading', () => {
            expect(component.getByRole('heading')).has.text('1 of 1');
        });
    });

    describe('with 1 item per slide and 3 items at the beginning', () => {
        const input = mock.Discrete_1PerSlide_3Items;

        beforeEach(async() => {
            component = await render(template, input);
            // The carousel is not fully initialized until
            // the next button is no longer disabled.
            await waitFor(() =>
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled')
            );
        });

        it('then prev control is disabled', () => {
            expect(component.getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
        });

        it('then has the appropriate heading', () => {
            expect(component.getByRole('heading')).has.text('1 of 3');
        });

        describe('when it is rerendered to show the second item', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { index: 1 }));
                await waitForCarouselUpdate();
            });

            it('then it moved to the second item', () => {
                const secondItem = component.getByText(input.items[1].renderBody.text);
                assertAtStartOfSlide(secondItem);
            });

            it('then has the appropriate heading', () => {
                expect(component.getByRole('heading')).has.text('2 of 3');
            });
        });

        describe('when it is rerendered with an index below zero', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { index: -1 }));
                await doesNotEventuallyScroll();
            });

            it('then shows the first item', () => {
                const firstItem = component.getByText(input.items[0].renderBody.text);
                assertAtStartOfSlide(firstItem);
            });
        });

        describe('when it is rerendered with an index higher than the number of items', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { index: 6 }));
                await doesNotEventuallyScroll();
            });

            it('then shows the first item', () => {
                const firstItem = component.getByText(input.items[0].renderBody.text);
                assertAtStartOfSlide(firstItem);
            });
        });

        describe('when the previous button is clicked while disabled', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yPreviousText));
            });

            it('then it did not emit the prev event', () => {
                expect(component.emitted('previous')).has.length(0);
            });
        });

        describe('when next button is clicked', () => {
            beforeEach(async() => {
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
            });

            it('then it emitted the next event', () => {
                expect(component.emitted('next')).has.length(1);
            });

            it('then it emitted the slide event', () => {
                expect(component.emitted('slide')).has.nested.property('[0][0].slide', 2);
            });

            thenItMovedToTheSecondSlide();
        });

        //
        (supportsNativeScrolling
            ? describe
            : describe.skip
        )('when it is scrolled to the second slide', () => {
            beforeEach(async() => { // eslint-disable-line mocha/no-sibling-hooks
                const thirdItem = component.getByText(input.items[1].renderBody.text);
                const list = thirdItem.parentElement;
                list.scrollLeft = thirdItem.offsetLeft;
                fireEvent.scroll(list);
                await waitForCarouselUpdate();
            });

            it('then it emitted the scroll event', () => {
                expect(component.emitted('scroll')).has.length(1);
            });

            thenItMovedToTheSecondSlide();
        });

        function thenItMovedToTheSecondSlide() {
            it('then it moved to the second item', () => {
                const secondItem = component.getByText(input.items[1].renderBody.text);
                assertAtStartOfSlide(secondItem);
            });

            it('then prev and next controls are enabled', () => {
                expect(component.getByLabelText(input.a11yPreviousText)).to.not.have.attr('aria-disabled');
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled');
            });

            it('then has updated the heading', () => {
                expect(component.getByRole('heading')).has.text('2 of 3');
            });
        }
    });

    describe('with 1 item per slide and 3 items at the end', () => {
        const input = assign({}, mock.Discrete_1PerSlide_3Items, { index: 2 });

        beforeEach(async() => {
            component = await render(template, input);
            await waitForCarouselUpdate();
        });

        it('then next control is disabled', () => {
            expect(component.getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });

        describe('when previous button is clicked', () => {
            beforeEach(async() => {
                fireEvent.click(component.getByLabelText(input.a11yPreviousText));
                await waitForCarouselUpdate();
            });

            it('then it emitted the previous event', () => {
                expect(component.emitted('previous')).has.length(1);
            });

            it('then it emitted the slide event', () => {
                expect(component.emitted('slide')).has.nested.property('[0][0].slide', 2);
            });

            it('then it moved to the second item', () => {
                const secondItem = component.getByText(input.items[1].renderBody.text);
                assertAtStartOfSlide(secondItem);
            });

            it('then prev and next controls are enabled', () => {
                expect(component.getByLabelText(input.a11yPreviousText)).to.not.have.attr('aria-disabled');
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled');
            });
        });
    });

    describe('with 2 items per slide and 6 items at the beginning', () => {
        const input = mock.Discrete_2PerSlide_6Items;

        beforeEach(async() => {
            component = await render(template, input);
            // The carousel is not fully initialized until
            // the next button is no longer disabled.
            await waitFor(() =>
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled')
            );
        });

        it('then has the appropriate heading', () => {
            expect(component.getByRole('heading')).has.text('1 of 3');
        });

        describe('when next button is clicked', () => {
            beforeEach(async() => {
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
            });

            it('then it emitted the next event', () => {
                expect(component.emitted('next')).has.length(1);
            });

            thenItMovedToTheSecondSlide();
        });

        function thenItMovedToTheSecondSlide() {
            it('then it emitted the slide event', () => {
                expect(component.emitted('slide')).has.length(1);
            });

            it('then it moved to the third item', () => {
                const secondItem = component.getByText(input.items[2].renderBody.text);
                assertAtStartOfSlide(secondItem);
            });

            it('then has updated the heading', () => {
                expect(component.getByRole('heading')).has.text('2 of 3');
            });
        }
    });

    describe('with 2.1 items per slide and 3 items at the beginning', () => {
        const input = mock.Discrete_2_1PerSlide_3Items;

        beforeEach(async() => {
            component = await render(template, input);
            // The carousel is not fully initialized until
            // the next button is no longer disabled.
            await waitFor(() =>
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled')
            );
        });

        it('then has the appropriate heading', () => {
            expect(component.getByRole('heading')).has.text('1 of 2');
        });

        it('then it shows part of the next slide', () => {
            const thirdItem = component.getByText(input.items[2].renderBody.text);
            const list = thirdItem.parentElement;
            const { right: slideRight } = list.getBoundingClientRect();
            const { left: itemLeft, right: itemRight } = thirdItem.getBoundingClientRect();
            expect(itemLeft).lt(slideRight);
            expect(itemRight).gt(slideRight);
        });

        describe('when next button is clicked', () => {
            beforeEach(async() => {
                fireEvent.click(component.getByLabelText(input.a11yNextText));
                await waitForCarouselUpdate();
            });

            it('then it emitted the next event', () => {
                expect(component.emitted('next')).has.length(1);
            });

            it('then it emitted the slide event', () => {
                expect(component.emitted('slide')).has.length(1);
            });

            it('then it moved to the third item', () => {
                const secondItem = component.getByText(input.items[2].renderBody.text);
                assertAtStartOfSlide(secondItem);
            });

            it('then has the appropriate heading', () => {
                expect(component.getByRole('heading')).has.text('2 of 2');
            });
        });
    });

    describe('with autoplay enabled', () => {
        const input = mock.Discrete_1PerSlide_3Items_AutoPlay;

        beforeEach(async() => {
            component = await render(template, input);
            // The carousel is not fully initialized until
            // the next button is no longer disabled.
            await waitFor(() =>
                expect(component.getByLabelText(input.a11yNextText)).to.not.have.attr('aria-disabled')
            );
        });

        describe('when the autoplay runs twice', async() => {
            beforeEach(async() => {
                await waitForCarouselUpdate();
                await waitForCarouselUpdate();
            });

            it('then it does not emit next or slide events', () => {
                expect(component.emitted('next')).has.length(0);
                expect(component.emitted('slide')).has.length(0);
            });

            it('then it moved to the third item', () => {
                const thirdItem = component.getByText(input.items[2].renderBody.text);
                assertAtStartOfSlide(thirdItem);
            });

            describe('when auto play runs at the end', () => {
                beforeEach(async() => {
                    await waitForCarouselUpdate();
                });

                it('then it does not emit the next event', () => {
                    expect(component.emitted('next')).has.length(0);
                });

                thenItIsOnTheFirstSlide();
            });

            describe('when next is clicked at the end', () => {
                beforeEach(async() => {
                    fireEvent.click(component.getByLabelText(input.a11yNextText));
                    await waitForCarouselUpdate();
                });

                it('then it emitted the next event', () => {
                    expect(component.emitted('next')).has.length(1);
                });

                it('then it emitted the slide event', () => {
                    expect(component.emitted('slide')).has.length(1);
                });

                thenItIsOnTheFirstSlide();
            });
        });

        describe('when it is paused', () => {
            beforeEach(async() => {
                await component.rerender(assign({}, input, { paused: true }));
                await new Promise(resolve => setTimeout(resolve, 600));
            });

            it('then it did not emit any updates', () => {
                expect(component.emitted('move')).has.length(0);
            });

            thenItIsOnTheFirstSlide();
        });

        describe('when it is interacted with', () => {
            beforeEach(async() => {
                await fireEvent.mouseOver(component.getByRole('heading'));
            });

            it('then the autoplay does not run', async() => {
                await new Promise(resolve => setTimeout(resolve, 600));
                expect(component.emitted('move')).has.length(0);
            });

            describe('when the interaction has finished', () => {
                beforeEach(async() => {
                    await fireEvent.mouseOut(component.getByRole('heading'));
                });

                it('then it does autoplay', async() => {
                    await waitForCarouselUpdate();
                });
            });
        });

        function thenItIsOnTheFirstSlide() {
            it('then it is displaying the first item', () => {
                const firstItem = component.getByText(input.items[0].renderBody.text);
                assertAtStartOfSlide(firstItem);
            });

            it('then it has the appropriate heading', () => {
                expect(component.getByRole('heading')).has.text('1 of 3');
            });
        }
    });
});

function waitForCarouselUpdate() {
    return waitFor(() => expect(component.emitted('move')).has.length(1));
}

function doesNotEventuallyScroll() {
    const err = new Error('Page should not have been scrolled');
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            window.removeEventListener('scroll', handleScroll);
            resolve();
        }, 200);

        window.addEventListener('scroll', handleScroll, true);

        function handleScroll() {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
            reject(err);
        }
    });
}

function assertIsNotVisible(item) {
    const itemBounds = item.getBoundingClientRect();
    const parentBounds = item.parentElement.getBoundingClientRect();

    if (itemBounds.left < parentBounds.left || itemBounds.right > parentBounds.right) {
        return;
    }

    throw new Error(`Expected item ${getChildIndex(item)} to not be displayed.`);
}

function assertAtStartOfSlide(item) {
    const list = item.parentElement;
    const container = list.parentElement;
    const itemBounds = item.getBoundingClientRect();
    const containerBounds = container.getBoundingClientRect();

    // Check if item is at the very start of the carousel.
    if (Math.trunc(itemBounds.left) === Math.trunc(containerBounds.left)) {
        return;
    }

    // Also accept if the carousel has scrolled as much as possible.
    const lastItemBounds = list.lastElementChild.getBoundingClientRect();
    if (Math.trunc(lastItemBounds.right) <= Math.trunc(containerBounds.right)) {
        return;
    }

    throw new Error(`Expected item ${getChildIndex(item)} to be at the beginning of the carousel.`);
}

function assertAtEndOfSlide(item) {
    const list = item.parentElement;
    const container = list.parentElement;
    const itemBounds = item.getBoundingClientRect();
    const parentBounds = container.getBoundingClientRect();

    // Check if item is at the very end of the carousel.
    if (Math.trunc(itemBounds.right) === Math.trunc(parentBounds.right)) {
        return;
    }

    // Also accept if the carousel has scrolled as much as possible.
    const firstItemBounds = list.firstElementChild.getBoundingClientRect();
    if (Math.trunc(firstItemBounds.left) <= Math.trunc(parentBounds.left)) {
        return;
    }

    throw new Error(`Expected item ${getChildIndex(item)} to be at the end of the carousel.`);
}

function getChildIndex(child) {
    return [].indexOf.call(child.parentElement.children, child);
}
