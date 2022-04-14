import { use } from 'chai';
import template from '..';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as mock from './mock';

use(require('chai-dom'));

const properties = {
    priority: ['primary', 'secondary', 'delete'],
    size: ['large'],
};

Object.keys(properties).forEach((property) => {
    const values = properties[property];
    values.forEach((value) => {
        it(`renders button with ${property}=${value}`, async () => {
            await snapshotHTML(template, { [property]: value }, __dirname);
        });
    });
});

it('renders defaults', async () => {
    await snapshotHTML(template, {}, __dirname);
});

it('renders with menu items', async () => {
    await snapshotHTML(template, mock.basic3Items, __dirname);
});

it('renders loading state', async () => {
    await snapshotHTML(template, mock.Loading_3Items, __dirname);
});

it('renders various options', async () => {
    await snapshotHTML(template, mock.Options_3Items, __dirname);
});
