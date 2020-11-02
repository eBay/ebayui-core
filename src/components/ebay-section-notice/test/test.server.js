const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('section-notice', () => {
    it('renders with status', async() => {
        const input = mock.Section_Info;
        const { getAllByLabelText, getByText } = await render(template, input);
        const status = getAllByLabelText(input.a11yText)[1].parentElement;
        expect(status).has.class('section-notice__header');

        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class('section-notice--information');

        const content = getByText(input.renderBody.text);
        expect(content).has.class('section-notice__main');
        expect(content).has.tagName('SPAN');

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

        const footer = getByText(input.footer.renderBody.text);
        expect(footer).has.class('section-notice__footer');
        expect(footer).has.tagName('DIV');
    });
});
