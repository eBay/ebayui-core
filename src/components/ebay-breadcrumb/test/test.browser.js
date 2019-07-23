const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('../mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a basic breadcrumb', () => {
    const mockItems = mock.basicItems.items;
    const firstItem = mockItems[0];
    const lastItem = mockItems[mockItems.length - 1];

    beforeEach(async () => {
        component = await render(template, mock.basicItems);
    });

    describe('when an <a> item is clicked', () => {
        beforeEach(() => {
            fireEvent.click(component.getByText(firstItem.renderBody.text));
        });

        it('then it emits the breadcrumb-select event with correct data', () => {
            expect(component.emitted('breadcrumb-select')).has.length(1);
        });
    });

    describe('when a <button> is clicked', () => {
        beforeEach(() => {
            fireEvent.click(component.getByText(lastItem.renderBody.text));
        });

        it('then it does not emit the breadcrumb-select event', () => {
            expect(component.emitted('breadcrumb-select')).has.length(0);
        });
    });
});
