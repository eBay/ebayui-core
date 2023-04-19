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
    title: 'media/ebay-video',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        thumbnail: {
            description: 'The url path for the video thumbnail',
            control: { type: 'text' },
        },
        action: {
            description: 'Either "play" or "pause". Will programatically perform the given action',
            control: { type: 'text' },
        },
        volume: {
            type: 'number',
            table: {
                defaultValue: 0,
            },
            control: { type: 'number', min: 0, max: 1, step: 0.1 },
        },
        muted: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'True/False to mute or unmute video. Default is false',
        },
        playView: {
            description:
                'Either "inline", or "fullscreen". When player strats to play, will either play "inline" (default) or switch to "fullscreen"',
            control: { type: 'text' },
        },
        cdnUrl: {
            description:
                'The full url to point to where to download shaka. This is only used to override the default CDN path.',
            control: { type: 'text' },
        },
        cssUrl: {
            control: { type: 'text' },
            description:
                'The full url to point to where to download shaka css. This is only used to override the default CDN path.',
        },
        cdnVersion: {
            control: { type: 'text' },
            description:
                'If using the default CDN path, you can override what version of shaka to use.',
        },
        a11yLoadText: {
            control: { type: 'text' },
            description: 'The accessibility text for the loading spinner. Default is "Loading"',
        },
        a11yPlayText: {
            control: { type: 'text' },
            description: 'The accessibility text for the play button. Default is "Click to play"',
        },
        errorText: {
            control: { type: 'text' },
            description:
                'The content for error when an either the library or video cannot load. Default is "An error has occurred"',
        },
        reportText: {
            control: { type: 'text' },
            description: 'The text for report button. Default is "Report"',
        },
        volumeSlider: {
            type: 'boolean',
            description: 'True/False to keep or remove volume slider. Default is False',
        },

        source: {
            name: '@source',
            table: {
                category: '@attribute tags',
            },
        },
        onLoadError: {
            action: 'on-load-error',
            description: 'Triggered when there is a load error with video player or source',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onPlay: {
            action: 'on-play',
            description: 'Triggered when play begins',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, player }',
                },
            },
        },
        onVolumeChange: {
            action: 'on-volume-change',
            description:
                'Triggered when volume is changed. Will return the values of the volume decimal and muted true/false',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, volume, muted }',
                },
            },
        },
        onReport: {
            action: 'on-report',
            description: 'Triggered when report button is clicked',
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
    width: '600',
    height: '400',
    sources: [
        {
            src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd',
            type: 'dash',
        },
    ],
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-video', Standard.args),
        },
    },
};

export const ios = Template.bind({});
ios.storyName = 'ios';
ios.args = {
    width: '600',
    height: '400',
    sources: [
        {
            src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.m3u8',
            type: 'hls',
        },
        {
            src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd',
            type: 'dash',
        },
    ],
};

ios.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-video', ios.args),
        },
    },
};

export const mp4 = Template.bind({});
mp4.storyName = 'mp4';
mp4.args = {
    width: '460',
    height: '300',
    'a11y-load-text': 'This video is loading now',
    'a11y-play-text': 'Click to start this video',
    sources: [
        {
            src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4',
        },
    ],
};
mp4.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-video', mp4.args),
        },
    },
};
