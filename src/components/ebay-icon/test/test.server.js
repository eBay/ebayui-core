const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, runTransformer } = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const template = require('..');
const sinon = require('sinon');

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

        it('renders inline type with custom symbol', async() => {
            const input = {
                type: 'inline',
                name: 'custom-add',
                path: `${__dirname}/custom-symbols`,
                a11yText: 'inline icon'
            };
            const { getByRole, getByTitle } = await render(template, input);
            const svg = getByRole('img');
            const title = getByTitle(input.a11yText);
            expect(svg).has.class(`icon--${input.name}`);
            expect(svg.outerHTML).to.contain(`<use xlink:href="#icon-${input.name}"></use>`);
            expect(svg).has.attr('aria-labelledby', title.id);
        });

        it('renders inline type without title text', async() => {
            const input = {
                type: 'inline',
                name: iconName,
                htmlAttributes: {
                    'data-testid': 'icon'
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
                    'data-testid': 'icon'
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

    const tagStrings = [
        {
            input: `<ebay-icon name="custom-add" type="inline" path="${__dirname}/custom-symbols"/>`,
            ds4Path: './ebayui-core/src/components/ebay-icon/test/custom-symbols/custom-add',
            ds6Path: './ebayui-core/src/components/ebay-icon/test/custom-symbols/custom-add/index[skin-ds6].marko',
        }, {
            input:`<ebay-icon name="custom-add" type="inline" path="./custom-symbols"/>`,
            ds4Path: "./custom-symbols/custom-add/index.marko",
            ds6Path: "./custom-symbols/custom-add/index[skin-ds6].marko"
        }
    ];

    tagStrings.forEach(({input, ds4Path, ds6Path}) => {
        it(`supports custom symbol paths (${input})`, () => {
            const { el, context } = runTransformer(transformer, input, componentPath);
            const attr = el.getAttribute('_themes');
            expect(attr).to.have.property('name', '_themes');
            expect(context.getStaticVars().icon_custom_add.elements[0].args[0].value).to.deep.equal(ds4Path);
            expect(context.getStaticVars().icon_custom_add.elements[1].args[0].value).to.deep.equal(ds6Path);
        });
    });

    it('shows a warning message if the path format is not supported', () => {
        const mock = sinon.mock(console);
        mock.expects("warn").once().withArgs('The entered path format is not supported. Valid example: <ebay-icon type="inline" name="custom-add" path="./custom-symbols" />');
        // this is the scenarie for when one uses the path stored in a variable
        const tagString = `<ebay-icon name="custom-add" type="inline" path=foo/>`;
        runTransformer(transformer, tagString, componentPath);
        mock.verify();
        mock.restore();
    });

    it('does not transform a background icon', () => {
        const tagString = getTagString('background');
        const { el } = runTransformer(transformer, tagString, componentPath);
        const attr = el.getAttribute('_themes');
        expect(attr).equals(undefined);
    });
});
