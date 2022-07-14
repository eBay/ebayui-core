import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import FieldsetTemplate from './examples/02-fieldset/template.marko';
import FieldsetCode from './examples/02-fieldset/template.marko?raw';

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
    title: 'form input/ebay-star-rating-select',
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
        value: {
            control: { type: 'number' },
            description:
                '1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected',
        },
        a11yStarText: {
            control: 'object',
            description: 'Array object which sets the aria label for each star',
        },
        a11yText: {
            control: { type: 'text' },
            description: 'The aria label for the outer container. Only used on isolated case.',
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

export const Isolated = Template.bind({});
Isolated.args = {
    disabled: false,
    a11yStarText: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
    a11yText: 'Rate product',
    value: 0,
};

Isolated.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-star-rating-select', Isolated.args),
        },
    },
};

export const Fieldset = (args) => ({
    input: args,
    component: FieldsetTemplate,
});

Fieldset.args = {
    disabled: false,
    a11yStarText: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
    value: 0,
};

Fieldset.parameters = {
    docs: {
        source: {
            code: FieldsetCode,
        },
    },
};
