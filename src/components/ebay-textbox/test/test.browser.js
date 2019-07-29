const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given an input textbox', () => {
    const input = mock.Basic;

    beforeEach(async() => {
        component = await render(template, input);
    });

    ['change', 'input', 'focus', 'blur', 'keyDown'].forEach(eventName => {
        describe(`when native event is fired: ${eventName}`, () => {
            beforeEach(() => {
                fireEvent[eventName](component.getByRole('textbox'));
            });

            it('then it emits the event', () => {
                const events = component.emitted(`textbox-${eventName.toLowerCase()}`);
                expect(events).has.length(1);

                const [[eventArg]] = events;
                expect(eventArg).has.property('value', input.value);
                expect(eventArg).has.property('originalEvent').is.an.instanceOf(Event);
            });
        });
    });
});

describe('given an input textbox with floating label and no value', () => {
    const input = mock.Floating_Label_No_Value;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then is showing the label inline', () => {
        expect(component.getByText(input.floatingLabel)).has.class('floating-label__label--inline');
    });

    describe('when the input is focused', () => {
        beforeEach(() => {
            fireEvent.focus(component.getByRole('textbox'));
        });

        it('then it is not showing the label inline', () => {
            expect(component.getByText(input.floatingLabel)).does.not.have.class('floating-label__label--inline');
        });

        describe('when the input is blurred', () => {
            beforeEach(() => {
                fireEvent.blur(component.getByRole('textbox'));
            });

            it('then is showing the label inline', () => {
                expect(component.getByText(input.floatingLabel)).has.class('floating-label__label--inline');
            });
        });
    });

    describe('when the component is updated/re-rendered', () => {
        beforeEach(async() => {
            await component.rerender();
        });

        it('it should send a textbox floating label init event', () => {
            expect(component.emitted('textbox-floating-label-init')).has.length(1);
        });
    });
});
