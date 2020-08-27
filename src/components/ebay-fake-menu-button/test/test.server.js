const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('fake-menu-button', () => {
    it('renders fake version', async() => {
        const input = mock.Basic_2Items;
        const { getByText } = await render(template, input);

        input.items.forEach(item => {
            expect(getByText(item.renderBody.text).closest('.fake-menu-button__item'))
                .has.attr('href', item.href);
        });
    });

    it('renders with type=fake, reverse=true', async() => {
        const input = assign({ type: 'fake', reverse: true }, mock.Basic_2Items);
        const { getByText } = await render(template, input);
        expect(getByText(input.items[0].renderBody.text).closest('.fake-menu-button__menu--reverse'))
            .does.not.equal(null);
    });

    it('renders with type=fake, fix-width=true', async() => {
        const input = assign({ type: 'fake', fixWidth: true }, mock.Basic_2Items);
        const { getByText } = await render(template, input);
        expect(getByText(input.items[0].renderBody.text).closest('.fake-menu-button__menu--fix-width'))
            .does.not.equal(null);
    });

    it('renders with borderless=true', async() => {
        const input = assign({ borderless: true }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--borderless');
    });

    it('renders with size=small', async() => {
        const input = assign({ size: 'small' }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--small');
    });

    it('renders with priority=primary', async() => {
        const input = assign({ priority: 'primary' }, mock.Basic_2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--primary');
    });

    it('renders without text', async() => {
        const input = assign({}, mock.Basic_2Items, { text: '' });
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--no-text');
    });

    it('renders with icon', async() => {
        const input = mock.Settings_Icon;
        const { getByRole, getByText } = await render(template, input);
        const btnEl = getByRole('button');
        expect(btnEl).does.not.have.class('expand-btn--no-text');
        expect(btnEl).contains(getByText(input.icon.renderBody.text));
    });

    it('renders without toggle icon', async() => {
        const input = mock.No_Toggle_Icon;
        const { getByRole } = await render(template, input);
        expect(getByRole('button').querySelector('icon--dropdown')).equals(null);
    });

    it('renders with disabled state', async() => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.attr('disabled');
    });

    it('renders with a custom label', async() => {
        const input = mock.Custom_Label;
        const { getByRole, getByText } = await render(template, input);
        const customLabelEl = getByText(input.label.renderBody.text);
        expect(customLabelEl).has.class('custom_label');
        expect(getByRole('button')).contains(customLabelEl);
    });

    it('renders with overflow variant', async() => {
        const input = mock.Overflow_Variant;
        const { getByRole, getByLabelText } = await render(template, input);
        const btnEl = getByRole('button');
        expect(btnEl).is.equal(getByLabelText(input.a11yText));
        expect(btnEl).has.class('icon-btn');
        expect(btnEl).has.attr('aria-haspopup', 'true');
        expect(btnEl).has.attr('aria-expanded', 'false');
        expect(btnEl).has.property('parentElement').with.class('fake-menu-button');
        expect(btnEl.querySelector('.icon')).has.property('tagName', 'svg');
    });

    it('renders with separators', async() => {
        const input = mock.Separator_4Items;
        const { queryByText, getAllByRole } = await render(template, input);
        const separators = getAllByRole('separator');
        input.items.forEach((item) => {
            if (item.isSeparator) {
                const menuItemEl = separators.shift();
                const textEl = queryByText(item.renderBody.text);
                expect(textEl).to.equal(null);
                expect(menuItemEl).has.class('fake-menu-button__separator');
            }
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
