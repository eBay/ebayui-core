import { expect, use } from 'chai';
import snap from 'mocha-snap';
const { runMigrateTransformer } = require('../../../common/test-utils/server');
const migrator = require('../migrator');

const snapDOM = (node) => snap(node, '.html', __dirname);

use(require('chai-dom'));

describe('ebay-dialog', () => {
    describe('migrator', () => {
        const componentPath = '../index.marko';

        it('migrates dialog to default', async () => {
            // eslint-disable-next-line max-len
            const tagString = '<ebay-dialog>Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-lightbox-dialog');
            expect(el.hasAttribute('type')).equals(false);
        });

        it('migrates dialog type=full to fullscreen-dialog', async () => {
            // eslint-disable-next-line max-len
            const tagString = '<ebay-dialog type="full">Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-fullscreen-dialog');
            expect(el.hasAttribute('type')).equals(false);
        });

        it('migrates dialog type=left to panel-dialog', async () => {
            // eslint-disable-next-line max-len
            const tagString = '<ebay-dialog type="left">Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-panel-dialog');
            expect(el.hasAttribute('type')).equals(false);
        });

        it('migrates dialog type=right to panel-dialog', async () => {
            // eslint-disable-next-line max-len
            const tagString = '<ebay-dialog type="right">Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.hasAttribute('position')).equals(true);
            expect(el.hasAttribute('type')).equals(false);
        });

        it('migrates dialog with events to default', async () => {
            // eslint-disable-next-line max-len
            const tagString =
                '<ebay-dialog on-dialog-show(() => {}) on-dialog-close(() => {})>Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-lightbox-dialog');
            expect(el.hasAttribute('on-open')).equals(true);
            expect(el.hasAttribute('on-close')).equals(true);
        });

        it('migrates dialog type=full with events to fullscreen-dialog', async () => {
            // eslint-disable-next-line max-len
            const tagString =
                '<ebay-dialog type="full" on-dialog-show(() => {}) on-dialog-close(() => {})>Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-fullscreen-dialog');
            expect(el.hasAttribute('on-open')).equals(true);
            expect(el.hasAttribute('on-close')).equals(true);
        });

        it('migrates dialog type=left with events to panel-dialog', async () => {
            // eslint-disable-next-line max-len
            const tagString =
                '<ebay-dialog type="left" on-dialog-show(() => {}) on-dialog-close(() => {})>Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-panel-dialog');
            expect(el.hasAttribute('on-open')).equals(true);
            expect(el.hasAttribute('on-close')).equals(true);
        });

        it('migrates dialog type=right with events to panel-dialog', async () => {
            // eslint-disable-next-line max-len
            const tagString =
                '<ebay-dialog type="right" on-dialog-show(() => {}) on-dialog-close(() => {})>Test</ebay-dialog>';
            const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
            if (code) {
                await snapDOM(code);
                return;
            }

            expect(el.tagName).to.equal('ebay-panel-dialog');
            expect(el.hasAttribute('on-open')).equals(true);
            expect(el.hasAttribute('on-close')).equals(true);
            expect(el.hasAttribute('position')).equals(true);
        });
    });
});
