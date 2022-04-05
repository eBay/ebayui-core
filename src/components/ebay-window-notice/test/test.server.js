import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('window-notice', () => {
    it('renders normal window', async () => {
        const input = mock.windowNotice;
        const { getByText } = await render(template, input);
        const content = getByText(input.renderBody.text);
        expect(content).has.property('tagName', 'DIV');

        const container = getByText(input.renderBody.text).parentElement;
        expect(container).has.class('window-notice');
        expect(container).does.not.have.class('window-notice--attention');
        expect(container).does.not.have.class('window-notice--screen');

        const title = getByText(input.title.renderBody.text);
        expect(title).has.class('window-notice__title');
        expect(title.parentElement).has.class('window-notice__main');
    });

    it('renders fullscreen window', async () => {
        const input = Object.assign({}, mock.windowNotice, { window: 'fullscreen' });
        const { getByText } = await render(template, input);
        const container = getByText(input.renderBody.text).parentElement;
        expect(container).has.class('window-notice');
        expect(container).has.class('window-notice--screen');
    });
});
