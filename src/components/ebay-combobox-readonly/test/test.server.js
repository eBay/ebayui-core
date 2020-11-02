const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, testEventsMigrator } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('combobox-readonly', () => {
    it('renders basic version', async() => {
        const input = mock.Combobox_3Options;
        const { getAllByRole } = await render(template, input);
        const combobox = getAllByRole('combobox').find(isVisible);
        const listbox = getAllByRole('listbox').find(isVisible);
        const visibleOptions = getAllByRole('option').filter(isVisible);
        expect(combobox).has.attr('aria-haspopup');
        expect(combobox.parentElement).does.not.have.class('combobox__control--borderless');
        expect(listbox).has.class('combobox__listbox');
        expect(listbox).has.property('parentElement').with.class('combobox');
        expect(visibleOptions).has.length(3);
        expect(visibleOptions.filter(isAriaSelected)).has.length(1);
    });

    it('renders empty', async() => {
        const input = mock.Combobox_0Options;
        const { getAllByRole, queryAllByLabelText } = await render(template, input);
        expect(getAllByRole('combobox', { hidden: true })).has.length(2);
        expect(queryAllByLabelText('listbox')).has.length(0);
    });

    it('renders with second item selected', async() => {
        const input = mock.Combobox_3Options_2Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option').filter(isVisible).findIndex(isAriaSelected)).is.equal(1);
    });

    it('renders with borderless enabled', async() => {
        const input = mock.Combobox_3Options_Borderless;
        const { getAllByRole } = await render(template, input);
        const combobox = getAllByRole('combobox').find(isVisible);
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
            name: 'options',
            input: mock.Combobox_3Options.options[0],
            multiple: true
        }
    });
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}

function isVisible(el) {
    return !el.hasAttribute('hidden') && !el.closest('[hidden]');
}

testEventsMigrator(require('../migrator'), { event: 'combobox', component: 'combobox-readonly' },
    ['collapse', 'change', 'expand'], '../index.marko');
