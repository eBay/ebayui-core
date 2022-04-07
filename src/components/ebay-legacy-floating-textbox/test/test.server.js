import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('ebay-textbox', () => {
    it('renders default input textbox', async () => {
        const input = mock.Basic;
        const { getByRole } = await render(template, input);
        const textboxEl = getByRole('textbox');
        expect(textboxEl).has.value(input.value);
        expect(textboxEl).has.class('textbox__control');
        expect(textboxEl).has.property('tagName', 'INPUT');
        expect(textboxEl).has.property('parentElement').with.class('textbox');
    });

    it('renders default input textbox with an id', async () => {
        const input = mock.basicWithId;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).contains.id(input.id);
    });

    it('renders fluid input textbox', async () => {
        const input = mock.Fluid;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.class('textbox__control--fluid');
    });

    it('renders a disabled input textbox', async () => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.property('disabled', true);
    });

    it('renders a input textbox with invalid/error state', async () => {
        const input = mock.Invalid;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.attr('aria-invalid', 'true');
    });

    it('renders a textarea element', async () => {
        const input = mock.Multiline;
        const { getByRole } = await render(template, input);
        const textboxEl = getByRole('textbox');
        expect(textboxEl).has.property('tagName', 'TEXTAREA');
        expect(textboxEl).has.text(input.value);
        expect(textboxEl).has.value(input.value);
    });

    it('renders a textarea element with prefix icon', async () => {
        const input = mock.prefixIcon;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.property('previousElementSibling').with.class('icon');
    });

    it('renders a textarea element with postfix icon', async () => {
        const input = mock.postfixIcon;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.property('nextElementSibling').with.class('icon');
    });

    it('renders a textarea element with postfix icon button', async () => {
        const input = mock.postfixIconButton;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText('search button')).has.class('icon-btn');
        expect(getByLabelText('search button').firstElementChild).has.class('icon');
    });

    it('renders an input textbox with inline floating label', async () => {
        const input = mock.floatingLabel;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        expect(getByRole('textbox')).to.equal(getByLabelText(input.floatingLabel));
        expect(getByText(input.floatingLabel)).has.class('legacy-floating-label__label');
    });

    it('renders an input textbox with inline floating label and an id', async () => {
        const input = mock.floatingLabelWithId;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.floatingLabel)).has.id(input.id);
    });

    it('renders a disabled input textbox with disabled floating label', async () => {
        const input = mock.floatingLabelDisabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.floatingLabel)).has.class('legacy-floating-label__label--disabled');
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('textbox').parentElement;
        },
    });
});
