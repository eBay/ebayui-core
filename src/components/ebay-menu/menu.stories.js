import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import badgedExample from './examples/09-badged-items/template.marko';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'building blocks/ebay-menu',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        type: {
            control: { type: 'text' },
            description: 'Can be "radio" / "checkbox"',
        },
        priority: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'none'],
            description: 'button priority, "primary" / "secondary" (default) / "none"',
        },
        checked: {
            description:
                'will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup',
        },
        item: {
            name: '@item',
            table: {
                category: '@attribute tags',
            },
        },
        value: {
            control: { type: 'text' },
            table: {
                category: '@item attributes',
            },
            description: 'the value to use with event responses for for the `checked` array',
        },
        badgeNumber: {
            control: { type: 'text' },
            table: {
                category: '@item attributes',
            },
            description: 'used as the number to be placed in the badge',
        },
        badgeAriaLabel: {
            control: { type: 'text' },
            table: {
                category: '@item attributes',
            },
            description:
                'Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge',
        },
        onKeydown: {
            action: 'on-keydown',
            description: 'Triggered on keydown',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ el, index, checked }',
                },
            },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on item checked change, (checkbox/radio type only)',
            table: {
                category: 'Events',
                defaultValue: {
                    summary:
                        'radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }',
                },
            },
        },

        onSelect: {
            action: 'on-select',
            description: 'Triggered on item clicked (non radio/checkbox)',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ el, index, checked }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    items: [
        {
            renderBody: `item 1 that has very long text`,
        },
        {
            renderBody: `item 2`,
        },
        {
            renderBody: `item 3`,
        },
    ],
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-menu', Standard.args, { items: 'item' }),
        },
    },
};

export const Badged = () => ({
    component: badgedExample,
});
