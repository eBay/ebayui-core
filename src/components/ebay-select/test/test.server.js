const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('select', () => {
    it('renders basic version', async() => {
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

    it('renders empty', async() => {
        const input = mock.Basic_0Options;
        const { queryByRole, queryAllByRole } = await render(template, input);
        expect(queryByRole('combobox')).does.exist;
        expect(queryAllByRole('option')).has.length(0);
    });

    it('renders with second item selected', async() => {
        const input = mock.Basic_3Options_1Selected;
        const { getAllByRole } = await render(template, input);
        getAllByRole('option').forEach((optionEl, i) => {
            expect(optionEl).has.property('selected', i === 1);
        });
    });

    it('renders with borderless=true', async() => {
        const input = mock.Borderless_3Options;
        const { getByRole } = await render(template, input);
        expect(getByRole('combobox'))
            .has.property('parentElement')
            .with.class('select--borderless');
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('combobox').parentElement;
        }
    })
});
