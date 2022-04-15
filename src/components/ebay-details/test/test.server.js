import { use } from 'chai';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

const htmlSnap = snapshotHTML(__dirname);
use(require('chai-dom'));

describe('details', () => {
    it('renders basic version', async () => {
        const input = mock.Default_Details;
        await htmlSnap(template, input);
    });

    it('renders as div version', async () => {
        const input = Object.assign({}, mock.Default_Details, { as: 'div' });
        await htmlSnap(template, input);
    });

    it('renders in open state', async () => {
        const input = mock.Open_Details;
        await htmlSnap(template, input);
    });

    it('renders small version', async () => {
        const input = Object.assign({}, mock.Default_Details, { size: 'small' });
        await htmlSnap(template, input);
    });

    it('renders center version', async () => {
        const input = Object.assign({}, mock.Default_Details, { alignment: 'center' });
        await htmlSnap(template, input);
    });

    testPassThroughAttributes(template);
});
