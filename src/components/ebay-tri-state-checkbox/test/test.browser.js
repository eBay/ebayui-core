const { expect, use } = require('chai');
const { render, cleanup, fireEvent, waitFor } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given tri-state-checkbox button is enabled', () => {
    beforeEach(async () => {
        component = await render(template, { htmlAttributes: { value: 'food' } });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async () => {
            await component.getByRole('checkbox').click();
        });

        it('then it emitted the change event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('value', 'food');
            expect(changeEvent).has.property('checked', 'mixed');
        });

        it('then it is mixed', async () => {
            await waitFor(() => expect(component.getByRole('checkbox')).has.attribute('aria-checked', 'mixed'));
            await waitFor(() => expect(component.getByRole('checkbox')).has.property('checked', false));
        });
    });
});

describe('given tri-state-checkbox button is enabled in mixed state', () => {
    beforeEach(async () => {
        component = await render(template, { htmlAttributes: { value: 'food' }, checked: 'mixed' });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async () => {
            await component.getByRole('checkbox').click();
        });

        it('then it emitted the change event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('value', 'food');
            expect(changeEvent).has.property('checked', 'true');
        });

        it('then it is mixed', async () => {
            await waitFor(() => expect(component.getByRole('checkbox')).has.attribute('aria-checked', 'true'));
            await waitFor(() => expect(component.getByRole('checkbox')).has.property('checked', true));
        });
    });
});
describe('given tri-state-checkbox button is disabled', () => {
    beforeEach(async () => {
        component = await render(template, { disabled: true });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async () => {
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
    beforeEach(async () => {
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

describe('given tri-state-checkbox button is two-state', () => {
    beforeEach(async () => {
        component = await render(template, { skipMixed: true });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async () => {
            await component.getByRole('checkbox').click();
        });

        it('then it emitted the change event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('value', 'on');
            expect(changeEvent).has.property('checked', 'true');
        });
    });
});
