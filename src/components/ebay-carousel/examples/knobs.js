const { text, number, select, boolean } = require('@storybook/addon-knobs');

const isContinious = (type) => type === 'continuous';
const isItemsPerSlide = (type) => type === 'itemsPerSlide' || type === 'autoplay';
const isAutoplay = (type) => type === 'autoplay';

module.exports = (type) => ({
    items: number('Number Of items', 5, { min: 1 }, 'Options'),
    index: number('Starting index', 0, { min: 0 }, 'Options'),
    itemsPerSlide:
        isItemsPerSlide(type) &&
        number('Items Per Slide', isAutoplay(type) ? 1 : 2.3, { min: 1 }, 'Options'),
    autoplay: isAutoplay(type) && number('Autoplay Interval', null, {}, 'Options'),
    paused: isAutoplay(type) && boolean('Pause?', false, 'Options'),
    gap: number('Gap', null, {}, 'Options'),
    imageTreatment:
        isContinious(type) && select('Image Treatment', ['none', 'matte'], 'none', 'Options'),
    itemWidth:
        isContinious(type) &&
        select('Item width', ['fixed', 'variable', 'random'], 'fixed', 'Options'),
    a11yPreviousText: text(
        'a11y previous text',
        'Go to previous slide - Top Products',
        'Accessibility'
    ),
    a11yNextText: text('a11y next text', 'Go to next slide - Top Products', 'Accessibility'),
    a11yStatusText:
        isItemsPerSlide(type) &&
        text(
            'a11y Status text',
            'Showing slide {currentSlide} of {totalSlides} - Top Products - Carousel',
            'Accessibility'
        ),
    a11yStatusTag: isItemsPerSlide(type) && text('a11y Status tag', 'h2', 'Accessibility'),
    a11yPauseText: isAutoplay(type) && text('a11y pause text', 'Pause', 'Accessibility'),
    a11yPlayText: isAutoplay(type) && text('a11y play text', 'Play', 'Accessibility'),
    images: [
        'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg',
        'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg',
        'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg',
        'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg',
        'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg',
        'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg',
    ],
    getItemWidth: (itemWidth, index) => {
        if (itemWidth === 'random') {
            return `${Math.floor(Math.random() * 250) + 70}px`;
        } else if (itemWidth === 'variable') {
            const width = [100, 75, 120, 200, 130, 150, 100, 200, 60];
            return `${width[index % width.length]}px`;
        }
    },
});
