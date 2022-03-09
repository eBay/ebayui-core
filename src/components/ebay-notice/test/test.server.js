import { expect, use } from 'chai';
import snap from 'mocha-snap';
const migrator = require('../migrator');
const { runMigrateTransformer } = require('../../../common/test-utils/server');

const snapDOM = (node) => snap(node, '.html', __dirname);
use(require('chai-dom'));

describe('notice-migrations', () => {
    const componentPath = '../index.marko';

    it('migrates notice to default', async () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice>Test</ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        // const { body: { array: [heading, panel] } } = el;
        expect(el.tagName).to.equal('ebay-page-notice');
    });

    it('migrates notice type=inline to inline-notice', async () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="inline">Test</ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        expect(el.tagName).to.equal('ebay-inline-notice');
    });

    it('migrates notice type=window to window-notice', async () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="window">Test</ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        expect(el.tagName).to.equal('ebay-window-notice');
    });

    it('migrates notice type=section to section-notice', async () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type="section">Test</ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        expect(el.tagName).to.equal('ebay-section-notice');
    });

    it('migrates notice body to be outer element', async () => {
        // eslint-disable-next-line max-len
        const tagString =
            '<ebay-notice type="section"><@content><p>Test</p></@content></ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [content],
            },
        } = el;
        expect(el.tagName).to.equal('ebay-section-notice');
        expect(content.bodyText).to.contain('Test');
    });

    it('migrates button to be in footer element', async () => {
        // eslint-disable-next-line max-len
        const tagString =
            '<ebay-notice type="section"><@content><p>Test</p></@content><ebay-button/></ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [content, footer],
            },
        } = el;
        expect(el.tagName).to.equal('ebay-section-notice');
        expect(content.bodyText).to.contain('Test');
        expect(footer.tagName).to.equal('@footer');
    });

    it('migrates skips migrating button to be in footer element if its not in root', async () => {
        // eslint-disable-next-line max-len
        const tagString =
            '<ebay-notice type="section"><@content><ebay-button>Test</ebay-button></@content></ebay-notice>';
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [content, footer],
            },
        } = el;
        expect(el.tagName).to.equal('ebay-section-notice');
        expect(content.bodyText).to.contain('Test');
        expect(footer).to.equal(undefined);
    });

    it('fails migration on dynamic attribute', async () => {
        // eslint-disable-next-line max-len
        const tagString = '<ebay-notice type=(true && "inline")></ebay-notice>';
        const { context, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }
        expect(context.hasErrors()).to.equal(true);
    });
});
