import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-spark-line',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        data: {
            type: { name: 'array', required: true },
            description: 'an array of point objects, each point contains an `x` and `y` value',
        },
        trend: {
            type: { name: 'string', required: false },
            description:
                'Trend can bet set to `positive` or `negative` to change the color of the line',
        },
    },
};

export const Basic = Template.bind({});
Basic.args = {
    data: [
        {
            x: 1643673600000,
            y: 1901.5,
        },
        {
            x: 1643760000000,
            y: 225.61,
        },
        {
            x: 1643846400000,
            y: 1552.68,
        },
        {
            x: 1643932800000,
            y: 2611.25,
        },
        {
            x: 1644019200000,
            y: 304.87,
        },
        {
            x: 1644105600000,
            y: 1188.05,
        },
        {
            x: 1644192000000,
            y: 577.5,
        },
        {
            x: 1644278400000,
            y: -1510.93,
        },
        {
            x: 1644364800000,
            y: -3530.1,
        },
        {
            x: 1644451200000,
            y: -2601.05,
        },
    ],
};

Basic.parameters = {
    docs: {
        source: {
            code: tagToString('spark-line', Basic.args),
        },
    },
};

export const Positive = Template.bind({});
Positive.args = {
    data: [
        {
            x: 1643673600000,
            y: -921.75,
        },
        {
            x: 1643760000000,
            y: -571.82,
        },
        {
            x: 1643846400000,
            y: 1567.05,
        },
        {
            x: 1643932800000,
            y: 2811.23,
        },
        {
            x: 1644019200000,
            y: 4453.02,
        },
        {
            x: 1644105600000,
            y: 4657.16,
        },
        {
            x: 1644192000000,
            y: 4858.55,
        },
        {
            x: 1644278400000,
            y: 4574.2,
        },
        {
            x: 1644364800000,
            y: 3017.05,
        },
        {
            x: 1644451200000,
            y: 1756.36,
        },
    ],
    trend: 'positive',
};

Positive.parameters = {
    docs: {
        source: {
            code: tagToString('spark-line', Positive.args),
        },
    },
};

export const Negative = Template.bind({});
Negative.args = {
    data: [
        {
            x: 1643673600000,
            y: 1658.83,
        },
        {
            x: 1643760000000,
            y: 3232.9,
        },
        {
            x: 1643846400000,
            y: 1381.91,
        },
        {
            x: 1643932800000,
            y: 1020.94,
        },
        {
            x: 1644019200000,
            y: 1564.91,
        },
        {
            x: 1644105600000,
            y: 1517.78,
        },
        {
            x: 1644192000000,
            y: 946.39,
        },
        {
            x: 1644278400000,
            y: 537.55,
        },
        {
            x: 1644364800000,
            y: 1,
        },
        {
            x: 1644451200000,
            y: 53.91,
        },
    ],
    trend: 'negative',
};

Negative.parameters = {
    docs: {
        source: {
            code: tagToString('spark-line', Negative.args),
        },
    },
};
