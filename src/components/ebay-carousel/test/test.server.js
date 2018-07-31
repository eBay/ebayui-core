const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('carousel', () => {
    test('renders basic version', context => {
        const input = { items: mock.sixItems };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.carousel').length).to.equal(1);
        expect($('.carousel__control--prev').length).to.equal(1);
        expect($('.carousel__control--next').length).to.equal(1);
        expect($('ul.carousel__list').length).to.equal(1);
        expect($('ul.carousel__list > li').length).to.equal(mock.sixItems.length);
        expect($('ul.carousel__list > li:not([aria-hidden="true"])').length).to.equal(mock.sixItems.length);
    });

    test('renders accessibility text', context => {
        const input = {
            items: mock.sixItems,
            itemsPerSlide: 1,
            accessibilityPrev: 'prev',
            accessibilityNext: 'next',
            accessibilityStatus: '{currentSlide} of {totalSlides}',
            accessibilityCurrent: 'slide {currentSlide}',
            accessibilityOther: 'other {slide}'
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.carousel__control--prev[aria-label="prev"]').length).to.equal(1);
        expect($('.carousel__control--next[aria-label="next"]').length).to.equal(1);
        expect($('.clipped[role="status"]').text()).to.equal('1 of 6');
        expect($('[data-slide="0"][aria-label="slide 1"]').length).to.equal(1);
        expect($('[data-slide="1"][aria-label="other 2"]').length).to.equal(1);
    });

    test('renders autoplay version', context => {
        const input = {
            items: mock.sixItems,
            itemsPerSlide: 1,
            autoplay: true,
            accessibilityPlay: 'play',
            accessibilityPause: 'pause'
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.carousel__autoplay').length).to.equal(1);
        expect($('.carousel__play').length).to.equal(0);
        expect($('.carousel__dots').length).to.equal(1);
        expect($('.carousel__pause').attr('aria-label')).to.equal('pause');
    });

    test('renders autoplay version without dots', context => {
        const input = {
            items: mock.sixItems,
            itemsPerSlide: 1,
            autoplay: true,
            noDots: true,
            accessibilityPlay: 'play',
            accessibilityPause: 'pause'
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.carousel__autoplay').length).to.equal(1);
        expect($('.carousel__dots').length).to.equal(0);
    });

    test('renders paused autoplay version', context => {
        const input = {
            items: mock.sixItems,
            itemsPerSlide: 1,
            autoplay: true,
            paused: true,
            accessibilityPlay: 'play',
            accessibilityPause: 'pause'
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.carousel__autoplay').length).to.equal(1);
        expect($('.carousel__pause').length).to.equal(0);
        expect($('.carousel__play').attr('aria-label')).to.equal('play');
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.carousel');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.carousel');
    });
});

describe('carousel-item', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.carousel__list > li', 'items');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.carousel__list > li', 'items', true);
    });
});
