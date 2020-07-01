const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('listbox', () => {
    it('renders basic version', async() => {
        const input = mock.Basic_3Options;
        const { getAllByRole } = await render(template, input);

        const listboxEl = getAllByRole('listbox').find(isVisible);
        const visibleOptionEls = getAllByRole('option').filter(isVisible);

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
        expect(getAllByRole('listbox').filter(isVisible)[0].childNodes).has.length(0);
    });

    it('renders with second item selected', async() => {
        const input = mock.Basic_3Options_1Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option').filter(isVisible).findIndex(isAriaSelected)).is.equal(1);
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
