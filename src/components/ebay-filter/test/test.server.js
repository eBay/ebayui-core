import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('filter', () => {
    it('renders defaults', async () => {
        const input = mock.Basic;
        const { getByRole, getByText } = await render(template, input);
        const filterEl = getByRole('button');
        expect(filterEl).has.class('filter-button');
        expect(filterEl).does.not.have.attr('aria-pressed');
        expect(filterEl).contains(getByText(input.renderBody.text));
    });

    it('renders with pressed attribute', async () => {
        const input = mock.Selected;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.attr('aria-pressed', 'true');
    });

    it('renders without pressed attribute', async () => {
        const input = mock.withOutPressed;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).does.not.have.attr('aria-pressed');
    });

    it('renders with disabled attribute', async () => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.attr('disabled');
    });

    it('renders fake version', async () => {
        const input = mock.Fake;
        const { getByText } = await render(template, input);
        const filterTextEl = getByText(input.renderBody.text);
        const filterEl = filterTextEl.closest('a');
        expect(filterEl).has.attr('href', input.href);
        expect(filterEl).has.class('filter-link');
        expect(filterEl).does.not.have.attr('aria-pressed');
    });

    it('renders fake version with disabled attribute', async () => {
        const input = mock.fakeDisabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest('a')).has.attr('disabled');
    });

    it('renders fake version with pressed attribute', async () => {
        const input = mock.fakeSelected;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest('a')).contains(
            getByText(input.a11ySelectedText, { exact: false })
        );
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('button');
        },
    });
});
