import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';
import buttonComponent from './examples/01-icon-button-host/template.marko';

// const Template = (args) => ({
//     input: {
//         ...args,
//         renderBody: args.renderBody
//             ? (out) => {
//                   out.html(args.renderBody);
//               }
//             : null,
//     },
// });

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-tooltip',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        pointer: {
            control: { type: 'text' },
            description:
                'options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`',
        },
        styleTop: {
            control: { type: 'text' },
            description: 'a style property for the CSS `top` rule',
        },
        styleLeft: {
            control: { type: 'text' },
            description: 'a style property for the CSS `left` rule',
        },
        styleRight: {
            control: { type: 'text' },
            description: 'a style property for the CSS `right` rule',
        },
        styleBottom: {
            control: { type: 'text' },
            description: 'a style property for the CSS `bottom` rule',
        },
        noHover: {
            control: { type: 'boolean' },
            description: 'disable hover (and only use focus) to open the tooltip',
        },
        host: {
            name: '@host',
            description: "The body which will be wrapped as the tooltip's host",
            table: {
                category: '@attribute tags',
            },
        },
        content: {
            name: '@content',
            description: 'The content to be displayed in the tooltip',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    host: {
        renderBody: `<a href="https://www.ebay.com">View options</a>`,
    },
    content: {
        renderBody: `<p>Use Access Key 'S' to display settings.</p>`,
    },
};

export const buttonHost = (args) => ({
    // eslint-disable-next-line new-cap
    input: Template(args).input,
    component: buttonComponent,
});
buttonHost.parameters = { controls: { exclude: /./ } };
