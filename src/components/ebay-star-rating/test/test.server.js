import { use } from 'chai';
import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../star-rating.stories';

const { DynamicStars, FixedStars } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

use(require('chai-dom'));

describe('star-rating-select', () => {
    it('renders defaults', async () => {
        await htmlSnap(DynamicStars);
    });

    it('renders basic fieldset', async () => {
        await htmlSnap(FixedStars);
    });

    it('renders with 0 selected', async () => {
        await htmlSnap(DynamicStars, { value: 0, a11yText: 'star rating' });
    });

    it('renders with 2 selected', async () => {
        await htmlSnap(DynamicStars, { value: 2, a11yText: 'star rating' });
    });

    it('renders with 5 selected', async () => {
        await htmlSnap(DynamicStars, { value: 5 });
    });
});
