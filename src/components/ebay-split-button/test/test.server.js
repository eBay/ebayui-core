const { use } = require('chai');
const { render, prettyDOM } = require('@marko/testing-library');
const snap = require('mocha-snap').default;
const template = require('..');
const mock = require('./mock');

// const { testPassThroughAttributes } = require('../../../common/test-utils/server');

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
    const { container } = await render(template, mock.Basic_3Items);
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
