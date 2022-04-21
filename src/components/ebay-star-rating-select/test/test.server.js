const { use } = require('chai');
const { render, prettyDOM } = require('@marko/testing-library');
const snap = require('mocha-snap').default;
const template = require('..');
const mock = require('./mock');

const snapDOM = (node) => snap(prettyDOM(node), '.html', __dirname);

use(require('chai-dom'));

describe('star-rating-select', () => {
    it('renders defaults', async () => {
        const { container } = await render(template);
        await snapDOM(container);
    });

    it('renders basic', async () => {
        const { container } = await render(template, mock.Basic);
        await snapDOM(container);
    });

    it('renders with 0 selected', async () => {
        const { container } = await render(template, mock.Basic_0Selected);
        await snapDOM(container);
    });

    it('renders with 2 selected', async () => {
        const { container } = await render(template, mock.Basic_2Selected);
        await snapDOM(container);
    });

    it('renders with 5 selected', async () => {
        const { container } = await render(template, mock.Basic_5Selected);
        await snapDOM(container);
    });
});
