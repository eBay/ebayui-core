import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as testUtils from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('menu', () => {
    it('renders basic version', async () => {
        const input = mock.basic2Items;
        const { getByRole, getAllByRole, getByText } = await render(template, input);
        expect(getByRole('menu')).with.class('menu__items');

        const menuItemEls = getAllByRole('menuitem');
        input.items.forEach((item, i) => {
            const menuItemEl = menuItemEls[i];
            const textEl = getByText(item.renderBody.text);
            expect(menuItemEl).has.class('menu__item');
            expect(menuItemEl).contains(textEl);
        });
    });

    it('renders with reverse=true', async () => {
        const input = Object.assign({ reverse: true }, mock.basic2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu')).with.class('menu__menu--reverse');
    });

    it('renders with fix-width=true', async () => {
        const input = Object.assign({ fixWidth: true }, mock.basic2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu')).with.class('menu__menu--fix-width');
    });

    it('renders with separators', async () => {
        const input = mock.separator4Items;
        const { queryByText, getAllByRole, getByText } = await render(template, input);
        const menuItemEls = getAllByRole('menuitem');
        const separators = getAllByRole('separator');
        input.items.forEach((item) => {
            if (item.separator) {
                const menuItemEl = separators.shift();
                const textEl = queryByText(item.renderBody.text);
                expect(textEl).to.equal(null);
                expect(menuItemEl).has.class('menu__separator');
            } else {
                const menuItemEl = menuItemEls.shift();
                const textEl = getByText(item.renderBody.text);
                expect(menuItemEl).has.class('menu__item');
                expect(menuItemEl).contains(textEl);
            }
        });
    });

    ['radio', 'checkbox'].forEach((type) => {
        [true, false].forEach((checked) => {
            it(`renders with type=${type} and checked=${checked}`, async () => {
                const input = { type, items: [{ checked }] };
                const { getByRole, getAllByRole } = await render(template, input);
                const optionEls = getAllByRole(`menuitem${type}`);

                expect(optionEls).has.length(1);
                expect(optionEls[0]).has.attr('aria-checked', String(checked));

                expect(getByRole('menu').querySelector('.icon--tick-small')).does.not.equal(null);
            });
        });
    });

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true,
        },
    });
});
