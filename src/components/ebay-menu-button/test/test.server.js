const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const migrator = require('../migrator');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('menu-button', () => {
    it('renders basic version', async () => {
        const input = mock.Basic_2Items;
        const { getByRole, getAllByRole, getByText, getByLabelText } = await render(
            template,
            input
        );
        const btnEl = getByRole('button');
        expect(btnEl).is.equal(getByLabelText(input.a11yText));
        expect(btnEl).has.class('expand-btn');
        expect(btnEl).has.attr('aria-haspopup', 'true');
        expect(btnEl).has.attr('aria-expanded', 'false');
        expect(btnEl).has.property('parentElement').with.class('menu-button');
        expect(btnEl.querySelector('.icon--dropdown')).has.property('tagName', 'svg');
        expect(btnEl).contains(getByText(input.text));
        expect(getByRole('menu')).has.property('parentElement').with.class('menu-button__menu');

        const menuItemEls = getAllByRole('menuitem');
        input.items.forEach((item, i) => {
            const menuItemEl = menuItemEls[i];
            const textEl = getByText(item.renderBody.text);
            expect(menuItemEl).has.class('menu-button__item');
            expect(menuItemEl).contains(textEl);
        });
    });

    it('renders with reverse=true', async () => {
        const input = Object.assign({ reverse: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu-button__menu')).with.class(
            'menu-button__menu--reverse'
        );
    });

    it('renders with fix-width=true', async () => {
        const input = Object.assign({ fixWidth: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('menu').closest('.menu-button__menu')).with.class(
            'menu-button__menu--fix-width'
        );
    });

    it('renders with borderless=true', async () => {
        const input = Object.assign({ borderless: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--borderless');
    });

    it('renders with size=small', async () => {
        const input = Object.assign({ size: 'small' }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--small');
    });

    it('renders with icon', async () => {
        const input = mock.Settings_Icon;
        const { getByRole, getByText } = await render(template, input);
        const btnEl = getByRole('button');
        expect(btnEl).does.not.have.class('expand-btn--icon-only');
        expect(btnEl).contains(getByText(input.icon.renderBody.text));
    });

    it('renders without toggle icon', async () => {
        const input = mock.No_Toggle_Icon;
        const { getByRole } = await render(template, input);
        expect(getByRole('button').querySelector('icon--dropdown')).equals(null);
    });

    it('renders with disabled state', async () => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.attr('disabled');
    });

    it('renders with a custom label', async () => {
        const input = mock.Custom_Label;
        const { getByRole, getByText } = await render(template, input);
        const customLabelEl = getByText(input.label.renderBody.text);
        expect(customLabelEl).has.class('custom_label');
        expect(getByRole('button')).contains(customLabelEl);
    });

    it('renders with overflow variant', async () => {
        const input = mock.Overflow_Variant;
        const { getByRole, getByLabelText } = await render(template, input);
        const btnEl = getByRole('button');
        expect(btnEl).is.equal(getByLabelText(input.a11yText));
        expect(btnEl).has.class('icon-btn');
        expect(btnEl).has.attr('aria-haspopup', 'true');
        expect(btnEl).has.attr('aria-expanded', 'false');
        expect(btnEl).has.property('parentElement').with.class('menu-button');
        expect(btnEl.querySelector('.icon')).has.property('tagName', 'svg');
        const menuEl = getByRole('menu');
        expect(menuEl).has.property('parentElement').with.class('menu-button__menu');
        expect(menuEl).has.property('parentElement').with.class('menu-button__menu--reverse');
    });

    it('renders with separators', async () => {
        const input = mock.Separator_4Items;
        const { queryByText, getAllByRole, getByText } = await render(template, input);
        const menuItemEls = getAllByRole('menuitem');
        const separators = getAllByRole('separator');
        input.items.forEach((item) => {
            if (item._isSeparator) {
                const menuItemEl = separators.shift();
                const textEl = queryByText(item.renderBody.text);
                expect(textEl).to.equal(null);
                expect(menuItemEl).has.class('menu-button__separator');
            } else {
                const menuItemEl = menuItemEls.shift();
                const textEl = getByText(item.renderBody.text);
                expect(menuItemEl).has.class('menu-button__item');
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

describe('migrator', () => {
    const componentPath = '../index.marko';

    it('transforms an icon attribute into a tag', async () => {
        const tagString = '<ebay-menu-button icon="settings"/>';
        const { el } = testUtils.runTransformer(migrator, tagString, componentPath);
        const {
            body: {
                array: [iconEl],
            },
        } = el;
        const {
            body: {
                array: [tag],
            },
        } = iconEl;
        expect(iconEl.tagName).to.equal('@icon');
        expect(tag.tagName).to.equal('ebay-settings-icon');
    });

    it('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-menu/>';
        const { el } = testUtils.runTransformer(migrator, tagString, componentPath);
        const {
            body: {
                array: [iconEl],
            },
        } = el;
        expect(iconEl).to.equal(undefined);
    });

    testUtils.testEventsMigrator(
        migrator,
        'menu-button',
        ['keydown', 'change', 'select', 'expand', 'collapse'],
        '../index.marko'
    );
});
