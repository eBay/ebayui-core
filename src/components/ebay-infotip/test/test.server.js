import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../infotip.stories';

const { Standard, OpenOnRender } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe('infotip', () => {
    it('renders default infotip', async () => {
        await htmlSnap(Standard);
    });
    it('renders default infotip open', async () => {
        await htmlSnap(OpenOnRender);
    });

    it('renders default infotip disabled', async () => {
        await htmlSnap(Standard, { disabled: true });
    });
});

describe('infotip modal', () => {
    it('renders default', async () => {
        await htmlSnap(Standard, { variant: 'modal' });
    });
});
