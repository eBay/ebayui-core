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
    containerId: 'test-legend',
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
