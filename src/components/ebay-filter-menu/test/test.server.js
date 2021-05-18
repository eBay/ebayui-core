const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('filter-menu', () => {
    it('renders basic version', async () => {
        const input = mock.Basic_2Items;
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
    testUtils.testEventsMigrator(
        require('../migrator'),
        'filter-menu',
        ['change', 'footer-click', 'form-submit'],
        '../index.marko'
    );
});
