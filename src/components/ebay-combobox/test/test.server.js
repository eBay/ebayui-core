const findIndex = require('core-js-pure/features/array/find-index');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('combobox', () => {
    test('renders basic version', async() => {
        const input = mock.Combobox_3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        expect(getByRole('combobox')).has.attr('aria-haspopup');
        expect(getByRole('combobox').parentElement).does.not.have.class('combobox__control--borderless');
        expect(getByRole('listbox')).has.class('combobox__options');
        expect(getByRole('listbox').parentElement).has.class('combobox');
        expect(getAllByRole('option')).has.length(3);
        expect(getAllByRole('option').filter(isAriaSelected)).has.length(0);
    });

    test('renders empty', async() => {
        const input = mock.Combobox_0Options;
        const { getByRole } = await render(template, input);
        expect(getByRole('combobox')).does.exist;
        expect(() => getByRole('listbox')).to.throw();
    });

    test('renders with second item selected', async() => {
        const input = mock.Combobox_3Options_2Selected;
        const { getAllByRole } = await render(template, input);
        const selectedIndex = findIndex(input.options, ({ value }) => value === input.value);
        expect(findIndex(getAllByRole('option'), isAriaSelected)).is.equal(selectedIndex);
    });

    test('renders with borderless enabled', async() => {
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
            name: "options",
            input: mock.Combobox_3Options.options[0],
            multiple: true
        }
    })
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}