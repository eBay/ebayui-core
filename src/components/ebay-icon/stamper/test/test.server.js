const expect = require('chai').expect;
const stamper = require('../');
const transformer = require('../transformer');
const testUtils = require('../../../../common/test-utils/server');

describe('stamper', () => {
    const findIcons = stamper.privates.findIcons;
    const pageCache = stamper.privates.pageCache;

    test('exit early for missing template path', () => {
        const icons = findIcons();
        expect(icons).to.equal(undefined);
        expect(pageCache).to.deep.equal({});
    });

    // run twice; second time invokes cache
    [0, 0].forEach(() => {
        test('finds icons that have been required', () => {
            require('../../examples/3-inline-custom-color/template.marko');
            const icons = findIcons({
                global: {
                    pageTemplate: {
                        path: __filename
                    }
                }
            });
            expect(icons).to.deep.equal(['clear']);
            expect(pageCache).to.deep.equal({ [__filename]: ['clear'] });
        });
    });
});

describe('transformer', () => {
    test('transforms the body', () => {
        const outputTemplate = testUtils.getTransformedTemplate(transformer, '<body>inner</body>', './fixture.marko');
        expect(outputTemplate).to.deep.equal('<body><ebay-icon-stamper/>inner</body>');
    });
});
