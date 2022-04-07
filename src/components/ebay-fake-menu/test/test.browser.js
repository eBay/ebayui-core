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
