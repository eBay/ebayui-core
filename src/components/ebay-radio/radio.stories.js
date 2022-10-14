import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import groupTemplate from './examples/grouped-radio.marko';
import WithLabelTemplate from './examples/with-label.marko';
import DisabledTemplate from './examples/disabled-with-label.marko';
import groupCode from './examples/grouped-radio.marko?raw';
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
    title: 'form input/ebay-radio',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            options: ['regular', 'large'],
            type: { category: 'Options' },
            table: {
                defaultValue: {
                    summary: 'regular',
                },
            },
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

Disabled.parameters = {
    docs: {
        source: {
            code: DisabledCode,
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
