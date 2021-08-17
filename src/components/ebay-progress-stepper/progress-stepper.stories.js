import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './examples/01-direction/01-default/template.marko';

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
    title: 'ebay-progress-stepper',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        direction: {
            type: 'enum',
            control: { type: 'select' },
            options: ['row', 'column'],
            description:
                'Will display stepper as a vertical column or horizontal row. Default is "row"',
        },
        defaultState: {
            type: 'enum',
            control: { type: 'select' },
            options: ['complete', 'upcoming', 'active'],
            description:
                'If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. Otherwise, the default (active), will change items based on the `current` item.',
        },
        autoParagraph: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'Specify whether to auto wrap @step body text with a paragraph tag (default: true)',
        },
        step: {
            name: '@step',
            description: '',
            table: {
                category: '@attribute tags',
            },
        },
        title: {
            name: '@title',
            description:
                'The bolded title for each step. Will be rendered in an `h4` by default. In order to override, pass the `as` attribute. `<@title as="h3">Title</@title>`. All other attributes will be passed through to the header tag',
            table: {
                category: '@step subtags',
            },
        },
        current: {
            type: 'boolean',
            control: { type: 'boolean' },
            table: {
                category: '@step attributes',
            },
            description:
                'The current step. Only first step that has this attribute will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any item, then will render based on `default-state` attribute',
        },
        type: {
            table: {
                category: '@step attributes',
            },
            type: 'enum',
            control: { type: 'select' },
            options: [`attention`, `information`, `complete`],
            description:
                'Either `attention`, `information`, or `complete`. This takes prescedence over current. Will render the current step with the given icon and color',
        },
        number: {
            table: {
                category: '@step attributes',
            },
            type: 'number',
            description:
                'Renders the current step with the given number. Overrides the default number counting for this step',
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-stepper', Component),
        },
    },
};
