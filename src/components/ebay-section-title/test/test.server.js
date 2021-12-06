const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('section-title', () => {
    it('renders with title', async () => {
        const input = mock.TitleBasic;
        const { getByText } = await render(template, input);
        const title = getByText(input.renderBody.text);
        expect(title.parentElement.parentElement).has.class('section-title');
        expect(title.parentElement).has.class('section-title__title-container');
        expect(title).has.class('section-title__title');
        expect(title).has.property('tagName', 'H2');
    });

    it('renders with title tag', async () => {
        const input = mock.Title;
        const { getByText } = await render(template, input);
        const title = getByText(input.title.renderBody.text);
        expect(title.parentElement.parentElement).has.class('section-title');
        expect(title.parentElement).has.class('section-title__title-container');
        expect(title).has.class('section-title__title');
        expect(title).has.property('tagName', 'H2');
    });

    it('renders with subtitle', async () => {
        const input = mock.Subtitle;
        const { getByText } = await render(template, input);
        const subtitle = getByText(input.subtitle.renderBody.text);
        expect(subtitle.parentElement).has.class('section-title__title-container');
        expect(subtitle).has.class('section-title__subtitle');
        expect(subtitle).has.property('tagName', 'SPAN');
    });

    it('renders with no-text cta', async () => {
        const input = mock.CTA;
        const { container, getByText } = await render(template, input);

        const title = getByText(input.title.renderBody.text);
        expect(title.parentElement).has.property('tagName', 'H2');
        expect(title).has.property('tagName', 'A');
        expect(title).has.attr('href', input.href);

        const cta = container.querySelector('svg');
        expect(cta.parentElement).has.class('section-title__title');
    });

    it('renders with info', async () => {
        const input = mock.Info;
        const { getByText } = await render(template, input);
        const info = getByText(input.info.renderBody.text);
        expect(info).has.class('section-title__info');
        expect(info).has.property('tagName', 'DIV');
    });

    it('renders with overflow', async () => {
        const input = mock.Overflow;
        const { getByText } = await render(template, input);
        const overflow = getByText(input.overflow.renderBody.text);
        expect(overflow).has.class('section-title__overflow');
        expect(overflow).has.property('tagName', 'DIV');
    });

    it('renders with large size', async () => {
        const input = mock.Size;
        const { container } = await render(template, input);
        const section = container.firstElementChild;
        expect(section).has.class('section-title');
        expect(section).has.class('section-title--large');
        expect(section).has.property('tagName', 'DIV');
    });

    testPassThroughAttributes(template, {
        input: mock.Title,
    });
});
