const expect = require('chai').expect;
const stamper = require('../');
const transformer = require('../transformer');
const testUtils = require('../../../../common/test-utils/server');

describe('stamper', () => {
    const findIcons = stamper.privates.findIcons;
    const pageCache = stamper.privates.pageCache;

    test('exit early for missing template path', () => {
        const pageTemplateId = findIcons();
        expect(pageTemplateId).to.equal(undefined);
        expect(pageCache).to.deep.equal({});
    });

    test('finds icons that have been required', () => {
        require('../../internal/arrow-left');
        const pageTemplateId = findIcons({
            global: {
                pageTemplate: {
                    path: __filename
                }
            }
        });
        expect(pageTemplateId).to.equal(__filename);
        expect(pageCache).to.deep.equal({ [__filename]: ['arrow-left'] });
    });
});

describe('transformer', () => {
    test('transforms the body', () => {
        const outputTemplate = testUtils.getTransformedTemplate(transformer, '<body>inner</body>', './fixture.marko');
        expect(outputTemplate).to.deep.equal('<body><ebay-icon-stamper/>inner</body>');
    });
});
