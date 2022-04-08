import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('infotip', () => {
    it('renders default infotip', async () => {
        const input = mock.WithContent;
        const { getByLabelText, getByText } = await render(template, input);
        expect(getByLabelText(input.ariaLabel)).has.class('infotip__host');
        expect(getByText(input.content.renderBody.text)).has.class('infotip__content');
    });

    it('renders infotip with a header', async () => {
        const input = mock.WithContentAndHeader;
        const { getByText } = await render(template, input);
        expect(getByText(input.heading.renderBody.text)).has.class('infotip__heading');
    });

    it('renders default infotip disabled', async () => {
        const input = mock.Disabled;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.ariaLabel)).has.attr('disabled');
    });

    // TODO: Does not look like this tag passes through class and style?
    // testPassThroughAttributes(template);
});

describe('infotip modal', () => {
    it('renders modal infotip', async () => {
        const input = mock.ModalWithContent;
        const { getByLabelText, getAllByLabelText, getByText } = await render(template, input);
        expect(getAllByLabelText(input.ariaLabel)[0]).has.class('dialog--mini__host');
        expect(getByText(input.content.renderBody.text)).has.class('lightbox-dialog__main');
        expect(getByLabelText(input.a11yCloseButtonText)).has.class('lightbox-dialog__close');
    });

    it('renders modal infotip without header', async () => {
        const input = Object.assign({}, mock.WithContentAndHeader, { variant: 'modal' });
        const { queryByText } = await render(template, input);
        expect(queryByText(input.heading.renderBody.text)).equals(null);
    });
});
