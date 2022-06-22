import { use } from 'chai';
import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../star-rating-select.stories';

const { Isolated, Fieldset } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

use(require('chai-dom'));

describe('star-rating-select', () => {
    it('renders defaults', async () => {
        await htmlSnap(Isolated, {
            a11yText: null,
            a11yStarText: null,
        });
    });

    it('renders basic fieldset', async () => {
        await htmlSnap(Fieldset);
    });

    it('renders with 0 selected', async () => {
        await htmlSnap(Isolated, { value: 0 });
    });

    it('renders with 2 selected', async () => {
        await htmlSnap(Isolated, { value: 2 });
    });

    it('renders with 5 selected', async () => {
        await htmlSnap(Isolated, { value: 5 });
    });
});
