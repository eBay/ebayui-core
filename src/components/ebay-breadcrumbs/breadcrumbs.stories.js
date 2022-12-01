import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Component from './index.marko';
import breadcrumb2 from './examples/last-page-as-current.marko';
import breadcrumb3 from './examples/last-page-as-parent.marko';
import breadcrumb4 from './examples/page-custom-attrs.marko';
import breadcrumb5 from './examples/buttons.marko';
import breadcrumb2Code from './examples/last-page-as-current.marko?raw';
import breadcrumb3Code from './examples/last-page-as-parent.marko?raw';
import breadcrumb4Code from './examples/page-custom-attrs.marko?raw';
import breadcrumb5Code from './examples/buttons.marko?raw';

import Readme from './README.md';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'navigation & disclosure/ebay-breadcrumbs',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        a11yHeadingText: {
            control: { type: 'text' },
            description: 'heading for breadcrumb which will be clipped',
        },
        a11yHeadingTag: {
            control: { type: 'text' },
            table: {
                defaultValue: {
                    summary: 'h2',
                },
            },
            description: 'heading tag for breadcrumb ',
        },
        href: {
            name: 'href',
            table: {
                category: '@item attribute tags',
            },
            description: 'anchor href; omitting the href will switch to a button',
        },
        item: {
            name: '@item',
            table: {
                category: '@attribute tags',
            },
        },
        onSelect: {
            action: 'on-select',
            description: 'Triggered on breadcrumb selected clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, el }',
                },
            },
        },
    },
};

export const heading = Template.bind({});

heading.args = {
    a11yHeadingText: 'Current pages',
    items: [
        {
            href: 'http://www.ebay.com/',
            renderBody: 'eBay',
        },
        {
            href: 'https://www.ebay.com/rpp/cell-phone-pda',
            renderBody: 'Cell Phones, Smart Watches & Accessories',
        },
        {
            href: 'https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905',
            renderBody: 'Smart Watch Accessories',
        },
        {
            href: 'https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906',
            renderBody: 'Smart Watch Bands',
        },
    ],
};

heading.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-breadcrumbs', heading.args),
        },
    },
};

export const lastPageCurrent = () => ({
    component: breadcrumb2,
});
lastPageCurrent.parameters = {
    docs: {
        source: {
            code: breadcrumb2Code,
        },
    },
};

export const lastPageParent = () => ({
    component: breadcrumb3,
});
lastPageParent.parameters = {
    docs: {
        source: {
            code: breadcrumb3Code,
        },
    },
};

export const pageCustomAttribute = () => ({
    component: breadcrumb4,
});
pageCustomAttribute.parameters = {
    docs: {
        source: {
            code: breadcrumb4Code,
        },
    },
};

export const buttons = () => ({
    component: breadcrumb5,
});
buttons.parameters = {
    docs: {
        source: {
            code: breadcrumb5Code,
        },
    },
};
