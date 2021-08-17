import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './examples/01-basic/template.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-fullscreen-dialog',
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
        focus: {
            control: { type: 'text' },
            description:
                'An id for an element which will receive focus when the dialog opens (defaults to close button).',
        },
        a11yCloseText: {
            control: { type: 'text' },
            description: 'A11y text for close button and mask.',
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
            code: tagToString('ebay-fullscreen-dialog', Standard.args),
        },
    },
};
