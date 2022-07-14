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
    title: 'notices & tips/ebay-inline-notice',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        status: {
            table: {
                defaultValue: {
                    summary: 'attention',
                },
            },

            description: 'The icon used and status of the noptice',
            options: ['attention', 'confirmation', 'information'],
            type: 'select',
        },
        icon: {
            table: {
                defaultValue: {
                    summary: 'default',
                },
            },
            options: ['default', 'none'],
            type: 'select',
            description: 'matches whatever is specified by the "status", or if none hides icon',
        },
        a11yText: {
            description: 'adding description for the notice for a11y users',
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: `<p>
    <strong>Error:</strong> Please take another look at the following:
</p>
<p>
    <a href="#">Card number</a>,
    <a href="#">Expiration date</a>
    &amp;
    <a href="#">Security code</a>
</p>`,
    a11yText: 'attention',
    status: null,
    icon: null,
};
