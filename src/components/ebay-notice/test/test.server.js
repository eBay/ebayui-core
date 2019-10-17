const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const { runTransformer } = require('../../../common/test-utils/server');
const transformer = require('../transformer');
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

            const content = getByText(input._default.renderBody.text);
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

        it('renders with cta button', async() => {
            const input = mock.Cta_Button;
            const { getByText } = await render(template, input);
            const content = getByText(input.content.renderBody.text);
            const button = content.nextElementSibling;
            expect(content).has.class('page-notice__content');
            expect(content.parentElement).has.class('page-notice');
            expect(button.textContent).to.equal('Action');
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

            const content = getByText(input._default.renderBody.text);
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

    describe('with type=section', () => {
        it('renders with status', async() => {
            const input = mock.Section_Info;
            const { getByLabelText, getByText } = await render(template, input);
            const status = getByLabelText(input.a11yHeadingText).parentElement;
            expect(status).has.class('section-notice__status');
            expect(status).has.property('tagName', 'H2');

            const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
            expect(containerUsingLabel).has.class('section-notice--information');

            const content = getByText(input._default.renderBody.text);
            expect(content).has.property('tagName', 'DIV');
            expect(content).has.class('section-notice__content');

            const container = content.parentElement;
            expect(container).has.class('section-notice');
            expect(container).has.class('section-notice--information');
        });

        it('renders with light', async() => {
            const input = mock.Section_Light;
            const { getByText } = await render(template, input);
            const container = getByText(input._default.renderBody.text).parentElement;
            expect(container).has.class('section-notice');
            expect(container).does.not.have.class('section-notice--attention');

            const firstChild = container.children[0];
            expect(firstChild).does.not.have.property('tagName', 'H2');
            expect(firstChild).does.not.have.class('section-notice__status');
        });
    });
});

describe('transformer', () => {
    const componentPath = '../index.js';

    it('transforms body to _default', () => {
        const tagString = '<ebay-notice type="page"><p>Content</p></ebay-notice>';
        const { el } = runTransformer(transformer, tagString, componentPath);
        const { body: { array: [def] } } = el;
        expect(def.tagName).to.equal('ebay-notice:_default');
    });

    it('transforms an body to _default and ignores content tag', () => {
        const tagString = `<ebay-notice type="page">
            <ebay-notice-content>Other</ebay-notice-content>Content
        </ebay-notice>
        `;
        const { el } = runTransformer(transformer, tagString, componentPath);
        const { body: { array: [def, content] } } = el;
        expect(def.tagName).to.equal('ebay-notice:_default');
        expect(content.tagName).to.equal('ebay-notice-content');
    });
});
