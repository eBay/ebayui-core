import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import snap from 'mocha-snap';
import { runMigrateTransformer } from '../../../common/test-utils/server';
import template from '..';
const migrator = require('../migrator');

const snapDOM = (node) => snap(node, '.html', __dirname);

const iconName = 'mic';
const progrmaBadgeIcon = 'program-badge-authenticity-guaranteed';

use(require('chai-dom'));

describe('icon', () => {
    it('renders inline type with title text', async () => {
        const input = {
            _name: iconName,
            _type: 'icon',
            a11yText: 'inline icon',
        };

        const { getByRole, getByTitle } = await render(template, input);
        const svg = getByRole('img');
        const title = getByTitle(input.a11yText);
        expect(svg).has.class(`icon--${iconName}`);
        expect(svg).contains(title);
        expect(svg).has.attr('aria-labelledby', title.id);
    });

    it('renders inline type without title text', async () => {
        const input = {
            _name: iconName,
            _type: 'icon',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };

        const { getByTestId } = await render(template, input);
        const svg = getByTestId('icon');
        expect(svg).has.attr('aria-hidden', 'true');
    });

    it('renders no-skin-classes', async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: 'icon',
            class: 'custom-class',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };
        const { getByTestId } = await render(template, input);
        const svg = getByTestId('icon');

        expect(svg).has.class('custom-class');
        expect(svg).does.not.have.class(`icon--${iconName}`);
    });
});

describe('program badges', () => {
    it('renders inline type with title text', async () => {
        const input = {
            _name: progrmaBadgeIcon,
            _type: 'program-badge',
            a11yText: 'inline icon',
        };

        const { getByRole, getByTitle } = await render(template, input);
        const svg = getByRole('img');
        const title = getByTitle(input.a11yText);
        expect(svg).has.class(`program-badge--authenticity-guaranteed`);
        expect(svg).contains(title);
        expect(svg).has.attr('aria-labelledby', title.id);
    });

    it('renders inline type without title text', async () => {
        const input = {
            _name: iconName,
            _type: 'program-badge',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };

        const { getByTestId } = await render(template, input);
        const svg = getByTestId('icon');
        expect(svg).has.attr('aria-hidden', 'true');
    });

    it('renders no-skin-classes', async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: 'program-badge',
            class: 'custom-class',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };
        const { getByTestId } = await render(template, input);
        const svg = getByTestId('icon');

        expect(svg).has.class('custom-class');
        expect(svg).does.not.have.class(`program-badge--authenticity-guaranteed`);
    });
});

describe('migrator', () => {
    const componentPath = '../index.js';
    function getTagString() {
        return `<ebay-icon type="inline" name="${iconName}" />`;
    }

    it('removes type attribute', async () => {
        const tagString = getTagString();
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const attr = el.hasAttribute('type');
        expect(attr).to.equal(false);
    });

    it('changes name attribute', async () => {
        const tagString = getTagString();
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        expect(el.tagName).to.equal('ebay-mic-icon');
        const attr = el.hasAttribute('name');
        expect(attr).to.equal(false);
    });
});
