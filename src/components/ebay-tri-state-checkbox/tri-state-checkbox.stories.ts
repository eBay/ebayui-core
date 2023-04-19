import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import mixedImplementationComponent from './examples/mixed-implementation.marko';
import WithLabelTemplate from './examples/with-label.marko';
import DisabledTemplate from './examples/disabled-with-label.marko';
import WithLabelCode from './examples/with-label.marko?raw';
import DisabledCode from './examples/disabled-with-label.marko?raw';

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
    title: 'form input/ebay-tri-state-checkbox',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        checked: {
            options: ['false', 'mixed', 'true'],
            type: { category: 'Options' },
            description:
                'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        skipMixed: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.',
        },
        size: {
            options: ['regular', 'large'],
            type: { category: 'Options' },
            description:
                'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',
            table: {
                defaultValue: {
                    summary: 'regular',
                },
            },
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

export const WithLabel = (args) => ({
    input: args,
    component: WithLabelTemplate,
});
WithLabel.args = {};
WithLabel.parameters = {
    docs: {
        source: {
            code: WithLabelCode,
        },
    },
};

export const Disabled = (args) => ({
    input: args,
    component: DisabledTemplate,
});
Disabled.args = {};
Disabled.parameters = {
    docs: {
        source: {
            code: DisabledCode,
        },
    },
};

export const mixedImplementation = Template.bind({});
mixedImplementation.component = mixedImplementationComponent;

export const Isolated = Template.bind({});
Isolated.args = {};
Isolated.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-tri-state-checkbox', Isolated.args),
        },
    },
};
