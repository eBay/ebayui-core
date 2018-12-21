
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/server');

describe('tourtip', () => {
    test('renders default tourtip', context => {
        const input = {
            host: {
                renderyBody: ''
            },
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tourtip').length).to.equal(1);
        expect($('.tourtip__host').length).to.equal(1);
        expect($('.tourtip__overlay').length).to.equal(1);
    });

    test('renders tourtip with a header', context => {
        const input = {
            host: {
                renderyBody: ''
            },
            heading: {
                renderyBody: ''
            },
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.tourtip__heading').length).to.equal(1);
    });
});
