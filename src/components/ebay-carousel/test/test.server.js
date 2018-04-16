const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('carousel', () => {
    test('renders basic version', context => {
        const input = { items: mock.sixItems };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.carousel.carousel--continuous').length).to.equal(1);
        expect($('.carousel__control--prev').length).to.equal(1);
        expect($('.carousel__control--next').length).to.equal(1);
        expect($('ul.carousel__list').length).to.equal(1);
        expect($('ul.carousel__list > li').length).to.equal(mock.sixItems.length);
        expect($('ul.carousel__list > li[aria-hidden=false]').length).to.equal(mock.sixItems.length);
    });

    test('renders accessibility text', context => {
        const input = {
            type: 'discrete',
            items: mock.sixItems,
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
        expect($('[data-slide="1"][aria-label="slide 1"]').length).to.equal(1);
        expect($('[data-slide="2"][aria-label="other 2"]').length).to.equal(1);
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
