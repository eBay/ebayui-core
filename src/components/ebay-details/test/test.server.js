import { use } from 'chai';
import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

const snapDOM = (node) => snap(prettyDOM(node), '.html', __dirname);
use(require('chai-dom'));

describe('details', () => {
    it('renders basic version', async () => {
        const input = mock.Default_Details;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders as div version', async () => {
        const input = Object.assign({}, mock.Default_Details, { as: 'div' });
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders in open state', async () => {
        const input = mock.Open_Details;
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders small version', async () => {
        const input = Object.assign({}, mock.Default_Details, { size: 'small' });
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    it('renders center version', async () => {
        const input = Object.assign({}, mock.Default_Details, { alignment: 'center' });
        const { container } = await render(template, input);
        await snapDOM(container);
    });

    testPassThroughAttributes(template);
});
