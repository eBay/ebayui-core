const find = require('core-js-pure/features/array/find');
const findIndex = require('core-js-pure/features/array/find-index');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('combobox-readonly', () => {
    it('renders basic version', async() => {
        const input = mock.Combobox_3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        const combobox = find(getAllByRole('combobox'), isVisible);
        const listbox = find(getAllByRole('listbox'), isVisible);
        const visibleOptions = getAllByRole('option').filter(isVisible);
        expect(combobox).has.attr('aria-haspopup');
        expect(combobox.parentElement).does.not.have.class('combobox__control--borderless');
        expect(listbox).has.class('combobox__options');
        expect(listbox).has.property('parentElement').with.class('combobox');
        expect(visibleOptions).has.length(3);
        expect(visibleOptions.filter(isAriaSelected)).has.length(1);
    });

    it('renders empty', async() => {
        const input = mock.Combobox_0Options;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('combobox')).has.length(2);
        expect(getAllByRole('listbox')).has.length(1);
    });

    it('renders with second item selected', async() => {
        const input = mock.Combobox_3Options_2Selected;
        const { getAllByRole } = await render(template, input);
        expect(findIndex(getAllByRole('option').filter(isVisible), isAriaSelected)).is.equal(1);
    });

    it('renders with borderless enabled', async() => {
        const input = mock.Combobox_3Options_Borderless;
        const { getAllByRole } = await render(template, input);
        const combobox = find(getAllByRole('combobox'), isVisible);
        expect(combobox).has.property('parentElement').with.class('combobox__control--borderless');
    });

    testPassThroughAttributes(template, {
        input: mock.Combobox_3Options,
        getClassAndStyleEl(component) {
            return component.container.firstElementChild;
        }
    });
});

describe('combobox-readonly-option', () => {
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

function isVisible(el) {
    return !el.hasAttribute('hidden') && !el.closest('[hidden]');
}