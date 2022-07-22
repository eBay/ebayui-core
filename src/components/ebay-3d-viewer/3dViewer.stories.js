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
        assetId: {
            control: { type: 'text' },
            table: {
                category: '',
            },
            description: 'The asset id to load',
        },
        cdnVersion: {
            control: { type: 'text' },
            table: {
                category: '',
                defaultValue: {
                    summary: '1.1.4',
                },
            },
            description: 'The version of the assets to load from CDN',
        },
        defaultDistance: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '5.5',
                },
            },
            description: 'Default distance when loaded',
        },
        maxDistance: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '5.5',
                },
            },
            description: '',
        },
        minDistance: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '4.0',
                },
            },
            description: '',
        },

        fov: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '45',
                },
            },
            description: '',
        },
        minPolarAngle: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '0.3',
                },
            },
            description: '',
        },
        maxPolarAngle: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '1.3',
                },
            },
            description: '',
        },
        dampingFactor: {
            control: { type: 'number' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: '0.12',
                },
            },
            description: '',
        },

        noAllowViewBottom: {
            control: { type: 'boolean' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: 'false',
                },
            },
            description: '',
        },
        noAutoRotate: {
            control: { type: 'boolean' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: 'false',
                },
            },
            description: '',
        },
        noMouseMoveFollow: {
            control: { type: 'boolean' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: 'false',
                },
            },
            description: '',
        },
        noAnimatedPlacement: {
            control: { type: 'boolean' },
            table: {
                category: 'Viewer options',
                defaultValue: {
                    summary: 'false',
                },
            },
            description: '',
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
        a11yErrorText: {
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
    },
};

export const Standard = Template.bind({});
Standard.args = {
    assetId: 'HvTpDZ6C3',
    defaultDistance: 5.5,
    maxDistance: 5.5,
    minDistance: 4.0,

    fov: 45,
    minPolarAngle: 0.3,
    maxPolarAngle: 1.3,
    dampingFactor: 0.12,
    noAllowViewBottom: false,
    noAutoRotate: false,
    noMouseMoveFollow: false,
    noAnimatedPlacement: false,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-3d-viewer', Standard.args),
        },
    },
};
