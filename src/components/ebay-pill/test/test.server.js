const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('pill', () => {
    it('renders defaults', async() => {
        const input = mock.Basic;
        const { getByRole, getByText } = await render(template, input);
        const pillEl = getByRole('button');
        expect(pillEl).has.class('pill');
        expect(pillEl).does.not.have.attr('aria-pressed');
        expect(pillEl).contains(getByText(input.renderBody.text));
    });

    it('renders with pressed attribute', async() => {
        const input = mock.Pressed;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.attr('aria-pressed', 'true');
    });

    it('renders with disabled attribute', async() => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole('button')).has.attr('disabled');
    });

    it('renders fake version', async() => {
        const input = mock.Fake;
        const { getByText } = await render(template, input);
        const pillTextEl = getByText(input.renderBody.text);
        const pillEl = pillTextEl.closest('a');
        expect(pillEl).has.attr('href', input.href);
        expect(pillEl).has.class('fake-pill');
        expect(pillEl).does.not.have.attr('aria-pressed');
    });

    it('renders fake version with disabled attribute', async() => {
        const input = mock.Fake_Disabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest('a')).has.attr('disabled');
    });

    it('renders fake version with pressed attribute', async() => {
        const input = mock.Fake_Pressed;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest('a'))
            .contains(getByText(input.a11yActiveText, { exact: false }));
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('button');
        }
    });
});
