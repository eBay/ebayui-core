import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as testUtils from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('fake-menu-button', () => {
    it('renders fake version', async () => {
        const input = mock.basic2Items;
        const { getByText } = await render(template, input);

        input.items.forEach((item) => {
            expect(getByText(item.renderBody.text).closest('.fake-menu-button__item')).has.attr(
                'href',
                item.href
            );
        });
    });

    it('renders with type=fake, reverse=true', async () => {
        const input = Object.assign({ type: 'fake', reverse: true }, mock.basic2Items);
        const { getByText } = await render(template, input);
        expect(
            getByText(input.items[0].renderBody.text).closest('.fake-menu-button__menu--reverse')
        ).does.not.equal(null);
    });

    it('renders with type=fake, fix-width=true', async () => {
        const input = Object.assign({ type: 'fake', fixWidth: true }, mock.basic2Items);
        const { getByText } = await render(template, input);
        expect(
            getByText(input.items[0].renderBody.text).closest('.fake-menu-button__menu--fix-width')
        ).does.not.equal(null);
    });

    it('renders with borderless=true', async () => {
        const input = Object.assign({ borderless: true }, mock.basic2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--borderless');
    });

    it('renders with size=small', async () => {
        const input = Object.assign({ size: 'small' }, mock.basic2Items);
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--small');
    });

    it('renders without text', async () => {
        const input = Object.assign({}, mock.basic2Items, { text: '' });
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.class('expand-btn--icon-only');
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
        expect(btnEl).has.attr('aria-expanded', 'false');
        expect(btnEl).has.property('parentElement').with.class('fake-menu-button');
        expect(btnEl.querySelector('.icon')).has.property('tagName', 'svg');
    });

    it('renders with separators', async () => {
        const input = mock.separator4Items;
        const { queryByText, getAllByRole } = await render(template, input);
        const separators = getAllByRole('separator');
        input.items.forEach((item) => {
            if (item.separator) {
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
            input: {
                type: 'button',
            },
            name: 'items',
            multiple: true,
        },
    });
});
