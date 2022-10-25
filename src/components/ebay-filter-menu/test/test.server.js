import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../filter-menu.stories';
import { testPassThroughAttributes } from '../../../common/test-utils/server';

const { Standard } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);
const items = [...Standard.args.items];

describe('filter-menu', () => {
    it('renders basic version', async () => {
        await htmlSnap(Standard);
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
