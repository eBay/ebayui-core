import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import eek from './index.marko';
import example1 from './examples/01-A+++/template.marko';
import example2 from './examples/02-A++/template.marko';
import example3 from './examples/03-A+/template.marko';
import example4 from './examples/04-A/template.marko';
import example5 from './examples/05-invalid-combinations/template.marko';

// const Template = (args) => ({
//     input: {
//         ...args,
//         renderBody(out) {
//             out.html(args.renderBody);
//         },
//     },
// });

export default {
    title: 'graphics & icons/ebay-eek',
    component: eek,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        rating: {
            control: { type: 'text' },
            description: 'The energy rating',
        },
        max: {
            control: { type: 'text' },
            description: 'The maximum range',
        },
        min: {
            control: { type: 'text' },
            description: 'The minimum range',
        },
    },
};

export const Standard = (args) => ({ input: args });
Standard.args = {
    max: 'A+++',
    min: 'E',
    rating: 'C',
};

export const exampleOne = () => ({
    component: example1,
    name: 'A+++',
});
exampleOne.storyName = 'A+++';
exampleOne.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const exampleTwo = () => ({
    component: example2,
});
exampleTwo.storyName = 'A++';
exampleTwo.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const exampleThree = () => ({
    component: example3,
    name: 'A+',
});
exampleThree.storyName = 'A++';
exampleThree.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const exampleFour = () => ({
    component: example4,
    name: 'A',
});
exampleFour.storyName = 'A';
exampleFour.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const invalidCombinations = () => ({
    component: example5,
});
invalidCombinations.parameters = {
    controls: { hideNoControlsWarning: true },
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-eek', Standard.args),
        },
    },
};
