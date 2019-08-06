const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('notice', () => {
    describe('with type=page', () => {
        it('renders with defaults', async() => {
            const input = mock.Page;
            const { getByLabelText, getByText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            expect(status).has.class('page-notice__status');
            expect(status).has.property('tagName', 'H2');

            const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
            expect(containerUsingLabel).has.class('page-notice--attention');

            const content = getByText(input.renderBody.text);
            expect(content).has.property('tagName', 'DIV');
            expect(content).has.class('page-notice__content');
        });

        it('renders with custom heading tag', async() => {
            const input = mock.Page_Custom_Heading_Tag;
            const { getByLabelText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            expect(status).has.property('tagName', 'H3');
        });

        it('renders with custom status type', async() => {
            const input = mock.Page_Custom_Status;
            const { getByLabelText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
            expect(containerUsingLabel).has.class(`page-notice--${input.status}`);
        });

        it('renders with dismiss button', async() => {
            const input = mock.Page_Dismissible;
            const { getByLabelText } = await render(template, input);
            expect(getByLabelText(input.a11yCloseText)).has.class('page-notice__close');
        });

        testPassThroughAttributes(template, {
            input: mock.Page
        });
    });

    describe('with type=inline', () => {
        it('renders with defaults', async() => {
            const input = mock.Inline;
            const { getByLabelText, getByText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            expect(status).has.class('inline-notice__status');
            expect(status).has.property('tagName', 'SPAN');

            const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
            expect(containerUsingLabel).has.class('inline-notice--attention');

            const content = getByText(input.renderBody.text);
            expect(content).has.property('tagName', 'SPAN');
            expect(content).has.class('inline-notice__content');
        });

        it('renders with custom heading tag (ignores it)', async() => {
            const input = mock.Inline_Custom_Heading_Tag;
            const { getByLabelText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            expect(status).has.property('tagName', 'SPAN');
        });

        it('renders with custom status type', async() => {
            const input = mock.Inline_Custom_Status;
            const { getByLabelText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
            expect(containerUsingLabel).has.class(`inline-notice--${input.status}`);
        });

        it('renders with dismiss button', async() => {
            const input = mock.Inline_Dismissible;
            const { getByLabelText } = await render(template, input);
            // TODO: Is this supposed to be inline-notice?
            expect(getByLabelText(input.a11yCloseText)).has.class('page-notice__close');
        });

        testPassThroughAttributes(template, {
            input: mock.Inline
        });
    });
});
