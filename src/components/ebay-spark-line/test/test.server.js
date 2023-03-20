import { use } from 'chai';
import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../spark-line.stories'; // import all stories from the stories file
const { Basic, Positive, Negative } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require('chai-dom'));

describe('spark-line', () => {
    it('renders a blue line', async () => {
        await htmlSnap(Basic);
    });

    it('renders a red line', async () => {
        await htmlSnap(Negative);
    });

    it('renders a green line', async () => {
        await htmlSnap(Positive);
    });
});
