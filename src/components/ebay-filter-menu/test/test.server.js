import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as testUtils from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('filter-menu', () => {
    it('renders basic version', async () => {
        const input = mock.basic2Items;
        const { getByRole, getAllByRole, getByText } = await render(template, input);
        const menuEl = getByRole('menu');
        expect(menuEl).has.class('filter-menu__items');
        expect(menuEl).has.property('parentElement').with.class('filter-menu');

        const menuItemEls = getAllByRole('menuitemcheckbox');
        input.items.forEach((item, i) => {
            const menuItemEl = menuItemEls[i];
            const textEl = getByText(item.renderBody.text);
            expect(menuItemEl).has.class('filter-menu__item');
            expect(menuItemEl).contains(textEl);
        });
    });

    it(`renders checked item`, async () => {
        const input = { items: [{ checked: true }] };
        const { getAllByRole } = await render(template, input);
        const optionEls = getAllByRole(`menuitemcheckbox`);

        expect(optionEls).has.length(1);
        expect(optionEls[0]).has.attr('aria-checked', String('true'));
    });

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true,
        },
    });
});
