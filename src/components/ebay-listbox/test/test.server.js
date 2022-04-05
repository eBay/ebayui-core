import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const {
    testPassThroughAttributes,
    testEventsMigrator,
} = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('listbox', () => {
    it('renders basic version', async () => {
        const input = mock.basic3Options;
        const { getAllByRole } = await render(template, input);

        const listboxEl = getAllByRole('listbox').find(isVisible);
        const visibleOptionEls = getAllByRole('option').filter(isVisible);

        expect(listboxEl).has.class('listbox__options');

        expect(visibleOptionEls).has.length(3);
        visibleOptionEls.forEach((optionEl) => {
            expect(optionEl).does.not.have.attr('aria-selected');
        });
    });

    it('renders empty', async () => {
        const input = mock.basic0Options;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('listbox').filter(isVisible)[0].childNodes).has.length(0);
    });

    it('renders with second item selected', async () => {
        const input = mock.basic3Options1Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option').filter(isVisible).findIndex(isAriaSelected)).is.equal(1);
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: 'options',
            multiple: true,
        },
    });
    testEventsMigrator(require('../migrator'), 'listbox', ['change'], '../index.marko');
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}

function isVisible(el) {
    return !el.hasAttribute('hidden') && !el.closest('[hidden]');
}
