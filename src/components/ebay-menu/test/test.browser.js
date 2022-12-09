import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent, cleanup, waitFor } from '@marko/testing-library';
import { pressKey } from '../../../common/test-utils/browser';
import template from '..';
import * as mock from './mock';

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('typeahead functionality', () => {
    const input = mock.Countries;
    const firstItemText = input.items[0].renderBody.text;
    const secondItemText = input.items[1].renderBody.text;
    const thirdItemText = input.items[2].renderBody.text;

    beforeEach(async () => {
        component = await render(template, input);
    });
    describe('first', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
            await fireEvent.keyPress(component.getByText(firstItemText), { key: 'a', code: 65 });
            await fireEvent.keyPress(component.getByText(firstItemText), { key: 'l', code: 76 });
            await fireEvent.keyPress(component.getByText(firstItemText), { key: 'c', code: 67 });
        });

        it('shows the correct item in focus when the user types', async () => {
            expect(
                component.getByText(secondItemText).parentElement.getAttribute('tabindex')
            ).to.equal('0');
            await fireEvent.keyPress(component.getByText(secondItemText), { key: 'd', code: 68 });
            expect(
                component.getByText(thirdItemText).parentElement.getAttribute('tabindex')
            ).to.equal('0');
        });
    });

    it('shows first element in focus when there is no match', async () => {
        await fireEvent.click(component.getByText(firstItemText));
        await fireEvent.keyPress(component.getByText(firstItemText), { key: 'z', code: 90 });
        expect(component.getByText(firstItemText).parentElement.getAttribute('tabindex')).to.equal(
            '0'
        );
    });

    it('restarts the search from the beginning after it waits', async () => {
        await fireEvent.click(component.getByText(firstItemText));
        await fireEvent.keyPress(component.getByText(firstItemText), { key: 'a', code: 65 });
        await fireEvent.keyPress(component.getByText(firstItemText), { key: 'l', code: 76 });
        await fireEvent.keyPress(component.getByText(firstItemText), { key: 'b', code: 66 });
        await new Promise((resolve) => setTimeout(resolve, 100));
        await waitFor(
            async () => {
                await fireEvent.keyPress(component.getByText(firstItemText), {
                    key: 'a',
                    code: 65,
                });
                await fireEvent.keyPress(component.getByText(firstItemText), {
                    key: 'l',
                    code: 76,
                });
                await fireEvent.keyPress(component.getByText(firstItemText), {
                    key: 'c',
                    code: 67,
                });
                expect(
                    component.getByText(secondItemText).parentElement.getAttribute('tabindex')
                ).to.equal('0');
            },
            { timeout: 1500 }
        );
    });
});

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

describe('given the menu has radio items', () => {
    const input = Object.assign({ type: 'radio' }, mock.basic2Items);
    let firstItem, secondItem;

    beforeEach(async () => {
        component = await render(template, input);
        firstItem = component.getAllByRole('menuitemradio')[0];
        secondItem = component.getAllByRole('menuitemradio')[1];
    });

    describe('when an item is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
        });

        it('then it emits the change event with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.checked).to.deep.equal([0]);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an action button is pressed on an item', () => {
        beforeEach(async () => {
            await pressKey(firstItem, {
                key: '(Space character)',
                keyCode: 32,
            });
        });

        it('then it emits the change event with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.checked).to.deep.equal([0]);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when two items are clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it('then it emits two change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.checked).to.deep.equal([1]);
        });

        it('then the second item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
            expect(secondItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an item is clicked multiple times', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            expect(firstItem).to.have.attr('aria-checked', 'true');
            await fireEvent.click(firstItem);
        });

        it('then it emits two change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(1);

            const eventData = changeEvents[0][0];
            expect(eventData.checked).to.deep.equal([0]);
        });

        it('then the item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });
});

describe('given the menu has checkbox items', () => {
    const input = Object.assign({ type: 'checkbox' }, mock.basic2Items);
    let firstItem, secondItem;

    beforeEach(async () => {
        component = await render(template, input);
        firstItem = component.getAllByRole('menuitemcheckbox')[0];
        secondItem = component.getAllByRole('menuitemcheckbox')[1];
    });

    describe('when two items are clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it('then it emits two change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.checked).to.deep.equal([0, 1]);
        });

        it('then both items are selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
            expect(secondItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an item is checked and then unchecked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(firstItem);
        });

        it('then it emits the change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.checked).to.deep.equal([]);
        });

        it('then the item is unchecked', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
        });
    });
});

describe('given the menu has checkbox items with separator', () => {
    const input = Object.assign({ type: 'checkbox' }, mock.separator4Items);
    let firstItem, secondItem, thirdItem;

    beforeEach(async () => {
        component = await render(template, input);
        firstItem = component.getAllByRole('menuitemcheckbox')[0];
        secondItem = component.getAllByRole('menuitemcheckbox')[1];
        thirdItem = component.getAllByRole('menuitemcheckbox')[2];
    });

    describe('when all items are clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
            await fireEvent.click(thirdItem);
        });

        it('then it emits three change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(3);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];
            const thirdEventData = changeEvents[2][0];

            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.checked).to.deep.equal([0, 1]);
            expect(thirdEventData.checked).to.deep.equal([0, 1, 2]);
        });
    });

    describe('when an item is checked and then unchecked', () => {
        beforeEach(async () => {
            await fireEvent.click(thirdItem);
            await fireEvent.click(thirdItem);
        });

        it('then it emits the change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const firstEventData = changeEvents[0][0];
            const secondEventData = changeEvents[1][0];

            expect(firstEventData.checked).to.deep.equal([2]);
            expect(secondEventData.checked).to.deep.equal([]);
        });

        it('then the item is unchecked', () => {
            expect(thirdItem).to.have.attr('aria-checked', 'false');
        });
    });
});
