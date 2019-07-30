const { expect, use } = require('chai');
const { render, fireEvent, wait, cleanup } = require('@marko/testing-library');
const mock = require('../mock');
const template = require('..');
const ESCAPE_KEY_CODE = 27;
const ENTER_KEY_CODE = 32;

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the menu is in the default state', () => {
    beforeEach(async() => {
        component = await render(template, { text: 'text', items: mock.twoItems });
    });

    describe('when the button is clicked once', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByRole('button'));
        });

        it('then it expands', async() => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'true');
        });

        it('then it emits the marko event from expander-expand', () => {
            expect(component.emitted('menu-expand')).has.length(1);
        });

        describe('when it is clicked again', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByRole('button'));
            });

            it('then it collapses', async() => {
                expect(component.getByRole('button')).to.have.attr('aria-expanded', 'false');
            });

            it('then it emits the marko event from expander-collapse', () => {
                expect(component.emitted('menu-collapse')).has.length(1);
            });
        });
    });

    describe('when an item is added via input from its parent and the new item is clicked', () => {
        beforeEach(async() => {
            await component.rerender({ items: mock.threeItems });
            await fireEvent.click(component.getByText(mock.THIRD_ITEM_TEXT));
        });

        it('then the new item is selected or something');

        it('then it uses the new input in event data', () => {
            const selectEvents = component.emitted('menu-select');
            expect(selectEvents).to.have.property('length', 1);

            const eventArgs = selectEvents[0];
            expect(eventArgs[0].el.innerText).to.equal(mock.THIRD_ITEM_TEXT);
        });
    });

    describe('when re-rendered with expanded set to false', () => {
        beforeEach(async() => {
            await component.rerender({ expanded: false, items: mock.twoItems });
        });

        it('then it remains collapsed', () => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'false');
        });

        it('then it doesn\'t emit the marko collapse event', () => {
            expect(component.emitted('menu-collapse')).has.length(0);
        });
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip('when re-rendered with expanded set to true', () => {
        beforeEach(async() => {
            await component.rerender({ expanded: true, items: mock.twoItems });
        });

        it('then it expands', () => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'true');
        });

        it('then it emits the menu-expand event', () => {
            expect(component.emitted('menu-expand')).has.length(1);
        });
    });
});

describe('given the menu is in the expanded state', () => {
    beforeEach(async() => {
        component = await render(template, { items: mock.twoItems });
        await fireEvent.click(component.getByRole('button'));
        expect(component.emitted('menu-expand')).has.length(1);
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip('when re-rendered with expanded set to true', () => {
        beforeEach(async() => {
            await component.rerender({ expanded: true, items: mock.twoItems });
        });

        it('then it remains expanded', () => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'true');
        });

        it('then it doesn\'t emit the marko expand event', () => {
            expect(component.emitted('menu-expand')).has.length(0);
        });
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip('when re-rendered with expanded set to false', () => {
        beforeEach(async() => {
            await component.rerender({ expanded: false, items: mock.twoItems });
        });

        it('then it expands', () => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'false');
        });

        it('then it emits the menu-expand event', () => {
            expect(component.emitted('menu-collapse')).has.length(1);
        });
    });

    describe('when an item is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByText(mock.FIRST_ITEM_TEXT));
        });

        it('then it emits the menu-select event with correct data', () => {
            const selectEvents = component.emitted('menu-select');
            expect(selectEvents).to.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('el').with.text(mock.FIRST_ITEM_TEXT);
            expect(eventArg).has.property('index', 0);
            expect(eventArg).has.property('checked').to.deep.equal([0]);
        });
    });

    describe('when the escape key is pressed from an item', () => {
        beforeEach(async() => {
            await fireEvent.keyDown(
                component.getByText(mock.FIRST_ITEM_TEXT),
                { charCode: ESCAPE_KEY_CODE }
            );
        });

        it('then it collapses', () => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'false');
        });

        it('then it emits the marko collapse event', () => {
            expect(component.emitted('menu-collapse')).to.have.property('length', 1);
        });
    });

    describe('when the escape key is pressed from the button', () => {
        beforeEach(async() => {
            await fireEvent.keyDown(component.getByRole('button'), { charCode: ESCAPE_KEY_CODE });
        });

        it('then it collapses', () => {
            expect(component.getByRole('button')).to.have.attr('aria-expanded', 'false');
        });

        it('then it emits the marko collapse event', () => {
            expect(component.emitted('menu-collapse')).to.have.property('length', 1);
        });
    });
});

describe('given the menu is in the expanded state with radio items', () => {
    let firstItem, secondItem;
    beforeEach(async() => {
        component = await render(template, { text: 'text', expanded: true, type: 'radio', items: mock.twoItems });
        firstItem = component.getByText(mock.FIRST_ITEM_TEXT).closest('[role=menuitemradio]');
        secondItem = component.getByText(mock.SECOND_ITEM_TEXT).closest('[role=menuitemradio]');
    });

    describe('when an item is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(firstItem);
        });

        it('then it emits the menu-change event with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    // TESTING IMPLEMENTATION DETAILS...
    // Is it not a given that click events bubble?
    describe('when an item\'s inner span is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByText(mock.FIRST_ITEM_TEXT));
        });

        it('then it emits the menu-change event with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an action button is pressed on an item', () => {
        beforeEach(async() => {
            await fireEvent.keyDown(firstItem, { charCode: ENTER_KEY_CODE });
        });

        it('then it emits the menu-change event with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
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
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(1);
            expect(secondEventData.checked).to.deep.equal([1]);
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

        it('then it emits only one menu-change event with correct data', () => {
            const changeEvents = component.emitted('menu-change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });
});

describe('given the menu is in the expanded state with checkbox items', () => {
    let firstItem, secondItem;
    beforeEach(async() => {
        component = await render(template, { text: 'text', expanded: true, type: 'checkbox', items: mock.twoItems });
        firstItem = component.getByText(mock.FIRST_ITEM_TEXT).closest('[role=menuitemcheckbox]');
        secondItem = component.getByText(mock.SECOND_ITEM_TEXT).closest('[role=menuitemcheckbox]');
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
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(1);
            expect(secondEventData.checked).to.deep.equal([0, 1]);
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
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(0);
            expect(secondEventData.checked).to.deep.equal([]);
        });

        it('then the item is unchecked', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
        });
    });
});
