const expect = require('chai').expect;
const transformer = require('../transformer');
const testUtils = require('../../../../common/test-utils/server');

function getTagString() {
    return {
        before: `<body>asdf</body>`,
        after: `<body><ebay-icon-definition/>asdf</body>`
    };
}

describe('transformer', () => {
    test('transforms the body', () => {
        const tagString = getTagString();
        const outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.before, `./body-fixture.marko`);
        expect(outputTemplate).to.deep.equal(tagString.after);
    });
});
