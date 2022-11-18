import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-donut-chart',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        'aria-labelledby': {
            description: 'id of element containing a11y label text for component',
            table: {
                category: 'accessibility attributes',
            },
            control: { type: 'text' },
        },
        description: {
            name: '@description',
            description: 'description of what the chart is displaying',
            table: {
                category: '@attribute tags',
            },
        },
        metric: {
            name: '@metric',
            description: 'optional metric display',
            table: {
                category: '@attribute tags',
            },
        },
        subtitle: {
            name: '@sub-title',
            description: 'optional sub title display',
            table: {
                category: '@attribute tags',
            },
        },
        portions: {
            name: '@option',
            description: 'each option contains a numeric value and a display text value',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const TwoValues = Template.bind({});
TwoValues.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 3',
            text: 'Value 1',
        },
        {
            value: '$ 2',
            text: 'Value 2',
        },
    ],
};

TwoValues.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', TwoValues.args),
        },
    },
};

export const ThreeValues = Template.bind({});
ThreeValues.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 3',
            text: 'Value 1',
        },
        {
            value: '$ 2',
            text: 'Value 2',
        },
        {
            value: '$ 1',
            text: 'Value 3',
        },
    ],
};

ThreeValues.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', ThreeValues.args),
        },
    },
};

export const FourValues = Template.bind({});
FourValues.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
    ],
};

FourValues.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FourValues.args),
        },
    },
};

export const FiveValues = Template.bind({});
FiveValues.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
};

FiveValues.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValues.args),
        },
    },
};

export const FiveValuesWithSmallSlice = Template.bind({});
FiveValuesWithSmallSlice.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 0.001',
            text: 'Value 2',
        },
    ],
};

FiveValuesWithSmallSlice.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesWithSmallSlice.args),
        },
    },
};

export const FiveValuesWithMetricCompositionLayout = Template.bind({});
FiveValuesWithMetricCompositionLayout.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    metric: { renderBody: '$178 total' },
    subtitle: { renderBody: 'return rate' },
    layout: 'composition',
};

FiveValuesWithMetricCompositionLayout.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesWithMetricCompositionLayout.args),
        },
    },
};

export const FiveValuesWithMetric = Template.bind({});
FiveValuesWithMetric.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    metric: { renderBody: '$178 total' },
    subtitle: { renderBody: 'return rate' },
};

FiveValuesWithMetric.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesWithMetric.args),
        },
    },
};

export const FiveValuesLegendOnRight = Template.bind({});
FiveValuesLegendOnRight.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    layout: 'legend-right',
};

FiveValuesLegendOnRight.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesLegendOnRight.args),
        },
    },
};

export const FiveValuesLegendOnRightWithMetrics = Template.bind({});
FiveValuesLegendOnRightWithMetrics.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    layout: 'legend-right',
    metric: { renderBody: '$178 total' },
};

FiveValuesLegendOnRightWithMetrics.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesLegendOnRightWithMetrics.args),
        },
    },
};

export const FiveValuesLegendOnRightWithMetricsWithSubtitle = Template.bind({});
FiveValuesLegendOnRightWithMetricsWithSubtitle.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    layout: 'legend-right',
    metric: { renderBody: '$178 total' },
    subtitle: { renderBody: 'return rate' },
};

FiveValuesLegendOnRightWithMetricsWithSubtitle.parameters = {
    docs: {
        source: {
            code: tagToString(
                'ebay-donut-chart',
                FiveValuesLegendOnRightWithMetricsWithSubtitle.args
            ),
        },
    },
};

export const FiveValuesLegendOnLeft = Template.bind({});
FiveValuesLegendOnLeft.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    layout: 'legend-left',
};

FiveValuesLegendOnLeft.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesLegendOnLeft.args),
        },
    },
};

export const FiveValuesLegendOnLeftWithMetrics = Template.bind({});
FiveValuesLegendOnLeftWithMetrics.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    layout: 'legend-left',
    metric: { renderBody: '$178 total' },
};

FiveValuesLegendOnLeftWithMetrics.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-donut-chart', FiveValuesLegendOnLeftWithMetrics.args),
        },
    },
};

export const FiveValuesLegendOnLeftWithMetricsWithSubtitle = Template.bind({});
FiveValuesLegendOnLeftWithMetricsWithSubtitle.args = {
    'aria-labelledby': 'donutcharttitle',
    description: { renderBody: 'This donut chart is displaying a selection of sample values' },
    portions: [
        {
            value: '$ 50',
            text: 'Value 1',
        },
        {
            value: '$ 42',
            text: 'Value 2',
        },
        {
            value: '$ 35',
            text: 'Value 3',
        },
        {
            value: '$ 29',
            text: 'Value 1',
        },
        {
            value: '$ 22',
            text: 'Value 2',
        },
    ],
    layout: 'legend-left',
    metric: { renderBody: '$178 total' },
    subtitle: { renderBody: 'return rate' },
};

FiveValuesLegendOnLeftWithMetricsWithSubtitle.parameters = {
    docs: {
        source: {
            code: tagToString(
                'ebay-donut-chart',
                FiveValuesLegendOnLeftWithMetricsWithSubtitle.args
            ),
        },
    },
};
