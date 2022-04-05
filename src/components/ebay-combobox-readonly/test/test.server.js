import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const {
    testPassThroughAttributes,
    testEventsMigrator,
} = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('combobox-readonly', () => {
    it('renders basic version', async () => {
        const input = mock.combobox3Options;
        const { getAllByRole } = await render(template, input);
        const combobox = getAllByRole('combobox').find(isVisible);
        const listbox = getAllByRole('listbox').find(isVisible);
        const visibleOptions = getAllByRole('option').filter(isVisible);
        expect(combobox).has.attr('aria-haspopup');
        expect(combobox.parentElement).does.not.have.class('combobox_control--borderless');
        expect(listbox).has.class('combobox_listbox');
        expect(listbox).has.property('parentElement').with.class('combobox');
        expect(visibleOptions).has.length(3);
        expect(visibleOptions.filter(isAriaSelected)).has.length(1);
    });

    it('renders empty', async () => {
        const input = mock.combobox0Options;
        const { getAllByRole, queryAllByLabelText } = await render(template, input);
        expect(getAllByRole('combobox', { hidden: true })).has.length(2);
        expect(queryAllByLabelText('listbox')).has.length(0);
    });

    it('renders with second item selected', async () => {
        const input = mock.combobox3Options2Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option').filter(isVisible).findIndex(isAriaSelected)).is.equal(1);
    });

    it('renders with borderless enabled', async () => {
        const input = mock.combobox3OptionsBorderless;
        const { getAllByRole } = await render(template, input);
        const combobox = getAllByRole('combobox').find(isVisible);
        expect(combobox).has.property('parentElement').with.class('combobox_control--borderless');
    });

    testPassThroughAttributes(template, {
        input: mock.combobox3Options,
        getClassAndStyleEl(component) {
            return component.container.firstElementChild;
        },
    });
});

describe('combobox-readonly-option', () => {
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

function isVisible(el) {
    return !el.hasAttribute('hidden') && !el.closest('[hidden]');
}

testEventsMigrator(
    require('../migrator'),
    { event: 'combobox', component: 'combobox-readonly' },
    ['collapse', 'change', 'expand'],
    '../index.marko'
);
