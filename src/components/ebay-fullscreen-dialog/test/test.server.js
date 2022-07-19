import { use } from 'chai';
import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../fullsceen-dialog.stories'; // import all stories from the stories file

const { Standard } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require('chai-dom'));

it('renders defaults', async () => {
    await htmlSnap(Standard);
});

it('renders without footer and header', async () => {
    await htmlSnap(Standard, { header: null, footer: null });
});

it('renders open', async () => {
    await htmlSnap(Standard, { open: true });
});

it('renders slide end', async () => {
    await htmlSnap(Standard, { slideFrom: 'end' });
});
