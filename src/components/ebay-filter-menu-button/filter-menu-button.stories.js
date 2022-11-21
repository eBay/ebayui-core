import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'buttons/ebay-filter-menu-button',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        text: {
            control: { type: 'text' },
            description: 'button text',
        },
        type: {
            options: ['radio', 'checkbox'],
            control: { type: 'select' },
            description: 'Can be "radio" / "checkbox"',
        },
        a11yText: {
            control: { type: 'text' },
            description: 'a11y text for the button',
        },
        pressed: {
            control: { type: 'boolean' },
            description: 'whether button is pressed (default is `false`)',
            table: {
                disable: true,
            },
        },
        expanded: {
            control: { type: 'boolean' },
            description: 'whether content is expanded (Note: not supported as initial attribute) ',
            table: {
                disable: true,
            },
        },
        disabled: {
            control: { type: 'boolean' },
            description:
                'Will disable the entire dropdown (disables the ebay-button label) if set to true',
        },
        variant: {
            control: { type: 'text' },
            description: '"" (default) / "form"',
        },
        item: {
            table: {
                category: '@attribute tags',
            },
        },
        formName: {
            control: { type: 'text' },
            description: 'forms `name` attribute',
            table: {
                category: 'when variant="form"',
            },
        },
        formAction: {
            control: { type: 'text' },
            description: 'forms `action` attribute',
            table: {
                category: 'when variant="form"',
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
            description: 'the items value (returned in emitted events when checked)',
        },
        onCollapse: {
            action: 'on-collapse',
            description: 'Triggered on menu collapse',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ checked, originalEvent }',
                },
            },
        },
        onExpand: {
            action: 'on-expand',
            description: 'Triggered on menu expand',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
                },
            },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on item clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ el, selected, index, currentChecked, checked }',
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
    text: 'text',
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
    a11yText: 'filter menu button a11y text',
    footer: {
        renderBody: 'Apply',
        a11yFooterText: 'footer button a11y text',
    },
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-filter-menu-button', Standard.args),
        },
    },
};
