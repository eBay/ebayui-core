const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('combobox', () => {
    it('renders basic version', async() => {
        const input = mock.Combobox_3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        expect(getByRole('combobox')).has.attr('aria-haspopup');
        expect(getByRole('combobox').parentElement).does.not.have.class('combobox__control--borderless');
        expect(getByRole('listbox')).has.class('combobox__options');
        expect(getByRole('listbox').parentElement).has.class('combobox');
        expect(getAllByRole('option')).has.length(3);
        expect(getAllByRole('option').filter(isAriaSelected)).has.length(0);
    });

    it('renders empty', async() => {
        const input = mock.Combobox_0Options;
        const { getByRole } = await render(template, input);
        expect(() => getByRole('combobox')).to.not.throw();
        expect(() => getByRole('listbox')).to.throw();
    });

    it('renders with second item selected', async() => {
        const input = mock.Combobox_3Options_2Selected;
        const { getAllByRole } = await render(template, input);
        const selectedIndex = input.options.findIndex(({ value }) => value === input.value);
        expect(getAllByRole('option').findIndex(isAriaSelected)).is.equal(selectedIndex);
    });

    it('renders with borderless enabled', async() => {
        const input = mock.Combobox_3Options_Borderless;
        const { getByRole } = await render(template, input);
        expect(getByRole('combobox').parentElement).has.class('combobox__control--borderless');
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
