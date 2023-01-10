import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../filter-menu-button.stories';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import { createRenderBody } from '../../../common/test-utils/shared';

const { Standard } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);
const items = [...Standard.args.items];

describe('filter-menu', () => {
    it('renders basic version', async () => {
        await htmlSnap(Standard);
    });

    it('renders with footer text', async () => {
        await htmlSnap(Standard, { footerText: 'test text' });
    });

    it('renders with footer text and accessible text', async () => {
        await htmlSnap(Standard, { footerText: 'test text', a11yFooterText: 'test a11y' });
    });

    it('renders with footer', async () => {
        await htmlSnap(Standard, {
            footer: {
                renderBody: createRenderBody('test text'),
                a11yFooterText: 'a11y text',
            },
        });
    });

    it(`renders checked item`, async () => {
        items[1] = Object.assign({ checked: true }, items[1]);
        await htmlSnap(Standard);
    });

    it(`renders disabled item`, async () => {
        items[1] = Object.assign({ disabled: true }, items[1]);
        await htmlSnap(Standard);
    });

    testPassThroughAttributes(Standard);
    testPassThroughAttributes(Standard, {
        child: {
            name: 'items',
            multiple: true,
        },
    });
});
