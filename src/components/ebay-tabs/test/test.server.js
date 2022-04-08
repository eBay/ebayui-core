import { use } from 'chai';
import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';

import template from '..';
import * as mock from './mock';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

const snapDOM = (node) => snap(prettyDOM(node), '.html', __dirname);
use(require('chai-dom'));

describe('tabs', () => {
    it('renders basic version with 3 tabs and 3 panels', async () => {
        const input = mock.basic3Headings_3Panels_No_Index;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders basic version with 3 tabs and 3 panels on the second panel', async () => {
        const input = mock.basic3Headings_3Panels_1Index;
        const { container } = await render(template, input);
        await snapDOM(container);
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
