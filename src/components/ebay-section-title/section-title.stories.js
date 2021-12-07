import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';
import exampleComponent from './examples/09-medium-with-info-overflow/template.marko';
import code from '!raw-loader!./examples/09-medium-with-info-overflow/template.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-section-title',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        href: {
            control: { type: 'text' },
            description: 'RL. Title content and optional CTA content will link to this',
        },
        size: {
            control: { type: 'text' },
            description: '"small", "large", or "giant" (default: medium)',
        },
        title: {
            name: '@title',
            description:
                'The main title content to be displayed. Title tag is required when using other sub-tags.',
            table: {
                category: '@attribute tags',
            },
        },
        subtitle: {
            name: '@subtitle',
            description: 'The subtitle content to be displayed',
            table: {
                category: '@attribute tags',
            },
        },
        info: {
            name: '@info',
            control: { type: 'text' },
            description: 'Placeholder for `<ebay-infotip>` component',
            table: {
                category: '@attribute tags',
            },
        },
        overflow: {
            name: '@overflow',
            control: { type: 'text' },
            description: 'Placeholder for `<ebay-menu-button>` component',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    title: { renderBody: `Todays Best Deals` },
    subtitle: { renderBody: `with free shipping!` },
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-section-title', Standard.args),
        },
    },
};

export const example = () => ({
    component: exampleComponent,
});

Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
