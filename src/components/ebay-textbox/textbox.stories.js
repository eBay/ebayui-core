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
    title: 'ebay-textbox',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        fluid: {
            type: 'boolean',
            control: { type: 'boolean' },
        },
        inputSize: {
            control: { type: 'text' },
            description: 'either "regular" or "large". If large, then renders larger sized textbox',
        },
        multiline: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'renders a multi-line texbox if true',
        },
        invalid: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'indicates a field-level error with red border if true',
        },
        buttonAriaLabel: {
            control: { type: 'text' },
            description:
                'aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`',
        },
        prefixIcon: {
            name: '@prefix-icon',
            description: 'An `<ebay-{name}-icon>` to show as the prefix icon.',
            table: {
                category: '@attribute tags',
            },
        },
        postfixIcon: {
            name: '@postfix-icon',
            description: 'An `<ebay-{name}-icon>` to show as the postfix icon.',
            table: {
                category: '@attribute tags',
            },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered when focus leaves and value is changedf',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
                },
            },
        },
        onInputChange: {
            action: 'on-input-change',
            description: 'Triggered when the value of the input is changed',
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
        onBlur: {
            action: 'on-blur',
            description: 'Triggered on blur',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
                },
            },
        },
        onKeypress: {
            action: 'on-keypress',
            description: 'Triggered on keypress',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
                },
            },
        },
        onKeyup: {
            action: 'on-keyup',
            description: 'Triggered on keup',
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
        onInvalid: {
            action: 'on-invalid',
            description: 'Triggered when value is invalid',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
                },
            },
        },
        onFloatingLabelInit: {
            action: 'on-floating-label-init',
            description: 'Triggered when floating label is initialized',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
                },
            },
        },
        onButtonClick: {
            action: 'on-button-click',
            description:
                'Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly',
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
