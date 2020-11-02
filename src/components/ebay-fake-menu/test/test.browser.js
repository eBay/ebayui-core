const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const { pressKey } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the menu is in the default state', () => {
    const input = mock.Basic_2Items;
    const firstItemText = input.items[0].renderBody.text;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when an item is clicked', () => {
        beforeEach(async() => {
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
        beforeEach(async() => {
            await pressKey(
                component.getByText(firstItemText),
                {
                    key: 'Escape',
                    keyCode: 27
                }
            );
        });

        it('then it emits the marko keydown event', () => {
            expect(component.emitted('keydown')).to.have.property('length', 1);
        });
    });
});
