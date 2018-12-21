
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/server');

const pointerLocations = [
    'top-left',
    'top',
    'top-right',
    'right',
    'right-bottom',
    'right-top',
    'bottom-left',
    'bottom-right',
    'bottom',
    'left',
    'left-bottom',
    'left-top'
];

describe('tooltip', () => {
    test('renders default tooltip', context => {
        const input = {
            host: {
                renderyBody: ''
            },
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tooltip').length).to.equal(1);
        expect($('.tooltip__host').length).to.equal(1);
        expect($('.tooltip__overlay .tooltip__cell .tooltip__content').length).to.equal(1);
    });

    pointerLocations.forEach(location => {
        test(`renders tooltip location: ${location}`, context => {
            const input = {
                host: {
                    renderyBody: ''
                },
                content: {
                    renderyBody: ''
                },
                location
            };
            const $ = testUtils.getCheerio(context.render(input));
            expect($('.tooltip').length).to.equal(1);
            expect($(`.tooltip__pointer.tooltip__pointer--${location}`).length).to.equal(1);
        });
    });
});
