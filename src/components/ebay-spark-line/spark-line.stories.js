import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const getLineGraphData = (days) => {
    const data = [];
    const length = days !== undefined ? days : 14;
    for (let i = 0; i < length; i++) {
        const d = new Date(`Feb ${i + 1}, 2022 00:00:00 UTC`);

        let v = i === 0 ? 0 : data[i - 1].y;
        v = parseFloat((v + Math.random() * 5000 - 2500).toFixed(2));
        data.push({
            x: d.getTime(),
            y: v,
        });
    }

    return data;
};

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
            description: 'an array of object with x and y properties',
        },
    },
};

export const Basic = Template.bind({});
Basic.args = {
    data: getLineGraphData(10),
};

export const Positive = Template.bind({});
Positive.args = {
    data: getLineGraphData(10),
    trend: 'positive',
};

export const Negative = Template.bind({});
Negative.args = {
    data: getLineGraphData(10),
    trend: 'negative',
};
