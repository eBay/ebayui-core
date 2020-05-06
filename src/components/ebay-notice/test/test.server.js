const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const assign = require('core-js-pure/features/object/assign');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

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

        it('renders with cta button', async() => {
            const input = mock.Cta_Button;
            const { getByText } = await render(template, input);
            const content = getByText(input.content.renderBody.text);
            const button = content.nextElementSibling;
            expect(content).has.class('page-notice__content');
            expect(content.parentElement).has.class('page-notice');
            expect(button.textContent).to.equal('Action');
        });

        it('renders with celebration', async() => {
            const input = mock.Page_Celebration;
            const { getByText, getByLabelText } = await render(template, input);
            const content = getByText(input.content.renderBody.text);
            expect(content).has.class('page-notice__content');
            expect(content.parentElement).has.class('page-notice');
            const status = getByLabelText(input.a11yHeadingText).parentElement;

            const containerUsingLabel = status.closest(`[aria-labelledBy="${status.id}"]`);
            expect(containerUsingLabel).has.class('page-notice--celebration');

            const title = getByText(input.title.renderBody.text);
            expect(title).has.class('page-notice__title');
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

            const content = getByText(input.renderBody.text);
            expect(content).has.property('tagName', 'DIV');
            expect(content).has.class('section-notice__content');

            const container = content.parentElement;
            expect(container).has.class('section-notice');
            expect(container).has.class('section-notice--information');
        });

        it('renders with light', async() => {
            const input = mock.Section_Light;
            const { getByText } = await render(template, input);
            const container = getByText(input.renderBody.text).parentElement;
            expect(container).has.class('section-notice');
            expect(container).does.not.have.class('section-notice--attention');

            const firstChild = container.children[0];
            expect(firstChild).does.not.have.property('tagName', 'H2');
            expect(firstChild).does.not.have.class('section-notice__status');
        });
    });

    describe('with type=window', () => {
        it('renders normal window', async() => {
            const input = mock.Window_Notice;
            const { getByText } = await render(template, input);
            const container = getByText(input.content.renderBody.text).parentElement;
            expect(container).has.class('window-notice');
            expect(container).does.not.have.class('window-notice--attention');
            expect(container).does.not.have.class('window-notice--fill');

            const title = getByText(input.title.renderBody.text);
            expect(title).has.class('window-notice__title');
            expect(title.parentElement).has.class('window-notice__status');
        });

        it('renders fill window', async() => {
            const input = assign({}, mock.Window_Notice, { fillWindow: true });
            const { getByText } = await render(template, input);
            const container = getByText(input.content.renderBody.text).parentElement;
            expect(container).has.class('window-notice');
            expect(container).has.class('window-notice--fill');
        });
    });
});
