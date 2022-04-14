import { use } from 'chai';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('details', () => {
    it('renders basic version', async () => {
        const input = mock.Default_Details;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders as div version', async () => {
        const input = Object.assign({}, mock.Default_Details, { as: 'div' });
        await snapshotHTML(template, input, __dirname);
    });

    it('renders in open state', async () => {
        const input = mock.Open_Details;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders small version', async () => {
        const input = Object.assign({}, mock.Default_Details, { size: 'small' });
        await snapshotHTML(template, input, __dirname);
    });

    it('renders center version', async () => {
        const input = Object.assign({}, mock.Default_Details, { alignment: 'center' });
        await snapshotHTML(template, input, __dirname);
    });

    testPassThroughAttributes(template);
});
