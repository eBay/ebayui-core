const find = require('core-js-pure/features/array/find');
const findIndex = require('core-js-pure/features/array/find-index');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('listbox', () => {
    it('renders basic version', async() => {
        const input = mock.Basic_3Options;
        const { getByRole, getAllByRole } = await render(template, input);

        const btnEl = getByRole('button');
        const listboxEl = find(getAllByRole('listbox'), isVisible);
        const visibleOptionEls = getAllByRole('option').filter(isVisible);

        expect(btnEl).has.attr('aria-haspopup', 'listbox');
        expect(btnEl).has.text(input.options[0].text);
        expect(btnEl).has.class('listbox__control');

        expect(listboxEl).has.class('listbox__options');

        expect(visibleOptionEls).has.length(3);
        visibleOptionEls.forEach((optionEl, i) => {
            if (i === 0) {
                expect(optionEl).has.attr('aria-selected', 'true');
            } else {
                expect(optionEl).does.not.have.attr('aria-selected');
            }
        });
    });

    it('renders empty', async() => {
        const input = mock.Basic_0Options;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getAllByRole('listbox').filter(isVisible)).has.length(0);
    });

    it('renders with second item selected', async() => {
        const input = mock.Basic_3Options_1Selected;
        const { getAllByRole } = await render(template, input);
        expect(findIndex(getAllByRole('option').filter(isVisible), isAriaSelected)).is.equal(1);
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: 'options',
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