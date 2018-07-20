const expect = require('chai').expect;
const transformer = require('../transformer');
const testUtils = require('../../../common/test-utils/server');

const iconName = 'mic';

describe('icon', () => {
    test('renders background type', context => {
        const input = { type: 'background', name: iconName };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(`span.icon.icon--${iconName}`).length).to.equal(1);
    });

    test('renders background type by default', context => {
        const input = { name: iconName };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(`span.icon.icon--${iconName}`).length).to.equal(1);
    });

    test('renders inline type', context => {
        const input = { type: 'inline', name: iconName };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(`svg[aria-hidden=true].icon.icon--${iconName} > use`).length).to.equal(1);
    });

    test('renders inline type with accessibility text', context => {
        const input = { type: 'inline', name: iconName, accessibilityText: 'text' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(`svg[role=img].icon.icon--${iconName} > use`).length).to.equal(1);
    });

    test('renders no-skin-classes', context => {
        const input = { type: 'inline', name: iconName, noSkinClasses: true, class: 'class' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(`svg[aria-hidden=true].icon.icon--${iconName} > use`).length).to.equal(0);
        expect($(`svg[aria-hidden=true].class > use`).length).to.equal(1);
    });

    test('handles pass-through html attributes on type=background', context => {
        testUtils.testHtmlAttributes(context, '.icon', null, { type: 'background', name: iconName });
    });

    test('handles pass-through html attributes on type=inline', context => {
        testUtils.testHtmlAttributes(context, '.icon', null, { type: 'inline', name: iconName });
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.icon');
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';
    function getTagString(type) {
        return `<ebay-icon name="${iconName}" type="${type}"/>`;
    }

    test('transforms an inline icon', () => {
        const tagString = getTagString('inline');
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [includeEl] } } = el;
        expect(includeEl.tagName).equals('include');
        expect(includeEl.argument).includes(`${iconName}.marko`);
    });

    test('does not transform a background icon', () => {
        const tagString = getTagString('background');
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [includeEl] } } = el;
        expect(includeEl).equals(undefined);
    });
});
