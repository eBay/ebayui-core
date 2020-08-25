const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, testEventsMigrator } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('combobox', () => {
    it('renders basic version', async() => {
        const input = mock.Combobox_3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        expect(getByRole('combobox')).has.attr('aria-haspopup');
        expect(getByRole('combobox').parentElement).does.not.have.class('combobox__control--borderless');
        expect(getByRole('listbox')).has.class('combobox__listbox');
        expect(getByRole('listbox').parentElement).has.class('combobox');
        expect(getAllByRole('option')).has.length(3);
        expect(getAllByRole('option').filter(isAriaSelected)).has.length(0);
    });

    it('renders empty', async() => {
        const input = mock.Combobox_0Options;
        const { queryByRole } = await render(template, input);
        expect(queryByRole('combobox')).does.not.equal(null);
        expect(queryByRole('listbox')).equals(null);
    });

    it('renders with second item selected', async() => {
        const input = mock.Combobox_3Options_2Selected;
        const { getByRole } = await render(template, input);
        expect(getByRole('option').textContent).is.equal(input.value);
    });

    it('renders with borderless enabled', async() => {
        const input = mock.Combobox_3Options_Borderless;
        const { getByRole } = await render(template, input);
        expect(getByRole('combobox').parentElement).has.class('combobox__control--borderless');
    });

    it('renders with actionable button', async() => {
        const input = mock.Combobox_3Options_Actionable;
        const { getByText } = await render(template, input);
        expect(getByText(input.button.renderBody.text)).has.class('icon-btn');
    });

    it('renders with default actionable button', async() => {
        const input = mock.Combobox_3Options_Actionable_No_Body;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.button.ariaLabel)).has.class('icon-btn');
    });

    testPassThroughAttributes(template, {
        input: mock.Combobox_3Options,
        getClassAndStyleEl(component) {
            return component.container.firstElementChild;
        }
    });
});

describe('combobox-option', () => {
    testPassThroughAttributes(template, {
        child: {
            name: 'options',
            input: mock.Combobox_3Options.options[0],
            multiple: true
        }
    });
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}

testEventsMigrator(require('../migrator'), 'combobox',
    [{ from: 'input', to: 'input-change' },
        'collapse', 'change', 'select', 'expand'], '../index.marko');
