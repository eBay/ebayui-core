import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import snap from 'mocha-snap';
import { runMigrateTransformer } from '../../../common/test-utils/server';
import migrator from '../';

use(chaiDom);
const snapDOM = (node) => snap(node, '.html', __dirname);

describe('migrators', () => {
    const componentPath = '../index.marko';

    function migratorFn(el, context) {
        migrator.createIconFromAttribute(el, context, 'icon');
        migrator.setAttributeIfPresent(el, context, 'on-menu-button-click', 'on-click');
        migrator.setAttributeIfPresent(el, context, 'old-attribute', 'new-attribute');
    }

    it('transforms an icon attribute into a tag', async () => {
        const tagString = '<ebay-menu-button icon="settings"/>';
        const { el, code } = runMigrateTransformer(migratorFn, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [iconEl],
            },
        } = el;
        const {
            body: {
                array: [tag],
            },
        } = iconEl;
        expect(iconEl.tagName).to.equal('@icon');
        expect(tag.tagName).to.equal('ebay-settings-icon');
    });

    it('does not transform when icon attribute is missing', async () => {
        const tagString = '<ebay-textbox prefix-icon="settings"/>';
        const { el, code } = runMigrateTransformer(migratorFn, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [iconEl],
            },
        } = el;
        expect(iconEl).to.equal(undefined);
    });

    it('changes attributes if they exist', async () => {
        const tagString = '<ebay-menu-button on-menu-button-click(() => {})/>';
        const { el, code } = runMigrateTransformer(migratorFn, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        expect(el.hasAttribute('on-click')).to.equal(true);
        expect(el.hasAttribute('on-menu-button-click')).to.equal(false);
    });

    it('does not changes attributes if they do not exist', async () => {
        const tagString = '<ebay-menu-button on-button-click(() => {})/>';
        const { el, code } = runMigrateTransformer(migratorFn, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        expect(el.hasAttribute('on-click')).to.equal(false);
        expect(el.hasAttribute('on-button-click')).to.equal(true);
    });

    it('does multiple changes', async () => {
        const tagString =
            '<ebay-menu-button on-button-click(() => {}) icon="settings" oldAttribute="val"/>';
        const { el, code } = runMigrateTransformer(migratorFn, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [iconEl],
            },
        } = el;
        const {
            body: {
                array: [tag],
            },
        } = iconEl;
        expect(el.hasAttribute('on-click')).to.equal(false);
        expect(el.hasAttribute('on-button-click')).to.equal(true);
        expect(el.getAttributeValue('newAttribute').value).to.equal('val');
        expect(iconEl.tagName).to.equal('@icon');
        expect(tag.tagName).to.equal('ebay-settings-icon');
    });
});
