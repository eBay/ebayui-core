const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('inline-notice', () => {
    it('renders with defaults', async() => {
        const input = mock.Inline;
        const { getAllByLabelText, getByText } = await render(template, input);
        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        expect(status).has.class('inline-notice__header');
        expect(status).has.property('tagName', 'SPAN');
        expect(status.parentElement).has.class('inline-notice--attention');

        const content = getByText(input.renderBody.text);
        expect(content).has.property('tagName', 'SPAN');
        expect(content).has.class('inline-notice__main');
    });

    it('renders with custom status type', async() => {
        const input = mock.Inline_Custom_Status;
        const { getAllByLabelText } = await render(template, input);
        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        expect(status.parentElement).has.class(`inline-notice--${input.status}`);
    });

    testPassThroughAttributes(template, {
        input: mock.Inline
    });
});
