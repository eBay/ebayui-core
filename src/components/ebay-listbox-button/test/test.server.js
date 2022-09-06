import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

use(chaiDom);

describe('listbox', () => {
    it('renders basic version', async () => {
        const input = mock.basic3Options;
        const { getByRole, getAllByRole } = await render(template, input);

        const btnEl = getByRole('button');
        const listboxEl = getAllByRole('listbox').find(isVisible);
        const visibleOptionEls = getAllByRole('option').filter(isVisible);

        expect(btnEl).has.attr('aria-haspopup', 'listbox');
        expect(btnEl).has.attr('name', input.buttonName);
        expect(btnEl).has.text('-');
        expect(btnEl).has.class('listbox-button__control');

        expect(listboxEl).has.class('listbox-button__listbox');

        expect(visibleOptionEls).has.length(3);
        visibleOptionEls.forEach((optionEl) => {
            expect(optionEl).does.not.have.attr('aria-selected');
        });
    });

    it('renders empty', async () => {
        const input = mock.basic0Options;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getAllByRole('listbox').filter(isVisible)[0].childNodes).has.length(0);
    });

    it('renders fluid layout', async () => {
        const input = mock.basic3Optionsfluid;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getAllByRole('listbox')[0].parentNode).has.class('listbox-button--fluid');
    });

    it('renders truncated layout', async () => {
        const input = mock.basic3Optionstruncated;
        const { getAllByRole, getByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getByRole('button')).has.class('btn--truncated');
        expect(getAllByRole('listbox')[0].parentNode).has.tagName('DIV');
    });

    it('renders with second item selected', async () => {
        const input = mock.basic3Options1Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option').filter(isVisible).findIndex(isAriaSelected)).is.equal(1);
    });

    it('renders with prefix label', async () => {
        const input = mock.basic3Options1Selected;
        const { getAllByText } = await render(
            template,
            Object.assign({}, input, { prefixLabel: 'prefix:' })
        );
        expect(getAllByText('prefix: option 1')).has.length(1);
    });

    it('renders with prefix id', async () => {
        const input = mock.basic3Options1Selected;
        const { getByRole, getAllByText } = await render(
            template,
            Object.assign({}, input, { prefixId: 'prefixId' })
        );
        const btnEl = getByRole('button');
        const label = getAllByText('option 1')[0];
        expect(btnEl).has.attribute('aria-labelledby');
        expect(btnEl.getAttribute('aria-labelledby')).to.equal(
            `prefixId ${label.getAttribute('id')}`
        );
    });

    it('renders with floating label', async () => {
        const input = mock.basic3Options1Selected;
        const { getAllByText, getByRole } = await render(
            template,
            Object.assign({}, input, { floatingLabel: 'floating label' })
        );

        const label = getAllByText('floating label');
        expect(label).has.length(1);
        expect(label[0]).has.class('btn__floating-label');
        const btnEl = getByRole('button');
        expect(btnEl).has.class('btn--floating-label');
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: 'options',
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
