const testUtils = require('../../../common/test-utils/server');

describe('carosuel', () => {
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
