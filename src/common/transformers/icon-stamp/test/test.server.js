const path = require('path');
const expect = require('chai').expect;
const transformer = require('../');
const { runTransformer } = require('../../../test-utils/server');

describe('transformer', () => {
    const componentPath = '../index.js';
    const relSymbolPath = '../../../../components/ebay-custom-icon/test/custom-symbols';

    function getTagString(type, name = 'mic') {
        return `<ebay-icon name="${name}" type="${type}"/>`;
    }

    it('transforms to add a hidden themes attribute', () => {
        const tagString = getTagString('inline');
        const { el } = runTransformer(transformer, tagString, componentPath, relSymbolPath);
        const attr = el.getAttribute('_themes');
        expect(attr).to.have.property('name', '_themes');
    });

    const tagStrings = [
        {
            symbolPath: path.join(__dirname, relSymbolPath),
            ds4Path: './ebayui-core/src/components/ebay-custom-icon/test/custom-symbols/custom-add',
            ds6Path:
                './ebayui-core/src/components/ebay-custom-icon/test/custom-symbols/custom-add/index[skin-ds6].marko'
        }, {
            symbolPath: relSymbolPath,
            ds4Path: '../../../components/ebay-custom-icon/test/custom-symbols/custom-add/index.marko',
            ds6Path: '../../../components/ebay-custom-icon/test/custom-symbols/custom-add/index[skin-ds6].marko'
        }
    ];

    tagStrings.forEach(({ symbolPath, ds4Path, ds6Path }) => {
        it(`supports custom symbol paths (${symbolPath})`, () => {
            const { el, context } = runTransformer(transformer, getTagString('inline', 'custom-add'),
                componentPath, symbolPath);
            const attr = el.getAttribute('_themes');
            expect(attr).to.have.property('name', '_themes');
            expect(context.getStaticVars().icon_custom_add.elements[0].args[0].value).to.deep.equal(ds4Path);
            expect(context.getStaticVars().icon_custom_add.elements[1].args[0].value).to.deep.equal(ds6Path);
        });
    });

    it('does not transform a background icon', () => {
        const tagString = getTagString('background');
        const { el } = runTransformer(transformer, tagString, componentPath);
        const attr = el.getAttribute('_themes');
        expect(attr).equals(undefined);
    });
});
