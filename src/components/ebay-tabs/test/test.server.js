import { use } from 'chai';
import { snapshotHTML } from '../../../common/test-utils/snapshots';

import template from '..';
import * as mock from './mock';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('tabs', () => {
    it('renders basic version with 3 tabs and 3 panels', async () => {
        const input = mock.basic3Headings_3Panels_No_Index;
        await snapshotHTML(template, input, __dirname);
    });

    it('renders basic version with 3 tabs and 3 panels on the second panel', async () => {
        const input = mock.basic3Headings_3Panels_1Index;
        await snapshotHTML(template, input, __dirname);
    });

    testPassThroughAttributes(template);
});

describe('tabs-heading', () => {
    testPassThroughAttributes(template, {
        child: {
            name: 'tabs',
            multiple: true,
        },
    });
});

describe('tabs-panel', () => {
    testPassThroughAttributes(template, {
        child: {
            name: 'panels',
            multiple: true,
        },
    });
});
