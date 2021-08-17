import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './examples/01-default/template.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-drawer-dialog',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        open: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether dialog is open.',
            table: {
                disable: true,
            },
        },
        noHandle: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether handle will be shown or not.',
        },
        expanded: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether the drawer is expanded to full height or max 50%',
        },
        focus: {
            control: { type: 'text' },
            description:
                'An id for an element which will receive focus when the drawer opens (defaults to close button).',
        },
        a11yCloseText: {
            control: { type: 'text' },
            description: 'A11y text for close button and mask.',
        },
        a11yMinimizeText: {
            control: { type: 'text' },
            description:
                'A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer.',
        },
        a11yMaximizeText: {
            control: { type: 'text' },
            description:
                'A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer.',
        },

        header: {
            name: '@header',
            table: {
                category: '@attribute tags',
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
    header: {
        renderBody: `Heading Text`,
    },
    renderBody: `Body Content`,
    footer: {
        renderBody: `Footer Text`,
    },
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-drawer-dialog', Standard.args),
        },
    },
};
