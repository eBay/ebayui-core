import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'navigation & disclosure/ebay-tabs',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selectedIndex: {
            control: { type: 'text' },
            description: '0-based index of selected tab tab and panel',
        },
        activation: {
            control: { type: 'text' },
            description:
                'whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual"',
        },
        tab: {
            name: '@tab',
            table: {
                category: '@attribute tags',
            },
        },
        panel: {
            name: '@panel',
            table: {
                category: '@attribute tags',
            },
        },
        onSelect: {
            action: 'on-select',
            description: 'Triggered on tab selected',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ selectedIndex }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    panels: [
        {
            renderBody: `panel one`,
        },
        {
            renderBody: `panel two`,
        },
        {
            renderBody: `panel three`,
        },
    ],
    tabs: [
        {
            renderBody: `Tab 1`,
        },
        {
            renderBody: `Tab 2`,
        },
        {
            renderBody: `Tab 3`,
        },
    ],
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-tabs', Standard.args, { tabs: 'tab', panels: 'panel' }),
        },
    },
};
