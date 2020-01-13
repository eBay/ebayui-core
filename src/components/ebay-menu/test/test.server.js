const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

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

    it('renders fake version', async() => {
        const input = mock.Fake_2Items;
        const { getByText } = await render(template, input);

        input.items.forEach(item => {
            expect(getByText(item.renderBody.text).closest('.fake-menu__item'))
                .has.attr('href', item.href);
        });
    });

    it('renders with reverse=true', async() => {
        const input = assign({ reverse: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu')).with.class('menu__menu--reverse');
    });

    it('renders with type=fake, reverse=true', async() => {
        const input = assign({ type: 'fake', reverse: true }, mock.Basic_2Items);
        const { getByText } = await render(template, input);
        expect(getByText(input.items[0].renderBody.text).closest('.fake-menu__menu--reverse'))
            .does.not.equal(null);
    });

    it('renders with fix-width=true', async() => {
        const input = assign({ fixWidth: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu')).with.class('menu__menu--fix-width');
    });

    it('renders with type=fake, fix-width=true', async() => {
        const input = assign({ type: 'fake', fixWidth: true }, mock.Basic_2Items);
        const { getByText } = await render(template, input);
        expect(getByText(input.items[0].renderBody.text).closest('.fake-menu__menu--fix-width'))
            .does.not.equal(null);
    });

    ['radio', 'checkbox'].forEach(type => {
        [true, false].forEach(checked => {
            it(`renders with type=${type} and checked=${checked}`, async() => {
                const input = { type, items: [{ checked }] };
                const { getByRole, getAllByRole } = await render(template, input);
                const optionEls = getAllByRole(`menuitem${type}`);

                expect(optionEls).has.length(1);
                expect(optionEls[0]).has.attr('aria-checked', String(checked));

                const checkedIcon = getByRole('menu').querySelector('.icon--tick-small');
                if (checked) {
                    expect(checkedIcon).does.not.equal(null);
                } else {
                    expect(checkedIcon).equals(null);
                }
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
});
