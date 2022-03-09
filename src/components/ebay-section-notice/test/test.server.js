import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('section-notice', () => {
    it('renders with status', async () => {
        const input = mock.SectionInfo;
        const { getByLabelText, getByText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
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

    it('renders with light', async () => {
        const input = mock.SectionLight;
        const { getByText } = await render(template, input);
        const container = getByText(input.renderBody.text).parentElement;
        expect(container).has.class('section-notice');
        expect(container).does.not.have.class('section-notice--attention');

        const footer = getByText(input.footer.renderBody.text);
        expect(footer).has.class('section-notice__footer');
        expect(footer).has.tagName('DIV');
    });
});
