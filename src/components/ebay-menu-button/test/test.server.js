import { use } from 'chai';
import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';
import * as testUtils from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

const snapDOM = (node) => snap(prettyDOM(node), '.html', __dirname);

use(require('chai-dom'));

describe('menu-button', () => {
    it('renders basic version', async () => {
        const input = mock.basic2Items;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with reverse=true', async () => {
        const input = Object.assign({ reverse: true }, mock.basic2Items);
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with fix-width=true', async () => {
        const input = Object.assign({ fixWidth: true }, mock.basic2Items);
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with borderless=true', async () => {
        const input = Object.assign({ borderless: true }, mock.basic2Items);
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with size=small', async () => {
        const input = Object.assign({ size: 'small' }, mock.basic2Items);
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with icon', async () => {
        const input = mock.Settings_Icon;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders without toggle icon', async () => {
        const input = mock.No_Toggle_Icon;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with disabled state', async () => {
        const input = mock.Disabled;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with a custom label', async () => {
        const input = mock.Custom_Label;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with overflow variant', async () => {
        const input = mock.Overflow_Variant;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with button variant', async () => {
        const input = mock.Button_Variant;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders with separators', async () => {
        const input = mock.separator4Items;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    ['radio', 'checkbox'].forEach((type) => {
        [true, false].forEach((checked) => {
            it(`renders with type=${type} and checked=${checked}`, async () => {
                const input = { type, items: [{ checked }] };
                const { container } = await render(template, input);
                await snapDOM(container);
            });
        });
    });

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true,
        },
    });
});
