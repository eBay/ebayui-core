const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const {
    testPassThroughAttributes,
    testEventsMigrator,
} = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('select', () => {
    it('renders basic version', async () => {
        const input = mock.Basic_3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        const rootElement = getByRole('combobox').parentElement;
        const optionEls = getAllByRole('option');

        expect(rootElement).has.class('select');
        expect(rootElement).does.not.have.class('select--borderless');

        expect(optionEls).has.length(3);
        input.options.forEach((option, i) => {
            const optionEl = optionEls[i];
            expect(optionEl).has.text(option.text);
            expect(optionEl).has.value(option.value);
            expect(optionEl).has.property('selected', i === 0);
        });
    });

    it('renders empty', async () => {
        const input = mock.Basic_0Options;
        const { queryAllByRole } = await render(template, input);
        expect(queryAllByRole('combobox')).has.length(1);
        expect(queryAllByRole('option')).has.length(0);
    });

    it('renders with second item selected', async () => {
        const input = mock.Basic_3Options_1Selected;
        const { getAllByRole } = await render(template, input);
        getAllByRole('option').forEach((optionEl, i) => {
            expect(optionEl).has.property('selected', i === 1);
        });
    });

    it('renders with borderless=true', async () => {
        const input = mock.Borderless_3Options;
        const { getByRole } = await render(template, input);
        expect(getByRole('combobox'))
            .has.property('parentElement')
            .with.class('select--borderless');
    });

    it('renders an input select with inline floating label', async () => {
        const input = mock.Floating_Label;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        expect(getByRole('combobox')).to.equal(getByLabelText(input.floatingLabel));
        expect(getByText(input.floatingLabel)).has.class('floating-label__label');
    });

    it('renders an input select with inline floating label and an id', async () => {
        const input = mock.Floating_Label_With_ID;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.floatingLabel)).has.id(input.id);
    });

    it('renders a disabled input select with disabled floating label', async () => {
        const input = mock.Floating_Label_Disabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.floatingLabel)).has.class('floating-label__label--disabled');
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('combobox').parentElement;
        },
    });
    testEventsMigrator(require('../migrator'), 'select', ['change'], '../index.marko');
});
