import { tagToString } from '../../../.storybook/storybook-code-source';
import carousel from './index.marko';
import readme from './README.md';
import './examples/example-styles.less';
import defaultTabIndex from './examples/preserve-tabindex.marko';
import defaultTabIndexCode from './examples/preserve-tabindex.marko?raw';

const images = [
    'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg',
    'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg',
    'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg',
    'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg',
    'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg',
    'http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg',
];

function getItemWidth(itemWidth, index) {
    if (itemWidth === 'variable') {
        const width = [100, 75, 120, 200, 130, 150, 100, 200, 60];
        return `${width[index % width.length]}px`;
    }
}

function getItems(numberOfItems, imageTreatment, autoplay, itemWidth) {
    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
        if (imageTreatment === 'matte' && images[i]) {
            items.push({
                renderBody(out) {
                    out.html(`<img src="${images[i]}"/>`);
                },
            });
        } else {
            const width = getItemWidth(itemWidth, i);
            const className = autoplay ? 'demo2-card' : 'demo-card';
            items.push({
                class: className,
                style: width && `width: ${width}`,
                renderBody(out) {
                    out.html(`Card ${i + 1}`);
                },
            });
        }
    }
    return items;
}

const Template = (args) => ({ input: { ...args } });
// const Template = args =({ input: withRenderBody(args) })

export default {
    title: 'navigation & disclosure/ebay-carousel',
    component: carousel,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        numberOfItems: {
            description: 'The amount of items',
            table: {
                category: 'Demo configuration',
            },
        },

        item: {
            name: '@item',
            description: 'The contents for each item',
            table: {
                category: '@attribute tags',
            },
        },
        imageTreatment: {
            options: ['none', 'matte'],
            description: 'If "matte", image treatment styles are applied.',
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
            type: 'select',
        },
        index: {
            type: 'number',
            description: '0-based index position',
        },
        itemsPerSlide: {
            description:
                'automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.',
        },
        gap: {
            type: 'number',
            description: 'override the margin between carousel items in pixels',
            table: {
                defaultValue: {
                    summary: '16',
                },
            },
        },

        'aria-label': {
            description: 'a11y label text for component',
            table: {
                category: 'accessibility attributes',
            },
            control: { type: 'text' },
        },

        'aria-labelledby': {
            description: 'id of element containing a11y label text for component',
            table: {
                category: 'accessibility attributes',
            },
            control: { type: 'text' },
        },

        'aria-roledescription': {
            description: 'a11y role description for component',
            table: {
                defaultValue: {
                    summary: 'Carousel',
                },

                category: 'accessibility attributes',
            },
            control: { type: 'text' },
        },

        'a11y-next-text': {
            description: 'a11y text for next control',
            table: {
                defaultValue: {
                    summary: 'Next Slide',
                },

                category: 'accessibility attributes',
            },
        },

        'a11y-previous-text': {
            description: 'a11y text for previous control',
            table: {
                defaultValue: {
                    summary: 'Previous Slide',
                },

                category: 'accessibility attributes',
            },
        },

        //     text(
        //     'badge-aria-label',
        //     'number of notifications',
        //     'Badge (only with variant=icon)'
        //     )
        // },
        onCarouselUpdate: {
            action: 'on-carousel-update',
            description: 'called whenever item visibility changes, including initialization',
            table: {
                category: 'Events',
                defaultValue: {
                    detail: '{ [visibleIndexes] }',
                },
            },
        },
        onNext: {
            action: 'on-next',
            description: 'click next',
            table: {
                category: 'Events',
                defaultValue: {
                    detail: '{ originalEvent }',
                },
            },
        },
        onPrevious: {
            action: 'on-previous',
            description: 'click previous',
            table: {
                category: 'Events',
                defaultValue: {
                    detail: '{ originalEvent }',
                },
            },
        },
        onScroll: {
            action: 'on-scroll',
            description: 'new index is navigated to by native scrollin',
            table: {
                category: 'Events',
                defaultValue: {
                    detail: '{ index }',
                },
            },
        },

        onSlide: {
            action: 'on-slide',
            description: 'new slide is navigated to (by controls or API)',
            table: {
                category: 'Events (items-per-slide)',
                defaultValue: {
                    summary: '{ slide }',
                },
            },
        },

        onPlay: {
            action: 'on-play',
            description: 'called when the autoplay play button is pressed',
            table: {
                category: 'Events (autoplay)',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onPause: {
            action: 'on-pause',
            description: 'called when the autoplay pause button is pressed',
            table: {
                category: 'Events (autoplay)',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
    },
};

export const continuous = Template.bind({});
continuous.args = {
    index: 0,
    gap: 16,
    items: getItems(10),
    'a11y-previous-text': '',
    'a11y-next-text': '',
    'aria-label': 'Continuous',
};

continuous.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-carousel', continuous.args),
        },
    },
};

export const continuousVariedWidth = Template.bind({});
continuousVariedWidth.args = {
    index: 0,
    gap: 16,
    items: getItems(10, 'none', false, 'variable'),
    'a11y-previous-text': '',
    'a11y-next-text': '',
    'aria-label': 'Continuous, Varied Width',
};

continuousVariedWidth.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-carousel', continuousVariedWidth.args),
        },
    },
};

export const imageTreatment = Template.bind({});
imageTreatment.args = {
    index: 0,
    gap: 16,
    imageTreatment: 'matte',
    items: getItems(10, 'matte'),
    itemWidth: 'fixed',
    'a11y-previous-text': '',
    'a11y-next-text': '',
    'aria-label': 'Image treatment',
};

imageTreatment.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-carousel', imageTreatment.args),
        },
    },
};

export const itemsPerSlide = Template.bind({});
itemsPerSlide.args = {
    items: getItems(5),
    index: 0,
    gap: null,
    'a11y-previous-text': null,
    'a11y-next-text': null,
    itemsPerSlide: '2',
    'aria-label': 'Items Per Slide',
};
itemsPerSlide.parameters = {
    controls: { exclude: ['autoplay'] },
    docs: {
        source: {
            code: tagToString('ebay-carousel', continuous.args, { items: 'item' }),
        },
    },
};

export const autoplay = Template.bind({});
autoplay.args = {
    index: 0,
    gap: null,
    items: getItems(10, 'none', true),
    'a11y-previous-text': null,
    'a11y-next-text': null,
    itemsPerSlide: '1',
    autoplay: true,
    'aria-label': 'Autoplay',
};

autoplay.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-carousel', autoplay.args, { items: 'item' }),
        },
    },
};

export const PreserveTabindex = (args) => ({
    input: args,
    component: defaultTabIndex,
});
PreserveTabindex.args = {
    items: getItems(5),
    index: 0,
    gap: null,
    'a11y-previous-text': null,
    'a11y-next-text': null,
    itemsPerSlide: '2',
    'aria-label': 'Items Per Slide',
};
PreserveTabindex.parameters = {
    docs: {
        source: {
            code: defaultTabIndexCode,
        },
    },
};
