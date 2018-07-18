const testUtils = require('../../../common/test-utils/server');

describe('tab', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.tabs');
    });
});

describe('tab-item', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs__item', 'items');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.tabs__item', 'items');
    });
});

describe('tab-panel', () => {
    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.tabs__panel', 'panels');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.tabs__panel', 'panels');
    });
});
