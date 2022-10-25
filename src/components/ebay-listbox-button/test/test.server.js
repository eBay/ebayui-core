import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../listbox-button.stories';

const { Standard } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe('listbox', () => {
    it('renders basic version', async () => {
        await htmlSnap(Standard);
    });

    it('renders fluid layout', async () => {
        await htmlSnap(Standard, { fluid: true });
    });

    it('renders truncated layout', async () => {
        await htmlSnap(Standard, { truncate: true });
    });

    it('renders with second item selected', async () => {
        await htmlSnap(Standard, { selected: 1 });
    });

    it('renders with prefix label', async () => {
        await htmlSnap(Standard, { prefixLabel: 'Selected: ' });
    });

    it('renders with prefix id', async () => {
        await htmlSnap(Standard, { prefixId: 'prefixId' });
    });

    it('renders with floating label', async () => {
        await htmlSnap(Standard, { floatingLabel: 'floating label' });
    });
});
