import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import iconExample from './examples/09-icon-with-text/template.marko';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-menu-button',
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
            control: { type: 'text' },
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
            description: 'whether button has borders',
        },
        size: {
            control: { type: 'text' },
            description: 'button size, "large" (default: "none")',
        },
        priority: {
            control: { type: 'text' },
            description:
                'button priority, "primary" (deprecated) / "secondary" (deprecated) / "none" (default)',
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
            control: { type: 'text' },
            description: 'will change the button style, "overflow" / "default"',
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