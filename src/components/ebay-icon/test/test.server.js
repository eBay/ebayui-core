import { use } from 'chai';
import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';
import template from '..';

const snapDOM = (node) => snap(prettyDOM(node), '.html', __dirname);

const iconName = 'mic';
const progrmaBadgeIcon = 'program-badge-authenticity-guaranteed';

use(require('chai-dom'));

describe('icon', () => {
    it('renders icon inline type with title text', async () => {
        const input = {
            _name: iconName,
            _type: 'icon',
            a11yText: 'inline icon',
        };

        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders icon inline type without title text', async () => {
        const input = {
            _name: iconName,
            _type: 'icon',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };

        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders icon no-skin-classes', async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: 'icon',
            class: 'custom-class',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };
        const { container } = await render(template, input);
        await snapDOM(container);
    });
});

describe('program badges', () => {
    it('renders program badge inline type with title text', async () => {
        const input = {
            _name: progrmaBadgeIcon,
            _type: 'program-badge',
            a11yText: 'inline icon',
        };

        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders program badge inline type without title text', async () => {
        const input = {
            _name: iconName,
            _type: 'program-badge',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };

        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders program badge no-skin-classes', async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: 'program-badge',
            class: 'custom-class',
            htmlAttributes: {
                'data-testid': 'icon',
            },
        };
        const { container } = await render(template, input);
        await snapDOM(container);
    });
});
