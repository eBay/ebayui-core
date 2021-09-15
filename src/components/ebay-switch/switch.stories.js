import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: 'ebay-switch',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        disabled: {
            type: 'boolean',
            control: { type: 'boolean' },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on change',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value, checked }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-switch', Standard.args),
        },
    },
};
