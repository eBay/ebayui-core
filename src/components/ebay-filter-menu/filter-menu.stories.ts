import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'building blocks/ebay-filter-menu',
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
            options: ['radio', 'checkbox'],
            control: { type: 'select' },
            description: 'Can be "radio" / "checkbox"',
        },
        variant: {
            control: { type: 'text' },
            description: '"" (default) / "form"',
        },
        classPrefix: {
            control: { type: 'text' },
            description:
                '"filter-menu" (default) / modifies the base prefix for all Skin classes in the menu',
        },
        formName: {
            control: { type: 'text' },
            description: 'forms `name` attribute',
        },
        formAction: {
            control: { type: 'text' },
            description: 'forms `action` attribute',
        },
        formMethod: {
            control: { type: 'text' },
            description: 'forms `method` attribute',
        },
        item: {
            table: {
                category: '@attribute tags',
            },
        },
        checked: {
            control: { type: 'boolean' },
            description: 'whether or not the item is checked',
            table: {
                category: '@item attributes',
            },
        },
        value: {
            table: {
                category: '@item attributes',
            },
            control: { type: 'text' },
            description: "the item's value (returned in emitted events when checked)",
        },
        disabled: {
            table: {
                category: '@item attributes',
            },
            control: { type: 'boolean' },
            description: 'whether or not the item is disabled',
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on item clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ el, checked, itemChecked, index, originalEvent }',
                },
            },
        },
        footerClick: {
            action: 'on-footer-click',
            description: 'Triggered on footer clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ checked, originalEvent }',
                },
            },
        },
        formSubmit: {
            action: 'on-form-submit',
            description:
                'when using `variant="form"`, and form is submitted (emits current checked state)',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ checked, originalEvent }',
                },
            },
        },
        footer: {
            name: '@footer',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    items: [
        {
            value: 'item 1',
            renderBody: `item 1`,
        },
        {
            value: 'item 2',
            renderBody: `item 2`,
        },
        {
            value: 'item 3',
            renderBody: `item 3`,
        },
    ],
    text: 'Button',
    footer: {
        renderBody: 'Apply',
        a11yFooterText: 'a11y text for footer button',
    },
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-filter-menu', Standard.args, { items: 'item' }),
        },
    },
};
