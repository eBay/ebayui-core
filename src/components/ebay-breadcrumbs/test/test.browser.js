import { render, fireEvent, cleanup } from '@marko/testing-library';
import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import * as mock from '../mock';
import template from '..';
use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given a basic breadcrumb', () => {
    const input = mock.Links;
    const firstItem = input.items[0];

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe('when an <a> item is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItem.renderBody.text));
        });

        it('then it emits the select event with correct data', () => {
            expect(component.emitted('select')).has.length(1);
        });
    });
});

describe('button', () => {
    const input = mock.Buttons;
    const lastItem = input.items[input.items.length - 1];

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe('when a <button> is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(lastItem.renderBody.text));
        });

        it('then it does not emit the select event', () => {
            expect(component.emitted('select')).has.length(0);
        });
    });
});
