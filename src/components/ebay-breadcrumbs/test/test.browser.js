const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('../mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a basic breadcrumb', () => {
    const input = mock.Links;
    const firstItem = input.items[0];
    const lastItem = input.items[input.items.length - 1];

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when an <a> item is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByText(firstItem.renderBody.text));
        });

        it('then it emits the breadcrumbs-select event with correct data', () => {
            expect(component.emitted('breadcrumbs-select')).has.length(1);
        });
    });

    describe('when a <button> is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByText(lastItem.renderBody.text));
        });

        it('then it does not emit the breadcrumbs-select event', () => {
            expect(component.emitted('breadcrumbs-select')).has.length(0);
        });
    });
});
