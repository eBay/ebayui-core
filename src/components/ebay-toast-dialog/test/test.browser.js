const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, waitFor, cleanup } = require('@marko/testing-library');
const { fastAnimations } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a closed toast', () => {
    const input = mock.Toast;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is hidden in the DOM', () => {
        expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden');
    });

    describe('then it is opened', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        it('then it is visible in the DOM', async() => {
            await waitFor(() => expect(component.emitted('open')).has.length(1));
        });
    });
});

describe('given an open toast', () => {
    const input = mock.Toast_Open;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('then it is closed', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: false }));
        });

        it('then it is closed in dom', async() => {
            await waitFor(() => expect(component.emitted('close')).has.length(1));
        });
    });
});
