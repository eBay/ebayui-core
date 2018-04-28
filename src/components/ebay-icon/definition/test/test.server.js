const expect = require('chai').expect;
const transformer = require('../transformer');
const testUtils = require('../../../../common/test-utils/server');

describe('transformer', () => {
    test('transforms the body', () => {
        const outputTemplate = testUtils.getTransformedTemplate(transformer, '<body>asdf</body>', './fixture.marko');
        expect(outputTemplate).to.deep.equal('<body><ebay-icon-definition/>asdf</body>');
    });
});
