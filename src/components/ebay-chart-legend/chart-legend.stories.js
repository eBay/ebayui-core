import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-chart-legend',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        legendStyle: {
            options: ['minimal', 'table'],
            description: 'if set to table display table with each portions text and value.',
            table: {
                defaultValue: {
                    summary: 'minimal',
                },
            },
            type: 'select',
        },
        values: {
            name: '@option',
            description: 'each option contains a numeric value and a display text value',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Basic = Template.bind({});
Basic.args = {
    legendStyle: 'minimal',
    values: [
        {
            value: '$ 3',
            text: 'Value 1',
            percentage: 0.5,
        },
        {
            value: '$ 2',
            text: 'Value 2',
            percentage: 0.333,
        },
        {
            value: '$ 1',
            text: 'Value 3',
            percentage: 0.1667,
        },
    ],
};

Basic.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-chart-legend', Basic.args),
        },
    },
};

export const Table = Template.bind({});
Table.args = {
    legendStyle: 'table',
    values: [
        {
            value: '$ 3',
            text: 'Value 1',
            percentage: 0.5,
        },
        {
            value: '$ 2',
            text: 'Value 2',
            percentage: 0.333,
        },
        {
            value: '$ 1',
            text: 'Value 3',
            percentage: 0.1667,
        },
    ],
};

Table.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-chart-legend', Table.args),
        },
    },
};
