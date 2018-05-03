const fs = require('fs');
const expect = require('chai').expect;
const iconComponent = require('../');
const transformer = require('../transformer');
const testUtils = require('../../../common/test-utils/server');

describe('icon', () => {
    test('maps each internal component to the icon component', () => {
        fs.readdirSync(`${__dirname}/../internal/`).forEach(file => {
            if (file.endsWith('.js')) {
                const internalComponent = require(`${__dirname}/../internal/${file}`);
                expect(internalComponent).to.deep.equal(iconComponent);
            }
        });
    });

    test('renders background type', context => {
        const input = { type: 'background', name: 'mic' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('span.icon.icon--mic').length).to.equal(1);
    });

    test('renders background type by default', context => {
        const input = { name: 'mic' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('span.icon.icon--mic').length).to.equal(1);
    });

    test('renders inline type', context => {
        const input = { type: 'inline', name: 'mic' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('svg[aria-hidden=true][focusable=false].icon.icon--mic > use').length).to.equal(1);
    });

    test('renders inline type with accessibility text', context => {
        const input = { type: 'inline', name: 'mic', accessibilityText: 'text' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('svg[role=img][focusable=true].icon.icon--mic > use').length).to.equal(1);
    });

    test('handles pass-through html attributes on type=background', context => {
        testUtils.testHtmlAttributes(context, '.icon', null, { type: 'background', name: 'mic' });
    });

    test('handles pass-through html attributes on type=inline', context => {
        // NOTE: this simulates the icon transformer behavior which converts * attributes to their actual names
        testUtils.testHtmlAttributes(context, '.icon', null, { type: 'inline', name: 'mic', 'aria-role': 'link' });
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.icon');
    });
});

describe('transformer', () => {
    const name = 'mic';
    const componentPath = `../internal/${name}.js`;
    function getTagString(type) {
        return {
            before: `<ebay-icon name="${name}" type="${type}"/>`,
            after: `<ebay-icon-${name} name="${name}" type="${type}"/>`
        };
    }

    test('transforms an inline icon', () => {
        const tagString = getTagString('inline');
        const outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.before, componentPath);
        expect(outputTemplate).to.deep.equal(tagString.after);
    });

    test('does not transform a background icon', () => {
        const tagString = getTagString('background');
        const outputTemplate = testUtils.getTransformedTemplate(transformer, tagString.before, componentPath);
        expect(outputTemplate).to.deep.equal(tagString.before);
    });
});
