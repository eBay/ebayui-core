const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const { pressKey } = require('../../../common/test-utils/browser');
const mock = require('./mock');
const template = require('..');

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

        it('then it emits the menu-select event with correct data', () => {
            const selectEvents = component.emitted('menu-select');
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
            expect(component.emitted('menu-keydown')).to.have.property('length', 1);
        });
    });
});

describe('given the menu has radio items', () => {
    const input = assign({ type: 'radio' }, mock.Basic_2Items);
    let firstItem, secondItem;

    beforeEach(async() => {
        component = await render(template, input);
        firstItem = component.getAllByRole('menuitemradio')[0];
        secondItem = component.getAllByRole('menuitemradio')[1];
    });

    describe('when an item is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(firstItem);
        });

        it('then it emits the menu-change event with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.checked).to.deep.equal(['item 0']);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an action button is pressed on an item', () => {
        beforeEach(async() => {
            await pressKey(firstItem, {
                key: '(Space character)',
                keyCode: 32
            });
        });

        it('then it emits the menu-change event with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.checked).to.deep.equal(['item 0']);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when two items are clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it('then it emits two menu-change events with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            expect(firstEventData.checked).to.deep.equal(['item 0']);
            expect(secondEventData.checked).to.deep.equal(['item 1']);
        });

        it('then the second item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
            expect(secondItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an item is clicked multiple times', () => {
        beforeEach(async() => {
            await fireEvent.click(firstItem);
            expect(firstItem).to.have.attr('aria-checked', 'true');
            await fireEvent.click(firstItem);
        });

        it('then it emits two menu-change events with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.checked).to.deep.equal(['item 0']);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });
});

describe('given the menu has checkbox items', () => {
    const input = assign({ type: 'checkbox' }, mock.Basic_2Items);
    let firstItem, secondItem;

    beforeEach(async() => {
        component = await render(template, input);
        firstItem = component.getAllByRole('menuitemcheckbox')[0];
        secondItem = component.getAllByRole('menuitemcheckbox')[1];
    });

    describe('when two items are clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it('then it emits two menu-change events with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            expect(firstEventData.checked).to.deep.equal(['item 0']);
            expect(secondEventData.checked).to.deep.equal(['item 0', 'item 1']);
        });

        it('then both items are selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
            expect(secondItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an item is checked and then unchecked', () => {
        beforeEach(async() => {
            await fireEvent.click(firstItem);
            await fireEvent.click(firstItem);
        });

        it('then it emits the menu-change events with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            expect(firstEventData.checked).to.deep.equal(['item 0']);
            expect(secondEventData.checked).to.deep.equal([]);
        });

        it('then the item is unchecked', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
        });
    });
});
