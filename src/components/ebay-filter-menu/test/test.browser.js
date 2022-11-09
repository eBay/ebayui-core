import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { composeStories } from '@storybook/marko/dist/testing';
import { render, fireEvent, cleanup } from '@marko/testing-library';
import * as stories from '../filter-menu.stories';
import { pressKey } from '../../../common/test-utils/browser';
import { addRenderBodies } from '../../../../.storybook/utils';

const { Standard } = composeStories(stories);

const items = [...Standard.args.items];

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the menu is in the default state', () => {
    const firstItemText = items[0].renderBody;
    let footerButton, firstItem, secondItem;

    beforeEach(async () => {
        component = await render(Standard);
        footerButton = component.getAllByRole('button')[0];
        firstItem = component.getAllByRole('menuitemcheckbox')[0];
        secondItem = component.getAllByRole('menuitemcheckbox')[1];
    });

    describe('when an item is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
        });

        it('then it emits the change event with correct data', () => {
            const selectEvents = component.emitted('change');
            expect(selectEvents).to.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('el').with.text(firstItemText);
            expect(eventArg).has.property('checked').to.deep.equal(['item 1']);
        });
    });

    describe('when two items are clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it('then it emits two menu-change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const [firstEventData, secondEventData] = changeEvents.flat();
            expect(firstEventData).has.property('el', firstItem);
            expect(secondEventData).has.property('el', secondItem);
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

            const [firstEventData, secondEventData] = changeEvents.flat();
            expect(firstEventData).has.property('checked').to.deep.equal(['item 1']);
            expect(secondEventData).has.property('checked').to.deep.equal([]);
            expect(firstEventData).has.property('currentChecked').to.equal(true);
            expect(secondEventData).has.property('currentChecked').to.equal(false);
            expect(firstEventData).has.property('index').to.equal(0);
            expect(secondEventData).has.property('index').to.equal(0);
        });

        it('then the item is unchecked', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
        });
    });

    describe('when an item is checked via the keyboard', () => {
        beforeEach(async () => {
            await pressKey(firstItem, {
                key: '(Space character)',
                keyCode: 32,
            });
        });

        it('then it emits the change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(1);

            const [firstEventData] = changeEvents.flat();
            expect(firstEventData).has.property('el').with.text(firstItemText);
            expect(firstEventData).has.property('checked').to.deep.equal(['item 1']);
            expect(firstEventData).has.property('currentChecked').to.equal(true);
            expect(firstEventData).has.property('index').to.equal(0);
        });
    });

    describe('when the footer button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(footerButton);
        });

        it('then it emits the footer-click event', () => {
            const changeEvents = component.emitted('footer-click');
            expect(changeEvents).to.have.length(1);
        });
    });

    describe('when footer attributes are passed', () => {
        const footer = {
            renderBody: 'Apply',
            disabled: true,
        };

        beforeEach(async () => {
            component = await render(Standard, { footer });
            footerButton = component.getAllByRole('button')[0];
        });
        it('then footer has attribute disabled', () => {
            expect(footerButton).has.attribute('disabled');
        });
    });

    describe('when an item is added via input from its parent and the new item is clicked', () => {
        const newItems = addRenderBodies([
            ...items,
            {
                value: 'item 4',
                renderBody: `item 4`,
            },
        ]);
        const fourthItem = 'item 4';
        beforeEach(async () => {
            await component.rerender(Object.assign({}, Standard.args, { items: newItems }));
            await fireEvent.click(component.getByText(fourthItem));
        });

        it('then it uses the new input in event data', () => {
            const selectEvents = component.emitted('change');
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('checked').to.deep.equal(['item 4']);
            expect(eventArg).has.property('currentChecked').to.equal(true);
            expect(eventArg).has.property('index').to.equal(3);
        });
    });
});

describe('given the menu is in the radio state', () => {
    const firstItemText = items[0].renderBody;
    let footerButton, firstItem, secondItem;

    beforeEach(async () => {
        component = await render(Standard, { type: 'radio' });
        footerButton = component.getAllByRole('button')[0];
        firstItem = component.getAllByRole('menuitemradio')[0];
        secondItem = component.getAllByRole('menuitemradio')[1];
    });

    describe('when an item is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
        });

        it('then it emits the change event with correct data', () => {
            const selectEvents = component.emitted('change');
            expect(selectEvents).to.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('el').with.text(firstItemText);
            expect(eventArg).has.property('checked').to.deep.equal(['item 1']);
            expect(eventArg).has.property('currentChecked').to.equal(true);
            expect(eventArg).has.property('index').to.equal(0);
        });
    });

    describe('when two items are clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it('then it emits two menu-change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const [firstEventData, secondEventData] = changeEvents.flat();
            expect(firstEventData).has.property('el', firstItem);
            expect(secondEventData).has.property('el', secondItem);
            expect(firstEventData).has.property('currentChecked').to.equal(true);
            expect(secondEventData).has.property('currentChecked').to.equal(true);
            expect(firstEventData).has.property('index').to.equal(0);
            expect(secondEventData).has.property('index').to.equal(1);
        });

        it('then only last item is selected', () => {
            expect(firstItem).to.have.attr('aria-checked', 'false');
            expect(secondItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an item is clicked twice', () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(firstItem);
        });

        it('then it emits the change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(2);

            const [firstEventData, secondEventData] = changeEvents.flat();
            expect(firstEventData).has.property('checked').to.deep.equal(['item 1']);
            expect(secondEventData).has.property('checked').to.deep.equal(['item 1']);
            expect(firstEventData).has.property('currentChecked').to.equal(true);
            expect(secondEventData).has.property('currentChecked').to.equal(true);
            expect(firstEventData).has.property('index').to.equal(0);
            expect(secondEventData).has.property('index').to.equal(0);
        });

        it('then the item is still checked', () => {
            expect(firstItem).to.have.attr('aria-checked', 'true');
        });
    });

    describe('when an item is checked via the keyboard', () => {
        beforeEach(async () => {
            await pressKey(firstItem, {
                key: '(Space character)',
                keyCode: 32,
            });
        });

        it('then it emits the change events with correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).to.have.length(1);

            const [firstEventData] = changeEvents.flat();
            expect(firstEventData).has.property('el').with.text(firstItemText);
            expect(firstEventData).has.property('checked').to.deep.equal(['item 1']);
            expect(firstEventData).has.property('currentChecked').to.equal(true);
            expect(firstEventData).has.property('index').to.equal(0);
        });
    });

    describe('when the footer button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(footerButton);
        });

        it('then it emits the footer-click event', () => {
            const changeEvents = component.emitted('footer-click');
            expect(changeEvents).to.have.length(1);
        });
    });

    describe('when an item is added via input from its parent and the new item is clicked', () => {
        const newItems = addRenderBodies([
            ...items,
            {
                value: 'item 4',
                renderBody: `item 4`,
            },
        ]);
        const fourthItem = 'item 4';

        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Standard.args, { items: newItems, type: 'radio' })
            );
            await fireEvent.click(component.getByText(fourthItem));
        });

        it('then it uses the new input in event data', () => {
            const selectEvents = component.emitted('change');
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property('checked').to.deep.equal(['item 4']);
            expect(eventArg).has.property('currentChecked').to.equal(true);
            expect(eventArg).has.property('index').to.equal(3);
        });
    });
});

describe('given the menu item is disabled', () => {
    const firstItemText = items[0].renderBody;

    beforeEach(async () => {
        items[0] = Object.assign({}, items[0], { disabled: true });

        component = await render(Standard, { items: addRenderBodies(items) });
    });

    describe('when an item is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
        });

        it('then it does not emit the change event with correct data', () => {
            const selectEvents = component.emitted('change');
            expect(selectEvents).to.length(0);
        });
    });
});
