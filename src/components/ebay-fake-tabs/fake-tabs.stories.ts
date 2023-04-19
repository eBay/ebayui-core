import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'navigation & disclosure/ebay-fake-tabs',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selectedIndex: {
            control: { type: 'number' },
            description: '0-based index of selected tab tab and panel',
        },
        tabMatchesCurrentUrl: {
            control: { type: 'boolean' },
            description:
                'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").',
        },
        tab: {
            name: '@tab',
            table: {
                category: '@attribute tags',
            },
        },
        href: {
            control: { type: 'text' },
            description: 'The link to take the user to for each tab',
            table: {
                category: '@tag attributes',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    tabs: [
        {
            renderBody: `Tab 1`,
            href: 'https://www.ebay.com',
        },
        {
            renderBody: `Tab 2`,
            href: 'https://www.ebay.com',
        },
        {
            renderBody: `Tab 3`,
            href: 'https://www.ebay.com',
        },
    ],
    renderBody: `Lorum ipsom dolor`,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-fake-tabs', Standard.args, { tabs: 'tab' }),
        },
    },
};
