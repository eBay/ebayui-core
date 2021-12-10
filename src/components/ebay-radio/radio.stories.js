import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import groupTemplate from './examples/03-grouped-radio/template.marko';
import WithLabelTemplate from './examples/05-with-label/template.marko';
import groupCode from './examples/03-grouped-radio/template.marko?raw';
import WithLabelCode from './examples/05-with-label/template.marko?raw';

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
    title: 'ebay-radio',
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
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'text' },
            description:
                'Either "large" or "regular". Sets the radio icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the radio will not change, but only the icon)',
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on change',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
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
        onKeydown: {
            action: 'on-keydown',
            description: 'Triggered on keydown',
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
WithLabel.args = {
    disabled: false,
};

WithLabel.parameters = {
    docs: {
        source: {
            code: WithLabelCode,
        },
    },
};

export const Group = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
    component: groupTemplate,
});
Group.parameters = {
    docs: {
        source: {
            code: groupCode,
        },
    },
    controls: {
        disabled: true,
    },
};

export const Isolated = Template.bind({});
Isolated.args = {};
Isolated.component = Component;
Isolated.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-radio', Isolated.args),
        },
    },
};
