
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/server');

describe('infotip', () => {
    test('renders default infotip', context => {
        const input = {
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.infotip').length).to.equal(1);
        expect($('.infotip__host').length).to.equal(1);
        expect($('button.infotip__host').length).to.equal(1);
        expect($('.infotip__overlay').length).to.equal(1);
    });

    test('renders infotip with a header', context => {
        const input = {
            heading: {
                renderyBody: ''
            },
            content: {
                renderyBody: ''
            }
        };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.infotip__heading').length).to.equal(1);
    });
});
