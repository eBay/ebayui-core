const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { runTransformer } = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const migrator = require('../migrator');
const template = require('..');

const iconName = 'mic';

use(require('chai-dom'));

describe('icon', () => {
    it('renders inline type with title text', async() => {
        const input = {
            name: iconName,
            a11yText: 'inline icon'
        };

        const { getByRole, getByTitle } = await render(template, input);
        const svg = getByRole('img');
        const title = getByTitle(input.a11yText);
        expect(svg).has.class(`icon--${iconName}`);
        expect(svg).contains(title);
        expect(svg).has.attr('aria-labelledby', title.id);
    });

    it('renders inline type without title text', async() => {
        const input = {
            name: iconName,
            htmlAttributes: {
                'data-testid': 'icon'
            }
        };

        const { getByTestId } = await render(template, input);
        const svg = getByTestId('icon');
        expect(svg).has.attr('aria-hidden', 'true');
    });

    it('renders no-skin-classes', async() => {
        const input = {
            name: iconName, noSkinClasses: true,
            class: 'custom-class',
            htmlAttributes: {
                'data-testid': 'icon'
            }
        };
        const { getByTestId } = await render(template, input);
        const svg = getByTestId('icon');

        expect(svg).has.class('custom-class');
        expect(svg).does.not.have.class(`icon--${iconName}`);
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';
    function getTagString() {
        return `<ebay-icon name="${iconName}" />`;
    }

    it('transforms to add a hidden themes attribute', () => {
        const tagString = getTagString();
        const { el } = runTransformer(transformer, tagString, componentPath);
        const attr = el.getAttribute('_themes');
        expect(attr).to.have.property('name', '_themes');
    });
});

describe('migrator', () => {
    const componentPath = '../index.js';
    function getTagString() {
        return `<ebay-icon type="inline" name="${iconName}" />`;
    }

    it('removes type attribute', () => {
        const tagString = getTagString();
        const { el } = runTransformer(migrator, tagString, componentPath);
        const attr = el.hasAttribute('type');
        expect(attr).to.equal(false);
    });
});
