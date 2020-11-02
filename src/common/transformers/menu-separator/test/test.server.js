const expect = require('chai').expect;
const transformer = require('../');
const testUtils = require('../../../test-utils/server');

describe('when the ebay-menu-separator tag is transformed', () => {
    let outputTemplate;

    beforeEach(() => {
        const templatePath = `src/components/ebay-menu/index.marko`;
        outputTemplate = testUtils.getTransformedTemplate(transformer, '@separator', templatePath);
    });

    it('transforms the ebay-menu-separator', () => {
        expect(outputTemplate).to.deep.equal('<@item _isSeparator=true/>');
    });
});
