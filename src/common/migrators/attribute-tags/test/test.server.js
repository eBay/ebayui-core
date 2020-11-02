const expect = require('chai').expect;
const transformer = require('../');
const testUtils = require('../../../test-utils/server');

function getTagString(rootTag, nestedTag) {
    return {
        'before': `<${rootTag}-${nestedTag}/>`,
        'after': `<@${nestedTag}/>`
    };
}

describe('when the ebay-combobox-option tag is transformed', () => {
    let tagString;
    let outputTemplate;

    beforeEach(() => {
        const rootTag = 'ebay-combobox';
        const nestedTag = 'option';
        const templatePath = `src/components/${rootTag}/template.marko`;
        tagString = getTagString(rootTag, nestedTag);
        outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.before, templatePath);
    });

    it('transforms the body contents of a listbox', () => {
        expect(outputTemplate).to.deep.equal(tagString.after);
    });
});

describe('when the ebay-menu:item tag is transformed', () => {
    let tagString;
    let outputTemplate;

    beforeEach(() => {
        const rootTag = 'ebay-menu';
        const nestedTag = 'item';
        const templatePath = `src/components/${rootTag}/template.marko`;
        tagString = getTagString(rootTag, nestedTag);
        outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.after, templatePath);
    });

    it('leaves tag as is', () => {
        expect(outputTemplate).to.deep.equal(tagString.after);
    });
});
