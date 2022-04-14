import { use } from 'chai';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as testUtils from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('menu-button', () => {
    it('renders basic version', async () => {
        const input = mock.basic2Items;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with reverse=true', async () => {
        const input = Object.assign({ reverse: true }, mock.basic2Items);
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with fix-width=true', async () => {
        const input = Object.assign({ fixWidth: true }, mock.basic2Items);
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with borderless=true', async () => {
        const input = Object.assign({ borderless: true }, mock.basic2Items);
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with size=small', async () => {
        const input = Object.assign({ size: 'small' }, mock.basic2Items);
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with icon', async () => {
        const input = mock.Settings_Icon;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders without toggle icon', async () => {
        const input = mock.No_Toggle_Icon;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with disabled state', async () => {
        const input = mock.Disabled;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with a custom label', async () => {
        const input = mock.Custom_Label;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with overflow variant', async () => {
        const input = mock.Overflow_Variant;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with button variant', async () => {
        const input = mock.Button_Variant;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders with separators', async () => {
        const input = mock.separator4Items;
        await snapshotHTML(template, input, __dirname);
    });

    ['radio', 'checkbox'].forEach((type) => {
        [true, false].forEach((checked) => {
            it(`renders with type=${type} and checked=${checked}`, async () => {
                const input = { type, items: [{ checked }] };
                await snapshotHTML(template, input, __dirname);
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
