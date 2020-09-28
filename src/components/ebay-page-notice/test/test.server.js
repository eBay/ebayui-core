const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('page-notice', () => {
    it('renders with defaults', async() => {
        const input = mock.Page;
        const { getAllByLabelText, getByText } = await render(template, input);
        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        expect(status).has.class('page-notice__header');

        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class('page-notice--attention');

        const content = getByText(input.renderBody.text);
        expect(content).has.property('tagName', 'DIV');
        expect(content).has.class('page-notice__main');
    });

    it('renders with custom heading tag', async() => {
        const input = mock.Page_Custom_Heading_Tag;
        const { getByText } = await render(template, input);
        const title = getByText(input.title.renderBody.text);
        expect(title).has.property('tagName', 'H3');
    });

    it('renders with custom status type', async() => {
        const input = mock.Page_Custom_Status;
        const { getAllByLabelText } = await render(template, input);
        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class(`page-notice--${input.status}`);
    });

    it('renders with no icon', async() => {
        const input = mock.Page_Icon_Hidden;
        const { queryByLabelText } = await render(template, input);
        const statusWithIcon = queryByLabelText(input.a11yText);
        expect(statusWithIcon).to.equal(null);
    });

    it('renders with footer button', async() => {
        const input = mock.Footer_Button;
        const { getByText } = await render(template, input);
        const content = getByText(input.renderBody.text);
        const footer = getByText(input.footer.renderBody.text);
        expect(content).has.class('page-notice__main');
        expect(content.parentElement).has.class('page-notice');
        expect(footer).has.class('page-notice__footer');
    });

    it('renders with celebration', async() => {
        const input = mock.Page_Celebration;
        const { getByText, getAllByLabelText } = await render(template, input);
        const content = getByText(input.renderBody.text);
        expect(content).has.class('page-notice__main');
        expect(content.parentElement).has.class('page-notice');
        const status = getAllByLabelText(input.a11yText)[1].parentElement;

        const containerUsingLabel = status.closest(`[aria-labelledBy="${status.id}"]`);
        expect(containerUsingLabel).has.class('page-notice--celebration');

        const title = getByText(input.title.renderBody.text);
        expect(title).has.class('page-notice__title');
    });

    testPassThroughAttributes(template, {
        input: mock.Page
    });
});
