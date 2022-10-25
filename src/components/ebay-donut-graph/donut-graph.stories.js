import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
// import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-donut-graph',
    component: Component,
    parameters: {
        // docs: {
        //     description: {
        //         component: Readme,
        //     },
        // },
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
        }
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
        }
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
