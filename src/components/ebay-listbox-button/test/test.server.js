const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const {
    testPassThroughAttributes,
    testEventsMigrator,
} = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('listbox', () => {
    it('renders basic version', async () => {
        const input = mock.Basic_3Options;
        const { getByRole, getAllByRole } = await render(template, input);

        const btnEl = getByRole('button');
        const listboxEl = getAllByRole('listbox').find(isVisible);
        const visibleOptionEls = getAllByRole('option').filter(isVisible);

        expect(btnEl).has.attr('aria-haspopup', 'listbox');
        expect(btnEl).has.attr('name', input.buttonName);
        expect(btnEl).has.text(input.options[0].text);
        expect(btnEl).has.class('listbox-button__control');

        expect(listboxEl).has.class('listbox-button__listbox');

        expect(visibleOptionEls).has.length(3);
        visibleOptionEls.forEach((optionEl, i) => {
            if (i === 0) {
                expect(optionEl).has.attr('aria-selected', 'true');
            } else {
                expect(optionEl).does.not.have.attr('aria-selected');
            }
        });
    });

    it('renders empty', async () => {
        const input = mock.Basic_0Options;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getAllByRole('listbox').filter(isVisible)[0].childNodes).has.length(0);
    });

    it('renders fluid layout', async () => {
        const input = mock.Basic_3Options_fluid;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getAllByRole('listbox')[0].parentNode).has.class('listbox-button--fluid');
    });

    it('renders truncated layout', async () => {
        const input = mock.Basic_3Options_truncated;
        const { getAllByRole, getByRole } = await render(template, input);
        expect(getAllByRole('button')).has.length(1);
        expect(getByRole('button')).has.class('expand-btn--truncated');
        expect(getAllByRole('listbox')[0].parentNode).has.tagName('DIV');
    });

    it('renders with second item selected', async () => {
        const input = mock.Basic_3Options_1Selected;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('option').filter(isVisible).findIndex(isAriaSelected)).is.equal(1);
    });

    it('renders with prefix label', async () => {
        const input = mock.Basic_3Options_1Selected;
        const { getAllByText } = await render(
            template,
            Object.assign({}, input, { prefixLabel: 'prefix:' })
        );
        expect(getAllByText('prefix: option 1')).has.length(1);
    });

    it('renders with prefix id', async () => {
        const input = mock.Basic_3Options_1Selected;
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
        const input = mock.Basic_3Options_1Selected;
        const { getAllByText, getByRole } = await render(
            template,
            Object.assign({}, input, { floatingLabel: 'floating label' })
        );

        const label = getAllByText('floating label');
        expect(label).has.length(1);
        expect(label[0]).has.class('expand-btn__floating-label');
        const btnEl = getByRole('button');
        expect(btnEl).has.class('expand-btn--floating-label');
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: 'options',
            multiple: true,
        },
    });
    testEventsMigrator(
        require('../migrator'),
        { event: 'listbox', component: 'listbox-button' },
        ['change', 'expand', 'collapse'],
        '../index.marko'
    );
});

function isAriaSelected(el) {
    return el.getAttribute('aria-selected') === 'true';
}

function isVisible(el) {
    return !el.hasAttribute('hidden') && !el.closest('[hidden]');
}
