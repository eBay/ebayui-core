const { expect, use } = require('chai');
const migrator = require('../migrator');
const { runTransformer } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('notice-migrations', () => {
    const componentPath = '../index.marko';

    it('migrates notice to default', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice>Test</ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        // const { body: { array: [heading, panel] } } = el;
        expect(el.tagName).to.equal('ebay-page-notice');
    });

    it('migrates notice type=inline to inline-notice', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="inline">Test</ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        expect(el.tagName).to.equal('ebay-inline-notice');
    });

    it('migrates notice type=window to window-notice', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="window">Test</ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        expect(el.tagName).to.equal('ebay-window-notice');
    });

    it('migrates notice type=section to section-notice', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="section">Test</ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        expect(el.tagName).to.equal('ebay-section-notice');
    });

    it('migrates notice body to be outer element', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="section"><ebay-notice-content><p>Test</p></ebay-notice-content></ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        const { body: { array: [content] } } = el;
        expect(el.tagName).to.equal('ebay-section-notice');
        expect(content.bodyText).to.contain('Test');
    });

    it('migrates button to be in footer element', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="section"><ebay-notice-content><p>Test</p></ebay-notice-content><ebay-button/></ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        const { body: { array: [content, footer] } } = el;
        expect(el.tagName).to.equal('ebay-section-notice');
        expect(content.bodyText).to.contain('Test');
        expect(footer.tagName).to.equal('@footer');
    });

    it('migrates skips migrating button to be in footer element if it\s not in root', () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="section"><ebay-notice-content><ebay-button>Test</ebay-button></ebay-notice-content></ebay-notice>';
        const { el } = runTransformer(migrator, tagString, componentPath);
        const { body: { array: [content, footer] } } = el;
        expect(el.tagName).to.equal('ebay-section-notice');
        expect(content.bodyText).to.contain('Test');
        expect(footer).to.equal(undefined);
    });
});
