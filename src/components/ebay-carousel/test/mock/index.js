const assign = require('core-js-pure/features/object/assign');
const { getNItems, createRenderBody } = require('../../../../common/test-utils/shared');

exports.Discrete_1PerSlide_0Items = {
    itemsPerSlide: 1,
    a11yPreviousText: 'prev',
    a11yNextText: 'next',
    a11yStatusText: '{currentSlide} of {totalSlides}',
    a11yStatusTag: 'h2',
    items: [],
};

exports.Discrete_1PerSlide_1Items = assign({}, exports.Discrete_1PerSlide_0Items, {
    items: [
        {
            renderBody: createRenderBody('carousel item content 1'),
        },
    ],
});

exports.Discrete_1PerSlide_3Items = assign({}, exports.Discrete_1PerSlide_0Items, {
    items: getNItems(3, (i) => ({
        renderBody: createRenderBody(`carousel item content ${i}`),
    })),
});

exports.Discrete_2_1PerSlide_3Items = assign({}, exports.Discrete_1PerSlide_3Items, {
    itemsPerSlide: 2.1,
});

exports.Discrete_2PerSlide_6Items = assign({}, exports.Discrete_1PerSlide_0Items, {
    itemsPerSlide: 2,
    items: getNItems(6, (i) => ({
        renderBody: createRenderBody(`carousel item content ${i}`),
    })),
});

exports.Discrete_1PerSlide_3Items_AutoPlay = assign(
    {
        a11yPlayText: 'play',
        a11yPauseText: 'pause',
        autoplay: 400,
    },
    exports.Discrete_1PerSlide_3Items
);

exports.Continuous_0Items = {
    a11yPreviousText: 'prev',
    a11yNextText: 'next',
    items: [],
};

exports.Continuous_1Item = assign({}, exports.Continuous_0Items, {
    items: [
        {
            style: 'width:200px',
            renderBody: createRenderBody('carousel item content 1'),
        },
    ],
});

exports.Continuous_6Items = assign({}, exports.Continuous_0Items, {
    items: getNItems(6, (i) => ({
        style: 'width:200px',
        renderBody: createRenderBody(`carousel item content ${i}`),
    })),
});

exports.Continuous_12Items = assign({}, exports.Continuous_0Items, {
    items: getNItems(12, (i) => ({
        style: 'width:200px',
        renderBody: createRenderBody(`carousel item content ${i}`),
    })),
});
