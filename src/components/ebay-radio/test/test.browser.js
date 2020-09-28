const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given radio button is enabled', () => {
    beforeEach(async() => {
        component = await render(template, { value: 'food' });
    });

    describe('when radio button is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByRole('radio'));
        });

        it('then it emits the event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const eventArgs = changeEvents[0];
            expect(eventArgs).has.length(1);
            expect(eventArgs[0].originalEvent).to.be.an.instanceof(Event);
            expect(eventArgs[0].value).to.equal('food');
        });
    });
});

describe('given radio button is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when radio button is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByRole('radio'));
        });

        it('then it doesn\'t emit the event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(0);
        });
    });
});

describe('when native focus event is fired on radio', () => {
    beforeEach(async() => {
        component = await render(template, { value: 'food' });
        await fireEvent.focus(component.getByRole('radio'));
    });

    it('then it emits the event', () => {
        const events = component.emitted('focus');
        expect(events).has.length(1);

        const [[eventArg]] = events;
        expect(eventArg).has.property('originalEvent').is.an.instanceOf(Event);
    });
});
