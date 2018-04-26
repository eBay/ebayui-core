const expect = require('chai').expect;
const transformer = require('../transformer');
const testUtils = require('../../../common/test-utils/server');

describe('icon', () => {
    test('renders background type', context => {
        const input = { type: 'background', name: 'arrow-left' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('span.icon.icon--arrow-left').length).to.equal(1);
    });

    test('renders background type by default', context => {
        const input = { name: 'arrow-left' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('span.icon.icon--arrow-left').length).to.equal(1);
    });

    test('renders inline type', context => {
        const input = { type: 'inline', name: 'arrow-left' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('svg.icon.icon--arrow-left > use').length).to.equal(1);
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.icon');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.icon');
    });
});

function getTagString(name, type) {
    return {
        before: `<ebay-icon name="${name}" type="${type}"/>`,
        after: `<ebay-icon-${name} name="${name}" type="${type}"/>`
    };
}

describe('transformer', () => {
    const name = 'arrow-left';
    const componentPath = `../internal/${name}.js`;
    test('transforms an inline icon', () => {
        const tagString = getTagString(name, 'inline');
        const outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.before, componentPath);
        expect(outputTemplate).to.deep.equal(tagString.after);
    });

    test('does not transform a background icon', () => {
        const tagString = getTagString(name, 'background');
        const outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.before, componentPath);
        expect(outputTemplate).to.deep.equal(tagString.before);
    });
});

// fs.readdirSync(`${__dirname}/../internal/`).forEach(file => {
//     if (file.endsWith('.js')) {
//         require(`${__dirname}/../internal/${file}`);
//     }
// });
