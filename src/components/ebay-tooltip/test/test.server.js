import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../tooltip.stories';
const pointerStyles = require('./location-styles.json');

const { Standard, buttonHost } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

export const Pointers = Object.keys(pointerStyles);

describe('tooltip', () => {
    it('renders default tooltip', async () => {
        await htmlSnap(Standard);
    });
    it('renders tooltip closed', async () => {
        await htmlSnap(Standard, { open: false });
    });
    it('renders tooltip with button host', async () => {
        await htmlSnap(buttonHost);
    });

    Pointers.forEach((pointer) => {
        it(`renders tooltip pointer: ${pointer}`, async () => {
            await htmlSnap(Standard, { pointer });
        });
    });
});
