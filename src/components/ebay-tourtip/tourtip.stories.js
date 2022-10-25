import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';
import example1 from './examples/default.marko?raw';
import withFooterCode from './examples/withFooter.marko?raw';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'notices & tips/ebay-tourtip',
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
        a11yCloseText: {
            control: { type: 'text' },
            description: 'A11y text for close button',
        },

        host: {
            name: '@host',
            description: "The body which will be wrapped as the tourtip's host",
            table: {
                category: '@attribute tags',
            },
        },
        heading: {
            name: '@heading',
            description: 'The heading to be displayed in the tourtip',
            table: {
                category: '@attribute tags',
            },
        },
        content: {
            name: '@content',
            description: 'The content to be displayed in the tourtip',
            table: {
                category: '@attribute tags',
            },
        },
        footer: {
            name: '@footer',
            description:
                'The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.',
            table: {
                category: '@attribute tags',
            },
        },
        open: {
            control: { type: 'boolean' },
            description: 'allows dev to specify whether tourtip is open or closed',
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
    },
};

export const Standard = Template.bind({});
Standard.args = {
    host: {
        renderBody: `<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`,
    },
    heading: {
        renderBody: 'Important',
    },
    content: {
        renderBody: `<p>This new feature was added.</p>`,
    },
    a11yCloseText: 'close',
};
Standard.parameters = {
    docs: {
        source: {
            code: example1,
        },
    },
};

export const withFooter = Template.bind({});
withFooter.args = {
    host: {
        renderBody: `<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`,
    },
    heading: {
        renderBody: 'Important',
    },
    content: {
        renderBody: `<p>This new feature was added.</p>`,
    },
    a11yCloseText: 'close',
    footer: {
        index: '1 of 3',
        renderBody:
            '<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>',
    },
};
withFooter.parameters = {
    docs: {
        source: {
            code: withFooterCode,
        },
    },
};
