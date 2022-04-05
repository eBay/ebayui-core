import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render } from '@marko/testing-library';
import snap from 'mocha-snap';
import {
    runMigrateTransformer,
    testPassThroughAttributes,
} from '../../../../common/test-utils/server';
import migrator from '../migrator';
import template from '..';
import * as mock from './mock';
const snapDOM = (node) => snap(node, '.html', __dirname);

use(chaiDom);

describe('dialog-base', () => {
    it('renders basic version', async () => {
        const input = mock.dialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog', { hidden: true })).has.attr('hidden');
        expect(getByLabelText(input.a11yCloseText)).has.class('lightbox-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('lightbox-dialog__main');
    });

    it('renders with header and footer', async () => {
        const input = mock.headerFooterDialog;
        const { getByRole, getByLabelText, getByText } = await render(template, input);

        expect(getByRole('dialog', { hidden: true })).has.attr('hidden');
        expect(getByLabelText(input.a11yCloseText)).has.class('lightbox-dialog__close');
        expect(getByText(input.renderBody.text)).has.class('lightbox-dialog__main');
        expect(getByText(input.header.renderBody.text)).has.tagName('H2');
        expect(getByText(input.header.renderBody.text).parentElement).has.class(
            'lightbox-dialog__header'
        );
        expect(getByText(input.footer.renderBody.text)).has.class('lightbox-dialog__footer');
    });

    it('renders in open state', async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole('dialog')).does.not.have.attr('hidden');
    });

    it('renders non modal', async () => {
        const input = mock.dialog;
        const { getByRole } = await render(template, Object.assign({}, input, { isModal: false }));
        expect(getByRole('dialog', { hidden: true })).has.attribute('aria-live', 'polite');
    });

    testPassThroughAttributes(template);
});

describe('migrator', () => {
    const componentPath = '../index.js';
    function getTagString() {
        return `<ebay-dialog-base>
            <@header>
                <h2 class="test">Text</h2>
            </@header>
        </ebay-dialog-base>`;
    }
    function getTagStringH3() {
        return `<ebay-dialog-base><@header><h3 class="test">Text</h3></@header></ebay-dialog-base>`;
    }
    function getTagStringSpan() {
        return `<ebay-dialog-base><@header><span class="test">Text</span></@header></ebay-dialog-base>`;
    }

    function getTagStringNoTransform() {
        return `<ebay-dialog-base><@header>Text</@header></ebay-dialog-base>`;
    }

    it('removes h2 and adds props to other tag', async () => {
        const tagString = getTagString();
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [, newContainer],
            },
        } = el;
        expect(newContainer.bodyText).to.contain('Text');
        expect(newContainer.getAttributeValue('class').value).to.equal('test');
        expect(newContainer.hasAttribute('as')).to.equal(false);
    });

    it('removes h3', async () => {
        const tagString = getTagStringH3();
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [newContainer],
            },
        } = el;

        expect(newContainer.bodyText).to.equal('Text');
        expect(newContainer.getAttributeValue('class').value).to.equal('test');
        expect(newContainer.getAttributeValue('as').value).to.equal('h3');
    });

    it('does not remove span', async () => {
        const tagString = getTagStringSpan();
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [newContainer],
            },
        } = el;

        expect(newContainer.firstChild.tagName).to.equal('span');
        expect(newContainer.hasAttribute('class')).to.equal(false);
        expect(newContainer.hasAttribute('as')).to.equal(false);
    });

    it('does not remove change if it has only text', async () => {
        const tagString = getTagStringNoTransform();
        const { el, code } = runMigrateTransformer(migrator, tagString, componentPath);
        if (code) {
            await snapDOM(code);
            return;
        }

        const {
            body: {
                array: [newContainer],
            },
        } = el;

        expect(newContainer.bodyText).to.equal('Text');
        expect(newContainer.hasAttribute('class')).to.equal(false);
        expect(newContainer.hasAttribute('as')).to.equal(false);
    });
});
