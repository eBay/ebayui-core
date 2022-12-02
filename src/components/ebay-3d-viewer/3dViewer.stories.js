import { tagToString } from '../../../.storybook/storybook-code-source';
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
    title: 'media/ebay-3d-viewer',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        src: {
            control: { type: 'text' },
            description: 'The asset to load',
        },
        cdnVersion: {
            control: { type: 'text' },
            table: {
                category: '',
                defaultValue: {
                    summary: '2.1.1',
                },
            },
            description:
                'The version of the assets to load from CDN. This can be overriden in case the current verion has issues',
        },
        cdnUrl: {
            control: { type: 'text' },
            description:
                'This will override the whole URL used for downloading the media player assets. This is mainly used if you want to use your own CDN.',
        },
        a11yText: {
            control: { type: 'text' },
            table: {
                category: 'Accessibility',
                defaultValue: {
                    summary: '',
                },
            },
            description:
                'The text for screen readers to read out when interacting with the 3d player.',
        },
        a11yStartText: {
            control: { type: 'text' },
            table: {
                category: 'Accessibility',
                defaultValue: {
                    summary: 'Click to start',
                },
            },
            description: 'Text for start icon to load viewer',
        },
        a11yLoadText: {
            control: { type: 'text' },
            table: {
                category: 'Accessibility',
                defaultValue: {
                    summary: 'Loading',
                },
            },
            description: 'Text for loading icon loading viewer',
        },
        errorText: {
            control: { type: 'text' },
            table: {
                category: 'Accessibility',
                defaultValue: {
                    summary: 'An error has occurred',
                },
            },
            description: 'Text to show error message',
        },
        onAction: {
            action: 'on-action',
            description: 'Triggered when interacting with player',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
        onProgress: {
            action: 'on-progress',
            description: 'Triggered ',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
        onLoad: {
            action: 'on-load',
            description: 'Triggered when loading is complete',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
        onLoadError: {
            action: 'on-load-error',
            description: 'Triggered when loading error happens',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
        'on-model-visibility': {
            action: 'on-model-visibility',
            description: 'Triggered when model is visible',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
        'on-render-scale': {
            action: 'on-render-scale',
            description: 'Triggered when model scales',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
        'on-poster-dismissed': {
            action: 'on-poster-dismissed',
            description: "Triggered when there's a placeholder image and it is removed",
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb',
    a11yText: 'View these shoes for sale.',
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-3d-viewer', Standard.args),
        },
    },
};
