const expect = require('chai').expect;
const markoCompiler = require('marko/compiler');
const prettyPrint = require('marko-prettyprint').prettyPrintAST;
const CompileContext = require('marko/compiler/CompileContext');
const Builder = require('marko/compiler/Builder');
const transformer = require('../');

function getTransformedTemplate(srcString, templatePath) {
    const templateAST = markoCompiler.parseRaw(
        srcString,
        templatePath
    );
    const context = new CompileContext(
        srcString,
        templatePath,
        Builder.DEFAULT_BUILDER
    );

    transformer(templateAST.body.array[0], context);
    return prettyPrint(templateAST).replace(/\>\s*</g, '><').trim();
}

function getTagString(rootTag, nestedTag) {
    return {
        'before': `<${rootTag}><${rootTag}-${nestedTag}/></${rootTag}>`,
        'after': `<${rootTag}><${rootTag}:${nestedTag}/></${rootTag}>`
    };
}


describe('when the ebay-select-option tag is tranformed', () => {
    let tagString;
    let outputTemplate;

    beforeEach(() => {
        const rootTag = 'ebay-select';
        const nestedTag = 'option';
        const templatePath = `../../../components/${rootTag}/template.marko`;
        tagString = getTagString(rootTag, nestedTag);
        outputTemplate = getTransformedTemplate(tagString.before, templatePath);
    });

    test('transforms the body contents of a listbox', () => {
        expect(outputTemplate).to.deep.equal(tagString.after);
    });
});

describe('when the ebay-menu-item tag is transformed', () => {
    let tagString;
    let outputTemplate;

    beforeEach(() => {
        const rootTag = 'ebay-menu';
        const nestedTag = 'item';
        const templatePath = `../../../components/${rootTag}/template.marko`;
        tagString = getTagString(rootTag, nestedTag);
        outputTemplate = getTransformedTemplate(tagString.before, templatePath);
    });

    test('transforms the body contents of a menu', () => {
        expect(outputTemplate).to.deep.equal(tagString.after);
    });
});

describe('when the ebay-menu:item tag is transformed', () => {
    let tagString;
    let outputTemplate;

    beforeEach(() => {
        const rootTag = 'ebay-menu';
        const nestedTag = 'item';
        const templatePath = `../../../components/${rootTag}/template.marko`;
        tagString = getTagString(rootTag, nestedTag);
        outputTemplate = getTransformedTemplate(tagString.after, templatePath);
    });

    test('leaves tag as is', () => {
        expect(outputTemplate).to.deep.equal(tagString.after);
    });
});
