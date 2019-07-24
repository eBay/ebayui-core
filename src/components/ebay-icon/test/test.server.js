const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, runTransformer } = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const template = require('..');

const iconName = 'mic';

use(require('chai-dom'));

describe('icon', () => {
    describe('with type=background', () => {
        it('renders background type', async() => {
            const input = {
                type: 'background',
                name: iconName,
                htmlAttributes: {
                    ariaLabel: 'background icon'
                }
            };
    
            const { getByLabelText } = await render(template, input);
            const icon = getByLabelText(input.htmlAttributes.ariaLabel);
            expect(icon).has.class(`icon--${iconName}`);
        });
    
        it('renders background type by default', async() => {
            const input = {
                name: iconName,
                htmlAttributes: {
                    ariaLabel: 'background icon'
                }
            };
    
            const { getByLabelText } = await render(template, input);
            expect(getByLabelText(input.htmlAttributes.ariaLabel)).has.class(`icon--${iconName}`);
        });

        testPassThroughAttributes(template, {
            input: {
                type: 'background'
            }
        });
    });

    describe('with type=inline', () => {
        it('renders inline type with title text', async() => {
            const input = {
                type: 'inline',
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
                type: 'inline',
                name: iconName,
                htmlAttributes: {
                    "data-testid": "icon"
                }
            };
    
            const { getByTestId } = await render(template, input);
            const svg = getByTestId('icon');
            expect(svg).does.not.have.attr('aria-labelledby');
            expect(svg).has.attr('aria-hidden', 'true');
        });
    
        it('renders no-skin-classes', async() => {
            const input = {
                type: 'inline',
                name: iconName, noSkinClasses: true,
                class: 'custom-class',
                htmlAttributes: {
                    "data-testid": "icon"
                }
            };
            const { getByTestId } = await render(template, input);
            const svg = getByTestId('icon');
    
            expect(svg).has.class('custom-class');
            expect(svg).does.not.have.class(`icon--${iconName}`);
        });

        testPassThroughAttributes(template, {
            input: {
                type: 'inline'
            }
        });
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';
    function getTagString(type) {
        return `<ebay-icon name="${iconName}" type="${type}"/>`;
    }

    it('transforms to add a hidden themes attribute', () => {
        const tagString = getTagString('inline');
        const { el } = runTransformer(transformer, tagString, componentPath);
        const attr = el.getAttribute('_themes');
        expect(attr).to.have.property('name', '_themes');
    });

    it('does not transform a background icon', () => {
        const tagString = getTagString('background');
        const { el } = runTransformer(transformer, tagString, componentPath);
        const attr = el.getAttribute('_themes');
        expect(attr).equals(undefined);
    });
});
