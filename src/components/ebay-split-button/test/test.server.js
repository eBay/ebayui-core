import { use } from 'chai';
import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';
import template from '..';
import * as mock from './mock';

// import { testPassThroughAttributes } from '../../../common/test-utils/server';

const snapDOM = (node) => snap(prettyDOM(node), '.html', __dirname);

use(require('chai-dom'));

const properties = {
    priority: ['primary', 'secondary', 'delete'],
    size: ['large'],
};

Object.keys(properties).forEach((property) => {
    const values = properties[property];
    values.forEach((value) => {
        it(`renders button with ${property}=${value}`, async () => {
            const { container } = await render(template, { [property]: value });
            await snapDOM(container);
        });
    });
});

it('renders defaults', async () => {
    const { container } = await render(template);
    await snapDOM(container);
});

it('renders with menu items', async () => {
    const { container } = await render(template, mock.basic3Items);
    await snapDOM(container);
});

it('renders loading state', async () => {
    const { container } = await render(template, mock.Loading_3Items);
    await snapDOM(container);
});

it('renders various options', async () => {
    const { container } = await render(template, mock.Options_3Items);
    await snapDOM(container);
});
