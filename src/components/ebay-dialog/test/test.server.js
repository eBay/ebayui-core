const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');

describe('dialog', () => {
    test('renders basic version', context => {
        const input = {};
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.dialog').prop('hidden')).to.equal(true);
        expect($('.dialog__body').text()).to.equal('');
        expect($('.dialog__close').attr('aria-label')).to.equal(undefined);
    });

    test('renders with a renderBody', context => {
        const input = { renderBody: out => out.write('Hello World') };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.dialog__body').text()).to.equal('Hello World');
    });

    test('renders with an aria close label', context => {
        const input = { ariaLabelClose: 'Close Dialog' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.dialog__close').attr('aria-label')).to.equal('Close Dialog');
    });

    test('renders in open state', context => {
        const input = { open: true };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.dialog').prop('hidden')).to.equal(false);
    });

    test('renders with a custom dialog class', context => {
        const input = { 'class': 'custom-class' };
        const $ = testUtils.getCheerio(context.render(input));
        expect($('.dialog').hasClass('custom-class')).to.equal(true);
    });

    [undefined, 'fill', 'full'].forEach(type => {
        test(`renders with ${type || 'default'} type`, context => {
            const input = { type: type };
            const $ = testUtils.getCheerio(context.render(input));
            const $dialog = $('.dialog');
            const $window = $('.dialog__window');

            if (type) {
                expect($window.hasClass(`dialog__window--${type}`)).to.equal(true);
            }

            if (type === 'full') {
                expect($dialog.hasClass('dialog--no-mask')).to.equal(true);
            } else {
                expect($dialog.hasClass('dialog--mask-fade')).to.equal(true);
            }

            expect($window.hasClass('dialog__window--fade')).to.equal(true);
        });
    });

    ['left', 'right'].forEach(type => {
        test(`renders with ${type} type`, context => {
            const input = { type: type };
            const $ = testUtils.getCheerio(context.render(input));
            const $dialog = $('.dialog');
            const $window = $('.dialog__window');

            expect($dialog.hasClass('dialog--mask-fade-slow')).to.equal(true);
            expect($window.hasClass(`dialog__window--${type}`)).to.equal(true);
            expect($window.hasClass('dialog__window--slide')).to.equal(true);
        });
    });
});
