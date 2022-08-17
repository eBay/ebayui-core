import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const { testPassThroughAttributes } = require('../../../../common/test-utils/server');

use(require('chai-dom'));

describe('notice-icon', () => {
    it('renders basic version', async () => {
        const input = mock.defaultNotice;
        const { getByLabelText, getByText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).has.class(`${input.prefixClass}__header`);

        const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
        expect(containerUsingLabel).has.class(input.class);

        const content = getByText(input.renderBody.text);
        expect(content).has.class(`${input.prefixClass}__main`);

        expect(getByLabelText(input.a11yText)).has.class('icon--attention-filled-small');
    });

    it('renders inline version', async () => {
        const input = mock.inlineNotice;
        const { getByLabelText } = await render(template, input);

        const status = getByLabelText(input.a11yText).parentElement;
        expect(status.parentElement).not.to.have.property('aria-labelledby');
        expect(status.parentElement).has.class(input.class);
        expect(status.parentElement).has.tagName('DIV');

        expect(getByLabelText(input.a11yText)).has.class('icon--information-filled-small');
        expect(getByLabelText(input.a11yText)).has.class('notice-class');
    });

    it('renders title and footer version', async () => {
        const input = mock.titleFooterNotice;
        const { getByLabelText, getByText } = await render(template, input);

        const status = getByLabelText(input.a11yText).parentElement;
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
        input: mock.defaultNotice,
    });
});
