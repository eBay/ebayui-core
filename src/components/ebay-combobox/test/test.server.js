import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('combobox', () => {
    it('renders basic version', async () => {
        const input = mock.combobox3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        expect(getByRole('combobox')).has.attr('aria-haspopup');
        expect(getByRole('combobox').parentElement).does.not.have.class(
            'combobox__control--borderless'
        );
        expect(getByRole('listbox')).has.class('combobox__listbox');
        expect(getByRole('listbox').parentElement).has.class('combobox');
        expect(getAllByRole('option')).has.length(3);
        expect(getAllByRole('option').filter(isAriaSelected)).has.length(0);
    });

    it('renders empty', async () => {
        const input = mock.combobox0Options;
        const { queryByRole } = await render(template, input);
        expect(queryByRole('combobox')).does.not.equal(null);
        expect(queryByRole('listbox')).equals(null);
    });

    it('renders with second item selected', async () => {
        const input = mock.combobox3Options2Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option')[1].textContent).is.equal(input.value);
    });

    it('renders with borderless enabled', async () => {
        const input = mock.combobox3OptionsBorderless;
        const { getByRole } = await render(template, input);
        expect(getByRole('combobox').parentElement).has.class('combobox__control--borderless');
    });

    it('renders with actionable button', async () => {
        const input = mock.combobox3OptionsActionable;
        const { getByText } = await render(template, input);
        expect(getByText(input.button.renderBody.text)).has.class('icon-btn');
    });

    it('renders with default actionable button', async () => {
        const input = mock.combobox3OptionsActionable_No_Body;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.button.ariaLabel)).has.class('icon-btn');
    });

    testPassThroughAttributes(template, {
        input: mock.combobox3Options,
        getClassAndStyleEl(component) {
            return component.container.firstElementChild;
        },
    });
});

describe('combobox-option', () => {
    testPassThroughAttributes(template, {
        child: {
            name: 'options',
            input: mock.combobox3Options.options[0],
            multiple: true,
        },
    });
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}
