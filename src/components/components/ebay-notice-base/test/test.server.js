const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('notice-icon', () => {
    it('renders basic version', async() => {
        const input = mock.Default_Notice;
        const { getAllByLabelText, getByText } = await render(template, input);

        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        expect(status).has.class(`${input.prefixClass}__header`);

        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class(input.class);

        const content = getByText(input.renderBody.text);
        expect(content).has.class(`${input.prefixClass}__main`);

        expect(getAllByLabelText(input.a11yText)[1]).has.class('icon--attention-filled');
    });

    it('renders inline version', async() => {
        const input = mock.Inline_Notice;
        const { getAllByLabelText } = await render(template, input);

        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class(input.class);
        expect(containerUsingLabel).has.tagName('DIV');

        expect(getAllByLabelText(input.a11yText)[1]).has.class('icon--information-filled');
        expect(getAllByLabelText(input.a11yText)[1]).has.class('notice-class');
    });

    it('renders title and footer version', async() => {
        const input = mock.Title_Footer_Notice;
        const { getAllByLabelText, getByText } = await render(template, input);

        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class(input.class);

        const content = getByText(input.renderBody.text);
        expect(content).has.class(`${input.prefixClass}__main`);

        const footer = getByText(input.footer.renderBody.text);
        expect(footer).has.class(`${input.prefixClass}__footer`);

        const title = getByText(input.title.renderBody.text);
        expect(title).has.class(`${input.prefixClass}__title`);
    });

    testPassThroughAttributes(template, {
        input: mock.Default_Notice
    });
});
