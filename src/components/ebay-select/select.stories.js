import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import WithLabelTemplate from './examples/07-external-label/template.marko';
import WithLabelCode from './examples/07-external-label/template.marko?raw';
import InFormTemplate from './examples/08-in-form/template.marko';
import InFormCode from './examples/08-in-form/template.marko';

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
    title: 'form input/ebay-select',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selected: {
            control: { type: 'number' },
            description: 'allows you to set the selected index option to `selected`',
        },
        floatingLabel: {
            type: 'string',
            control: { type: 'string' },
            description:
                'if set, then label will move up and down. Need to have first option to have a nullable value.',
        },
        borderless: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether button has borders',
        },
        isLarge: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'to show large version',
        },

        text: {
            control: { type: 'text' },
            description: 'text to use in the option',
            table: {
                category: '@option attributes',
            },
        },
        value: {
            control: { type: 'text' },
            description: 'used for the `value` attribute of the native `<option>`',
            table: {
                category: '@option attributes',
            },
        },
        option: {
            name: '@option',
            table: {
                category: '@attribute tags',
            },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on option selected',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ el, index, selected }',
                },
            },
        },
    },
};

export const Floating = Template.bind({});
Floating.args = {
    floatingLabel: 'Option',
    options: [
        {
            text: 'Select an option',
            value: '',
        },
        {
            text: 'option 1',
            value: 'option 1',
        },
        {
            text: 'option 2',
            value: 'option 2',
        },
        {
            text: 'option 3',
            value: 'option 3',
        },
    ],
};
Floating.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-select', Floating.args, { options: 'option' }),
        },
    },
};

export const ExternalLabel = (args) => ({
    input: args,
    component: WithLabelTemplate,
});

ExternalLabel.args = {
    options: [
        {
            text: 'option 1',
            value: 'option 1',
        },
        {
            text: 'option 2',
            value: 'option 2',
        },
        {
            text: 'option 3',
            value: 'option 3',
        },
    ],
};
ExternalLabel.parameters = {
    docs: {
        source: {
            code: WithLabelCode,
        },
    },
};

export const InForm = (args) => ({
    input: args,
    component: InFormTemplate,
});

InForm.args = {
    options: [
        {
            text: 'option 1',
            value: 'option 1',
        },
        {
            text: 'option 2',
            value: 'option 2',
        },
        {
            text: 'option 3',
            value: 'option 3',
        },
    ],
};
InForm.parameters = {
    docs: {
        source: {
            code: InFormCode,
        },
    },
};
