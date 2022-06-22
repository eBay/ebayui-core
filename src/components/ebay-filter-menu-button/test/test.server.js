import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as testUtils from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('filter-menu-button', () => {
    it('renders basic version', async () => {
        const input = mock.basic2Items;
        const { getByRole, getAllByRole, getByText } = await render(template, input);
        const btnEl = getAllByRole('button')[0];
        expect(btnEl).contains(getByText(input.text));
        expect(btnEl).has.attr('aria-label', input.a11yText);
        expect(btnEl).has.class('filter-menu-button__button');
        expect(btnEl).has.attr('aria-haspopup', 'true');
        expect(btnEl).has.attr('aria-expanded', 'false');
        expect(btnEl).has.property('parentElement').with.class('filter-menu-button');
        expect(btnEl.querySelector('.icon--chevron-down')).has.property('tagName', 'svg');
        expect(getByRole('menu'))
            .has.property('parentElement')
            .with.class('filter-menu-button__menu');

        const menuItemEls = getAllByRole('menuitemcheckbox');
        input.items.forEach((item, i) => {
            const menuItemEl = menuItemEls[i];
            const textEl = getByText(item.renderBody.text);
            expect(menuItemEl).has.class('filter-menu-button__item');
            expect(menuItemEl).contains(textEl);
        });
    });

    it('renders with disabled state', async () => {
        const input = mock.Disabled;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('button')[0]).has.attr('disabled');
    });

    it(`renders checked item`, async () => {
        const input = { items: [{ checked: true }] };
        const { getAllByRole } = await render(template, input);
        const optionEls = getAllByRole(`menuitemcheckbox`);

        expect(optionEls).has.length(1);
        expect(optionEls[0]).has.attr('aria-checked', String('true'));
    });

    testUtils.testPassThroughAttributes(template);
});
