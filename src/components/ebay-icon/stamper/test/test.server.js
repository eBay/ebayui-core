const expect = require('chai').expect;
const stamper = require('../');
const transformer = require('../transformer');
const testUtils = require('../../../../common/test-utils/server');

describe('stamper', () => {
    const findIcons = stamper.privates.findIcons;
    const pageCache = stamper.privates.pageCache;
    const currentFileNode = require.cache[__filename];

    test('exit early for missing node id', () => {
        findIcons(currentFileNode, undefined);
        expect(pageCache).to.deep.equal({});
    });

    test('finds icons that have been required', () => {
        require('../../internal/arrow-left');
        findIcons(currentFileNode, __filename);
        expect(pageCache).to.deep.equal({ [__filename]: ['arrow-left'] });
    });
});

describe('transformer', () => {
    test('transforms the body', () => {
        const outputTemplate = testUtils.getTransformedTemplate(transformer, '<body>asdf</body>', './fixture.marko');
        expect(outputTemplate).to.deep.equal('<body><ebay-icon-stamper/>asdf</body>');
    });
});
