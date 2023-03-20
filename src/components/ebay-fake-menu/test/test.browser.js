import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent, cleanup } from '@marko/testing-library';
import { pressKey } from '../../../common/test-utils/browser';
import template from '..';
import * as mock from './mock';

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the menu is in the default state', () => {
    const input = mock.basic2Items;
    const firstItemText = input.items[0].renderBody.text;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe('when an item is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
        });

        it('then it emits the select event with correct data', () => {
            const selectEvents = component.emitted('select');
            expect(selectEvents).to.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('el').with.text(firstItemText);
        });
    });

    describe('when the escape key is pressed from an item', () => {
        beforeEach(async () => {
            await pressKey(component.getByText(firstItemText), {
                key: 'Escape',
                keyCode: 27,
            });
        });

        it('then it emits the marko keydown event', () => {
            expect(component.emitted('keydown')).to.have.property('length', 1);
        });
    });
});

describe('given the menu has checkbox items with separator', () => {
    const input = Object.assign({ type: 'checkbox' }, mock.separator4Items);

    const firstItemText = input.items[0].renderBody.text;
    const secondItemText = input.items[1].renderBody.text;
    const thirdItemText = input.items[3].renderBody.text;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe('when all items are clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
            await fireEvent.click(component.getByText(secondItemText));
            await fireEvent.click(component.getByText(thirdItemText));
        });

        it('then it emits three select events with correct data', () => {
            const selectEvents = component.emitted('select');
            expect(selectEvents).to.have.length(3);

            const [[eventArg0], [eventArg1], [eventArg2]] = selectEvents;
            expect(eventArg0.index).to.deep.equal(0);
            expect(eventArg1.index).to.deep.equal(1);
            expect(eventArg2.index).to.deep.equal(2);
        });
    });
});
