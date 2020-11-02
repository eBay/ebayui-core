const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const assign = require('core-js-pure/features/object/assign');
const {
    runTransformer,
    testEventsMigrator,
    testAttributeRenameMigrator
} = require('../../../common/test-utils/server');
const migrator = require('../migrator');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('infotip', () => {
    it('renders default infotip', async() => {
        const input = mock.WithContent;
        const { getByLabelText, getByText } = await render(template, input);
        expect(getByLabelText(input.ariaLabel)).has.class('infotip__host');
        expect(getByText(input.content.renderBody.text)).has.class('infotip__content');
    });

    it('renders infotip with a header', async() => {
        const input = mock.WithContentAndHeader;
        const { getByText } = await render(template, input);
        expect(getByText(input.heading.renderBody.text)).has.class('infotip__heading');
    });

    it('renders default infotip disabled', async() => {
        const input = mock.Disabled;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.ariaLabel)).has.attr('disabled');
    });

    // TODO: Does not look like this tag passes through class and style?
    // testPassThroughAttributes(template);
});

describe('infotip modal', () => {
    it('renders modal infotip', async() => {
        const input = mock.ModalWithContent;
        const { getByLabelText, getAllByLabelText, getByText } = await render(template, input);
        expect(getAllByLabelText(input.ariaLabel)[0]).has.class('dialog--mini__host');
        expect(getByText(input.content.renderBody.text)).has.class('lightbox-dialog__main');
        expect(getByLabelText(input.a11yCloseText)).has.class('lightbox-dialog__close');
    });

    it('renders modal infotip without header', async() => {
        const input = assign({}, mock.WithContentAndHeader, { variant: 'modal' });
        const { queryByText } = await render(template, input);
        expect(queryByText(input.heading.renderBody.text)).equals(null);
    });
});

describe('migrator', () => {
    const componentPath = '../index.marko';

    it('transforms an icon attribute into a tag', () => {
        const tagString = '<ebay-infotip icon="settings"/>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        const { body: { array: [tag] } } = iconEl;
        expect(iconEl.tagName).to.equal('@icon');
        expect(tag.tagName).to.equal('ebay-settings-icon');
    });

    it('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-infotip/>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });

    testEventsMigrator(require('../migrator'), { event: 'tooltip', component: 'infotip' },
        ['expand', 'collapse'], '../index.marko');
    testAttributeRenameMigrator(require('../migrator'), 'infotip', 'modal', 'variant', '../index.marko');
});
