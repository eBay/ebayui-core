import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';

use(require('chai-dom'));

describe('eek', () => {
    async function ratingCheck(max, min, rating, number) {
        const eekClass = !!number ? `eek--rating-${number}` : 'eek';
        const { getByRole } = await render(template, { max, min, rating });
        expect(getByRole('figure')).has.class(eekClass);
    }

    it('renders default eek', async () => {
        const { getByRole, getByText } = await render(template, {
            max: 'A+++',
            min: 'D',
            rating: 'B',
        });
        expect(getByText('A+++')).has.property('nextElementSibling');
        expect(getByText('D')).has.property('previousElementSibling');
        expect(getByText('B')).has.class('eek__rating');
        expect(getByRole('figure')).has.class('eek--rating-5');
    });

    it('renders invalid eek', async () => {
        const { getByRole, getByText } = await render(template, {
            max: 'A',
            min: 'D',
            rating: 'B',
        });
        expect(getByText('A')).has.property('nextElementSibling');
        expect(getByText('D')).has.property('previousElementSibling');
        expect(getByText('B')).has.class('eek__rating');
        expect(getByRole('figure')).has.class('eek');
    });

    it('renders the correct eek if rating is outside', async () => {
        await ratingCheck('A+', 'D', 'A++');
    });

    it('renders rating 1', async () => {
        await ratingCheck('A++', 'E', 'A++', '1');
    });

    it('renders rating 2', async () => {
        await ratingCheck('A++', 'E', 'A+', '2');
    });

    it('renders rating 3', async () => {
        await ratingCheck('A++', 'E', 'A', '3');
    });

    it('renders rating 4', async () => {
        await ratingCheck('A++', 'E', 'B', '4');
    });

    it('renders rating 5', async () => {
        await ratingCheck('A++', 'E', 'C', '5');
    });

    it('renders rating 6', async () => {
        await ratingCheck('A++', 'E', 'D', '6');
    });

    it('renders rating 7', async () => {
        await ratingCheck('A++', 'E', 'E', '7');
    });

    it('renders rating 7 (not 8)', async () => {
        await ratingCheck('A++', 'G', 'F', '7');
        await ratingCheck('A++', 'G', 'G', '7');
    });

    testPassThroughAttributes(template);
});
