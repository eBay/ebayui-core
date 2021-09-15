import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import mixedImplementationComponent from './examples/04-mixed-implementation/template.marko';

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
    title: 'ebay-tri-state-checkbox',
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
        checked: {
            control: { type: 'text' },
            description:
                'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',
        },
        skipMixed: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.',
        },
        size: {
            control: { type: 'text' },
            description:
                'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',
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
        onFocus: {
            action: 'on-focus',
            description: 'Triggered on focus',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
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
            code: tagToString('ebay-tri-state-checkbox', Standard.args),
        },
    },
};

export const mixedImplementation = Template.bind({});
mixedImplementation.component = mixedImplementationComponent;
mixedImplementation.parameters = {
    controls: {
        disabled: true,
    },
};
