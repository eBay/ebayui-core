const { expect, use } = require('chai');
const { render, cleanup, fireEvent } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given checkbox button is enabled', () => {
    beforeEach(async() => {
        component = await render(template, { htmlAttributes: { value: 'food' } });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async() => {
            await component.getByRole('checkbox').click();
        });

        it('then it emitted the change event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('value', 'food');
            expect(changeEvent).has.property('checked', true);
        });

        it('then it is checked', () => {
            expect(component.getByRole('checkbox')).has.property('checked', true);
        });
    });
});

describe('given checkbox button is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async() => {
            await component.getByRole('checkbox').click();
        });

        it('then it does not emit the change event', () => {
            expect(component.emitted('change')).has.length(0);
        });

        it('then it remains unchecked', () => {
            expect(component.getByRole('checkbox')).has.property('checked', false);
        });
    });
});

describe('when native focus event is fired', () => {
    beforeEach(async() => {
        component = await render(template, { htmlAttributes: { value: 'food' } });
        await fireEvent.focus(component.getByRole('checkbox'));
    });

    it('then it emits the event', () => {
        const events = component.emitted('focus');
        expect(events).has.length(1);

        const [[eventArg]] = events;
        expect(eventArg).has.property('value', 'food');
        expect(eventArg).has.property('originalEvent').is.an.instanceOf(Event);
    });
});
