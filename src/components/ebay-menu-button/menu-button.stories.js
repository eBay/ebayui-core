import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import badgedExample from './examples/22-badged-items/template.marko';
import badgedExampleCode from './examples/22-badged-items/template.marko?raw';
import iconExample from './examples/09-icon-with-text/template.marko';
import iconExampleCode from './examples/09-icon-with-text/template.marko?raw';
import typeaheadExample from './examples/18-typeahead/template.marko';
import typeaheadExampleCode from './examples/18-typeahead/template.marko?raw';
import separatorExample from './examples/02-separator/template.marko';
import separatorExampleCode from './examples/02-separator/template.marko?raw';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'buttons/ebay-menu-button',
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
        a11yText: {
            description: 'a11y text for the button, especially for cases without text',
            control: { type: 'text' },
        },
        noToggleIcon: {
            type: 'boolean',
            description: 'whether to hide the chevron toggle icon',
            control: { type: 'boolean' },
        },
        expanded: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether content is expanded (Note: not supported as initial attribute)',
        },
        type: {
            control: { type: 'select' },
            options: ['none', 'radio', 'checkbox'],
            description: 'Can be "radio" / "checkbox"',
        },
        reverse: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'expand menu flyout to the left',
        },
        fixWidth: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'constrain items container width to button width',
        },
        borderless: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether button has borders. Forces variant=button',
        },
        size: {
            control: { type: 'text' },
            description: 'button size, "large" (default: "none")',
        },
        priority: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'delete', 'tertiary', 'none'],
            description: 'button priority, only used when variant="button"',
        },
        checked: {
            description:
                'will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup',
        },
        disabled: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'Will disable the entire dropdown (disables the ebay-button label) if set to true',
        },
        variant: {
            control: { type: 'select' },
            options: ['overflow', 'form', 'button'],
            table: {
                defaultValue: {
                    summary: 'button',
                },
            },
            description: 'will change the button style, "overflow", "form" or "button"',
        },
        collapseOnSelect: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'Will collapse whole menu when an item is selected in menu. Typically used in `type="radio"`',
        },
        prefixId: {
            control: { type: 'text' },
            description:
                'The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label`',
        },
        prefixLabel: {
            control: { type: 'text' },
            description:
                'The label to add before each selected item on the button. Cannot be used with `prefix-id` ',
        },
        item: {
            name: '@item',
            table: {
                category: '@attribute tags',
            },
        },
        icon: {
            name: '@icon',
            table: {
                category: '@attribute tags',
            },
        },
        badgeNumber: {
            description: 'used as the number to be placed in the badge',
            table: {
                category: '@item attribute tags',
            },
        },
        badgeAriaLabel: {
            description: 'passed as the `aria-label` directly to the badge',
            table: {
                category: '@item attribute tags',
            },
        },
        onCollapse: {
            action: 'on-collapse',
            description: 'Triggered on menu collapse',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
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
    text: `eBay Menu`,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-menu-button', Standard.args),
        },
    },
};
export const iconText = () => ({
    component: iconExample,
});
iconText.parameters = {
    docs: {
        source: {
            code: iconExampleCode,
        },
    },
};

export const BadgedItems = () => ({
    component: badgedExample,
});
BadgedItems.parameters = {
    docs: {
        source: {
            code: badgedExampleCode,
        },
    },
};
export const Typeahead = () => ({
    component: typeaheadExample,
});
Typeahead.parameters = {
    docs: {
        source: {
            code: typeaheadExampleCode,
        },
    },
};
export const Separator = () => ({
    component: separatorExample,
});
Separator.parameters = {
    docs: {
        source: {
            code: separatorExampleCode,
        },
    },
};
