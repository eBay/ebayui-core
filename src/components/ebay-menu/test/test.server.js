const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const mock = require('../mock');

describe('menu', () => {
    test('renders basic version', context => {
        const input = {};
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu').length).to.equal(1);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.menu__items[role=menu]').length).to.equal(1);
    });

    test('renders fake version', context => {
        const input = { type: 'fake' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu').length).to.equal(1);
        expect($('.expand-btn').length).to.equal(1);
        expect($('.fake-menu__items').length).to.equal(1);
        expect($('.fake-menu__items[role=menu]').length).to.equal(0);
    });

    test('renders with grow=true', context => {
        const input = { grow: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu__items--grow').length).to.equal(1);
    });

    test('renders with grow=false', context => {
        const input = { grow: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.menu__items').length).to.equal(1);
    });

    test('renders with type=fake, grow=true', context => {
        const input = { type: 'fake', grow: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu__items--grow').length).to.equal(1);
    });

    test('renders with type=fake, grow=false', context => {
        const input = { type: 'fake', grow: false };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.fake-menu__items').length).to.equal(1);
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
        const input = { type: 'fake', items: [{ renderBody: mock.renderBody, href: '#' }, { renderBody: mock.renderBody, type: 'button' }] };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('a.fake-menu__item[href=#]').length).to.equal(1);
        expect($('button.fake-menu__item').length).to.equal(1);
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
