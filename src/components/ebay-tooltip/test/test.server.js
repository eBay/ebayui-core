
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

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
        const input = { hosts: [{}], contents: [{}] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tooltip').length).to.equal(1);
        expect($('.tooltip__host').length).to.equal(1);
        expect($('.tooltip__overlay .tooltip__cell .tooltip__content').length).to.equal(1);
    });

    test('renders default infotip', context => {
        const input = { type: 'infotip' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.infotip').length).to.equal(1);
        expect($('.infotip__host').length).to.equal(1);
        expect($('button.infotip__host').length).to.equal(1);
        expect($('.infotip__overlay').length).to.equal(1);
    });

    test('renders infotip with a header', context => {
        const input = { type: 'infotip', headings: [{}], contents: [{}] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.infotip__heading').length).to.equal(1);
    });

    test('renders default tourtip', context => {
        const input = { type: 'tourtip', hosts: [{}], contents: [{}] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tourtip').length).to.equal(1);
        expect($('.tourtip__host').length).to.equal(1);
        expect($('.tourtip__overlay').length).to.equal(1);
    });

    test('renders tourtip with a header', context => {
        const input = { type: 'tourtip', hosts: [{}], headings: [{}], contents: [{}] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tourtip__heading').length).to.equal(1);
    });

    test('renders tourtip with host content', context => {
        const input = { type: 'tourtip', hosts: [{}], contents: [{}] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tourtip__host').length).to.equal(1);
    });

    pointerLocations.forEach(location => {
        test(`renders tooltip location: ${location}`, context => {
            const input = { hosts: [{}], contents: [{}], location };
            const $ = testUtils.getCheerio(context.render(input));
            expect($('.tooltip').length).to.equal(1);
            expect($(`.tooltip__pointer.tooltip__pointer--${location}`).length).to.equal(1);
        });
    });
});
