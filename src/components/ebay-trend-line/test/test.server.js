import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';

use(require('chai-dom'));

const mock = {
    data: [
        {
            x: 0,
            y: 0,
        },
        {
            x: 1,
            y: 1,
        },
    ],
};
describe('trend-line', () => {
    it('renders a blue line', async () => {
        const { getByRole } = await render(template, mock);
        const line = getByRole('graphics-symbol');
        expect(line.classList.contains('ebay-trend-line__path-neutral'));
    });

    it('renders a red line', async () => {
        const { getByRole } = await render(template, {
            ...mock,
            trend: 'negative',
        });
        const line = getByRole('graphics-symbol');
        expect(line.classList.contains('ebay-trend-line__path-negative'));
    });

    it('renders a green line', async () => {
        const { getByRole } = await render(template, {
            ...mock,
            trend: 'positive',
        });
        const line = getByRole('graphics-symbol');
        expect(line.classList.contains('ebay-trend-line__path-positive'));
    });
});
