const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { runTransformer } = require('../../../common/test-utils/server');
const migrator = require('../migrator');
const template = require('..');

const iconName = 'mic';

use(require('chai-dom'));

describe('icon', () => {
    it('renders inline type with title text', async() => {
        const input = {
            _name: iconName,
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
            _name: iconName,
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
            _name: iconName, noSkinClasses: true,
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

    it('changes name attribute', () => {
        const tagString = getTagString();
        const { el } = runTransformer(migrator, tagString, componentPath);
        expect(el.tagName).to.equal('ebay-mic-icon');
        const attr = el.hasAttribute('name');
        expect(attr).to.equal(false);
    });
});
