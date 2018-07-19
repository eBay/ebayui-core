const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const mock = require('../mock');

const labelSelector = '.expand-btn__cell > span:not(.expand-btn__icon)';

describe('menu', () => {
    test('renders basic version', context => {
        const labelText = 'label';
        const input = { label: labelText };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu').length).to.equal(1);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.menu__items[role=menu]').length).to.equal(1);
        const $label = $(labelSelector);
        expect($label.length).to.equal(1);
        expect($label.html()).to.equal(labelText);
    });

    test('renders fake version', context => {
        const input = { type: 'fake' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu').length).to.equal(1);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items[role=menu]').length).to.equal(0);
    });

    test('renders with reverse=true', context => {
        const input = { reverse: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu__items--reverse').length).to.equal(1);
    });

    test('renders with reverse=false', context => {
        const input = { reverse: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu__items').length).to.equal(1);
        expect($('.menu__items.menu__items--reverse').length).to.equal(0);
    });

    test('renders with type=fake, reverse=true', context => {
        const input = { type: 'fake', reverse: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu__items--reverse').length).to.equal(1);
    });

    test('renders with type=fake, reverse=false', context => {
        const input = { type: 'fake', reverse: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items.fake-menu__items--reverse').length).to.equal(0);
    });

    test('renders with fix-width=true', context => {
        const input = { fixWidth: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu__items--fix-width').length).to.equal(1);
    });

    test('renders with fix-width=false', context => {
        const input = { fixWidth: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu__items').length).to.equal(1);
        expect($('.menu__items.menu__items--fix-width').length).to.equal(0);
    });

    test('renders with type=fake, fix-width=true', context => {
        const input = { type: 'fake', fixWidth: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu__items--fix-width').length).to.equal(1);
    });

    test('renders with type=fake, fix-width=false', context => {
        const input = { type: 'fake', fixWidth: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items.fake-menu__items--fix-width').length).to.equal(0);
    });

    test('renders with borderless=true', context => {
        const input = { borderless: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.expand-btn.expand-btn--borderless').length).to.equal(1);
    });

    test('renders with borderless=false', context => {
        const input = { borderless: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.expand-btn').length).to.equal(1);
        expect($('.expand-btn.expand-btn--borderless').length).to.equal(0);
    });

    test('renders with size=small', context => {
        const input = { size: 'small' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.expand-btn.expand-btn--small').length).to.equal(1);
    });

    test('renders with priority=primary', context => {
        const input = { priority: 'primary' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.expand-btn.expand-btn--primary').length).to.equal(1);
    });

    test('renders without label', context => {
        const input = { label: '' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($(labelSelector).length).to.equal(0);
        expect($('svg.expand-btn__icon').length).to.equal(1);
    });

    test('renders with icon', context => {
        const input = { icon: 'settings', iconTag: { renderBody: mock.iconRenderBody } };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('div.expand-btn__icon').text()).to.equal('icon');
    });

    test('renders without toggle icon', context => {
        const input = { noToggleIcon: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('svg.expand-btn__icon').length).to.equal(0);
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, 'span.menu');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, 'span.menu');
    });
});

describe('menu-item', () => {
    test('renders basic version', context => {
        const input = { items: mock.items };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('div.menu__item').length).to.equal(3);
    });

    test('renders fake version', context => {
        const linkItem = { renderBody: mock.renderBody, href: '#' };
        const buttonItem = { renderBody: mock.renderBody, type: 'button' };
        const input = { type: 'fake', items: [linkItem, buttonItem] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('a.fake-menu__item[href=#]').length).to.equal(1);
        expect($('button.fake-menu__item').length).to.equal(1);
    });

    test('renders fake version without href', context => {
        const linkItem = { renderBody: mock.renderBody, href: '' };
        const input = { type: 'fake', items: [linkItem] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('a.fake-menu__item[href]').length).to.equal(1);
    });

    ['radio', 'checkbox'].forEach(type => {
        [true, false].forEach(checked => {
            test(`renders with type=${type} and checked=${checked}`, context => {
                const input = { type, items: [{ renderBody: mock.renderBody, checked }] };
                const $ = testUtils.getCheerio(context.render(input));
                const $root = $(`.menu__item[role=menuitem${type}][aria-checked=${checked}]`);
                expect($root.length).to.equal(1);
                expect($('.menu__status', $root).length).to.equal(1);
            });
        });
    });

    test('handles pass-through html attributes', context => {
        testUtils.testHtmlAttributes(context, '.menu__item', 'items');
    });

    test('handles custom class', context => {
        testUtils.testCustomClass(context, '.menu__item', 'items');
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';

    test('transforms an icon attribute into a tag', () => {
        const tagString = '<ebay-menu icon="settings"/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl.tagName).to.equal('ebay-menu:icon');
    });

    test('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-menu/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });
});
