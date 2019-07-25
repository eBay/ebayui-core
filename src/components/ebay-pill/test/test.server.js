const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('pill', () => {
    it('renders defaults', async() => {
        const input = mock.Basic;
        const { getByText } = await render(template, input);
        const pill = getByText(input.renderBody.text);
        expect(pill).has.class('btn--secondary');
        expect(pill).has.property('tagName', 'BUTTON');
        expect(pill).does.not.have.attr('aria-pressed');
    });
    
    it('renders with pressed attribute', async() => {
        const input = mock.Pressed;
        const { getByText } = await render(template, input);
        const pill = getByText(input.renderBody.text);
        expect(pill).has.attr('aria-pressed', 'true');
    });

    it('renders with disabled attribute', async() => {
        const input = mock.Disabled;
        const { getByText } = await render(template, input);
        const pill = getByText(input.renderBody.text);
        expect(pill).has.attr('disabled');
    });

    it('renders fake version', async() => {
        const input = mock.Fake;
        const { getByText } = await render(template, input);
        const pill = getByText(input.renderBody.text);
        expect(pill).has.class('fake-btn--secondary');
        expect(pill).has.attr('href', input.href);
        expect(pill).has.property('tagName', 'A');
        expect(pill).does.not.have.attr('aria-pressed');
    });

    it('renders fake version with disabled attribute', async() => {
        const input = mock.Fake_Disabled;
        const { getByText } = await render(template, input);
        const pill = getByText(input.renderBody.text);
        expect(pill).has.attr('disabled');
    });

    it('renders fake version with pressed attribute', async() => {
        const input = mock.Fake_Pressed;
        const { getByText } = await render(template, input);
        const pill = getByText(input.renderBody.text);
        const statusText = getByText(input.a11yActiveText, { exact: false });
        expect(pill).contains(statusText);
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('button');
        }
    });
})