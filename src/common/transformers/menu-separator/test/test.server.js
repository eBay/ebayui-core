const expect = require('chai').expect;
const transformer = require('../');
const testUtils = require('../../../test-utils/server');

describe('when the ebay-menu-separator tag is transformed', () => {
    let outputTemplate;

    beforeEach(() => {
        const templatePath = `../../../components/ebay-menu/index.marko`;
        outputTemplate = testUtils.getTransformedTemplate(transformer, 'ebay-menu-separator', templatePath);
    });

    it('transforms the ebay-menu-separator', () => {
        expect(outputTemplate).to.deep.equal('<ebay-menu:item isSeparator=true/>');
    });
});

describe('when the ebay-menu-button-separator tag is transformed', () => {
    let outputTemplate;

    beforeEach(() => {
        const templatePath = `../../../components/ebay-menu/index.marko`;
        outputTemplate = testUtils.getTransformedTemplate(transformer, 'ebay-menu-button-separator', templatePath);
    });

    it('transforms the ebay-menu-button-separator', () => {
        expect(outputTemplate).to.deep.equal('<ebay-menu-button:item isSeparator=true/>');
    });
});
