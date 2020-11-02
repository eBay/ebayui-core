const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('menu', () => {
    it('renders basic version', async() => {
        const input = mock.Basic_2Items;
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

    it('renders with reverse=true', async() => {
        const input = assign({ reverse: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu')).with.class('menu__menu--reverse');
    });

    it('renders with fix-width=true', async() => {
        const input = assign({ fixWidth: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu')).with.class('menu__menu--fix-width');
    });

    it('renders with separators', async() => {
        const input = mock.Separator_4Items;
        const { queryByText, getAllByRole, getByText } = await render(template, input);
        const menuItemEls = getAllByRole('menuitem');
        const separators = getAllByRole('separator');
        input.items.forEach((item) => {
            if (item._isSeparator) {
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

    ['radio', 'checkbox'].forEach(type => {
        [true, false].forEach(checked => {
            it(`renders with type=${type} and checked=${checked}`, async() => {
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
            multiple: true
        }
    });
    testUtils.testEventsMigrator(require('../migrator'), 'menu',
        ['change', 'select', 'keydown'], '../index.marko');
});
