import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: {
        ...args,
        spread: null,
        ...args.spread,
        content: {
            renderBody:
                args.content && args.content.renderBody
                    ? (out) => {
                          out.html(args.content.renderBody);
                      }
                    : null,
        },
    },
});

export default {
    title: 'buttons/ebay-infotip',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        heading: {
            name: '@heading',
            table: {
                category: '@attribute tags',
            },
        },
        content: {
            name: '@content',
            table: {
                category: '@attribute tags',
            },
        },
        icon: {
            name: '@icon',
            table: {
                category: '@attribute tags',
            },
        },
        variant: {
            control: { type: 'text' },
            description:
                'Either modal or default. If modal will show the mobile version of infotip',
        },
        pointer: {
            control: { type: 'select' },
            options: [
                'top-left',
                'top',
                'top-right',
                'right',
                'right-bottom',
                'right-top',
                'bottom-left',
                'bottom-right',
                'bottom',
                'left',
                'left-bottom',
                'left-top',
            ],
            description:
                'options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'adds a `disabled` attribute to the button',
        },
        styleTop: {
            control: { type: 'text' },
            description: 'a style property for the CSS `top` rule',
        },
        styleLeft: {
            control: { type: 'text' },
            description: 'a style property for the CSS `top` rule',
        },
        styleRight: {
            control: { type: 'text' },
            description: 'a style property for the CSS `top` rule',
        },
        styleBottom: {
            control: { type: 'text' },
            description: 'a style property for the CSS `top` rule',
        },
        a11yCloseText: {
            control: { type: 'text' },
            description: 'A11y text for close button',
        },
        ariaLabel: {
            control: { type: 'text' },
            description:
                'A descriptive label of what the infotip button represents (e.g. "Important information")',
        },
        open: {
            control: { type: 'boolean' },
            description: 'allows dev to specify whether infotip is open or closed',
        },
        onCollapse: {
            action: 'on-collapse',
            description: 'Triggered on menu collapse',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
                },
            },
        },
        onExpand: {
            action: 'on-expand',
            description: 'Triggered on menu expand',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
                },
            },
        },
        spread: {
            control: {
                type: 'object',
            },
            description: 'Additional attributes being passed to component',
            table: {
                category: 'Other',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    heading: {
        renderBody: `Important`,
    },
    content: {
        renderBody: `<p>This is some important info</p>`,
    },
    spread: {
        ariaLabel: 'Important information',
    },
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-infotip', Standard.args),
        },
    },
};

export const OpenOnRender = Template.bind({});
OpenOnRender.args = {
    heading: {
        renderBody: `Important`,
    },
    content: {
        renderBody: `<p>This is some important info</p>`,
    },
    open: true,
};
OpenOnRender.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-infotip', OpenOnRender.args),
        },
    },
};
