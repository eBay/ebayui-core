const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const mock = require('../mock');
const template = require('..');
const getQuerySelector = async(input) => {
    const { container } = await render(template, input);
    return container.querySelectorAll.bind(container);
};

const textSelector = '.expand-btn__cell > span:not(.expand-btn__icon)';

use(require('chai-dom'));

describe('menu', () => {
    it('renders basic version', async() => {
        const text = 'text';
        const input = { text };
        const $ = await getQuerySelector(input);
        expect($('.menu').length).to.equal(1);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.menu__items[role=menu]').length).to.equal(1);
        const $text = $(textSelector);
        expect($text.length).to.equal(1);
        expect($text[0].textContent).to.equal(text);
    });

    it('renders fake version', async() => {
        const input = { type: 'fake' };
        const $ = await getQuerySelector(input);
        expect($('.fake-menu').length).to.equal(1);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items[role=menu]').length).to.equal(0);
    });

    it('renders with reverse=true', async() => {
        const input = { reverse: true };
        const $ = await getQuerySelector(input);
        expect($('.menu__items--reverse').length).to.equal(1);
    });

    it('renders with reverse=false', async() => {
        const input = { reverse: false };
        const $ = await getQuerySelector(input);
        expect($('.menu__items').length).to.equal(1);
        expect($('.menu__items.menu__items--reverse').length).to.equal(0);
    });

    it('renders with type=fake, reverse=true', async() => {
        const input = { type: 'fake', reverse: true };
        const $ = await getQuerySelector(input);
        expect($('.fake-menu__items--reverse').length).to.equal(1);
    });

    it('renders with type=fake, reverse=false', async() => {
        const input = { type: 'fake', reverse: false };
        const $ = await getQuerySelector(input);
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items.fake-menu__items--reverse').length).to.equal(0);
    });

    it('renders with fix-width=true', async() => {
        const input = { fixWidth: true };
        const $ = await getQuerySelector(input);
        expect($('.menu__items--fix-width').length).to.equal(1);
    });

    it('renders with fix-width=false', async() => {
        const input = { fixWidth: false };
        const $ = await getQuerySelector(input);
        expect($('.menu__items').length).to.equal(1);
        expect($('.menu__items.menu__items--fix-width').length).to.equal(0);
    });

    it('renders with type=fake, fix-width=true', async() => {
        const input = { type: 'fake', fixWidth: true };
        const $ = await getQuerySelector(input);
        expect($('.fake-menu__items--fix-width').length).to.equal(1);
    });

    it('renders with type=fake, fix-width=false', async() => {
        const input = { type: 'fake', fixWidth: false };
        const $ = await getQuerySelector(input);
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items.fake-menu__items--fix-width').length).to.equal(0);
    });

    it('renders with borderless=true', async() => {
        const input = { borderless: true };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn.expand-btn--borderless').length).to.equal(1);
    });

    it('renders with borderless=false', async() => {
        const input = { borderless: false };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.expand-btn.expand-btn--borderless').length).to.equal(0);
    });

    it('renders with size=small', async() => {
        const input = { size: 'small' };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn.expand-btn--small').length).to.equal(1);
    });

    it('renders with priority=primary', async() => {
        const input = { priority: 'primary' };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn.expand-btn--primary').length).to.equal(1);
    });

    it('renders without text', async() => {
        const input = { text: '' };
        const $ = await getQuerySelector(input);
        expect($(textSelector).length).to.equal(0);
        expect($('.expand-btn.expand-btn--no-text').length).to.equal(1);
        expect($('svg.expand-btn__icon').length).to.equal(1);
    });

    it.skip('renders with icon', async() => {
        const input = { icon: 'settings', iconTag: { renderBody: mock.iconRenderBody } };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn:not(.expand-btn--no-text)').length).to.equal(1);
        expect($('div.btn__icon')).has.text('icon');
    });

    it('renders without toggle icon', async() => {
        const input = { noToggleIcon: true };
        const $ = await getQuerySelector(input);
        expect($('svg.expand-btn__icon').length).to.equal(0);
    });

    it('renders with disabled state', async() => {
        const input = { disabled: true };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn[disabled]').length).to.equal(1);
    });

    it('renders with no disabled state', async() => {
        const input = {};
        const $ = await getQuerySelector(input);
        expect($('.expand-btn[disabled]').length).to.equal(0);
    });

    testUtils.testPassThroughAttributes(template);
});

describe('menu-label', () => {
    it.skip('renders basic version', async() => {
        const input = { label: mock.customLabel };
        const $ = await getQuerySelector(input);
        expect($('.expand-btn__cell .custom_label').length).to.equal(1);
    });

    it('renders basic version without any custom label', async() => {
        const input = {};
        const $ = await getQuerySelector(input);
        expect($('.expand-btn__cell .custom_label').length).to.equal(0);
    });
});

describe('menu-item', () => {
    it('renders basic version', async() => {
        const input = { items: mock.twoItems };
        const $ = await getQuerySelector(input);
        expect($('div.menu__item').length).to.equal(2);
    });

    it('renders fake version', async() => {
        const linkItem = { renderBody: mock.renderBody, href: '#' };
        const buttonItem = { renderBody: mock.renderBody, type: 'button' };
        const input = { type: 'fake', items: [linkItem, buttonItem] };
        const $ = await getQuerySelector(input);
        expect($('a.fake-menu__item[href="#"]').length).to.equal(1);
        expect($('button.fake-menu__item').length).to.equal(1);
    });

    it('renders fake version without href', async() => {
        const linkItem = { renderBody: mock.renderBody, href: '' };
        const input = { type: 'fake', items: [linkItem] };
        const $ = await getQuerySelector(input);
        expect($('a.fake-menu__item[href]').length).to.equal(1);
    });

    ['radio', 'checkbox'].forEach(type => {
        [true, false].forEach(checked => {
            it(`renders with type=${type} and checked=${checked}`, async() => {
                const input = { type, items: [{ renderBody: mock.renderBody, checked }] };
                const $ = await getQuerySelector(input);
                const $root = $(`.menu__item[role=menuitem${type}][aria-checked=${checked}]`);
                expect($root.length).to.equal(1);
                expect($('.menu__status', $root).length).to.equal(1);
            });
        });
    });

    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true
        }
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';

    it('transforms an icon attribute into a tag', async() => {
        const tagString = '<ebay-menu-button icon="settings"/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl.tagName).to.equal('ebay-menu-button:icon');
    });

    it('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-menu/>';
        const { el } = testUtils.runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });
});
