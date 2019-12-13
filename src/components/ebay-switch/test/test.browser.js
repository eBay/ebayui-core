const { expect, use } = require('chai');
const { cleanup, fireEvent, render, wait } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given switch button is enabled', () => {
    beforeEach(async() => {
        component = await render(template, { value: 'food' });
    });

    describe('when switch button is clicked', () => {
        beforeEach(async() => {
            component.getByRole('switch').click();
            await wait();
        });

        it('then it emits the event', () => {
            const changeEvents = component.emitted('switch-change');
            expect(changeEvents).has.length(1);

            const [[eventArg]] = changeEvents;
            expect(eventArg).has.property('originalEvent').is.an.instanceof(Event);
            expect(eventArg).has.property('value', 'food');
        });
    });
    describe('when switch button gets focus', () => {
        beforeEach(async() => {
            await fireEvent.focus(component.getByRole('switch'));
        });

        it('then it emits switch-focus', () => {
            const changeEvents = component.emitted('switch-focus');
            const [[eventArg]] = changeEvents;

            expect(changeEvents).has.length(1);
            expect(eventArg).has.property('originalEvent').is.an.instanceof(Event);
        });
    });
    describe('when switch button loses focus', () => {
        beforeEach(async() => {
            await fireEvent.blur(component.getByRole('switch'));
        });

        it('then it emits switch-blur', () => {
            const changeEvents = component.emitted('switch-blur');
            const [[eventArg]] = changeEvents;

            expect(changeEvents).has.length(1);
            expect(eventArg).has.property('originalEvent').is.an.instanceof(Event);
        });
    });
});

describe('given switch button is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when switch button is clicked', () => {
        beforeEach(async() => {
            component.getByRole('switch').click();
            await wait();
        });

        it('then it doesn\'t emit the event', () => {
            expect(component.emitted('switch-change')).has.length(0);
        });
    });
});
