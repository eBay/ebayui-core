import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent, cleanup } from '@marko/testing-library';
import componentB from '../component-browser';
import template from '..';
import * as mock from './mock';

componentB.renderer = template._; // Allow re-rendering the split component for testing.
use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given an input textbox', () => {
    const input = mock.Basic;

    beforeEach(async () => {
        component = await render(template, input);
    });

    ['change', 'input', 'focus', 'blur', 'keyDown', 'keyPress', 'keyUp'].forEach((eventName) => {
        describe(`when native event is fired: ${eventName}`, () => {
            beforeEach(async () => {
                await fireEvent[eventName](component.getByRole('textbox'));
            });

            it('then it emits the event', () => {
                const events = component.emitted(
                    eventName === 'input' ? 'input-change' : eventName.toLowerCase()
                );
                expect(events).has.length(1);

                const [[eventArg]] = events;
                expect(eventArg).has.property('value', input.value);
                expect(eventArg).has.property('originalEvent').is.an.instanceOf(Event);
            });
        });
    });
});

describe('given an input textbox with floating label and no value', () => {
    const input = mock.floatingLabelNoValue;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it('then component is wrapped into floating label element', () => {
        expect(component.container.firstElementChild).has.class('legacy-floating-label');
    });

    it('then is showing the label inline', () => {
        expect(component.getByText(input.floatingLabel)).has.class(
            'legacy-floating-label__label--inline'
        );
    });

    describe('when the input is focused', () => {
        beforeEach(async () => {
            await fireEvent.focus(component.getByRole('textbox'));
        });

        it('then it is not showing the label inline', () => {
            expect(component.getByText(input.floatingLabel)).does.not.have.class(
                'legacy-floating-label__label--inline'
            );
        });

        describe('when the input is blurred', () => {
            beforeEach(async () => {
                await fireEvent.blur(component.getByRole('textbox'));
            });

            it('then is showing the label inline', () => {
                expect(component.getByText(input.floatingLabel)).has.class(
                    'legacy-floating-label__label--inline'
                );
            });
        });
    });

    describe('when the component is updated/re-rendered', () => {
        beforeEach(async () => {
            await component.rerender();
        });

        it('it should send a textbox floating label init event', () => {
            expect(component.emitted('floating-label-init')).has.length(1);
        });
    });
});

describe('when the component has a postfix button', () => {
    const input = mock.postfixIconButton;

    beforeEach(async () => {
        component = await render(template, input);
        await fireEvent.click(component.getByLabelText(input.buttonAriaLabel));
    });

    it('it should trigger a postfix click event', () => {
        expect(component.emitted('button-click')).has.length(1);
    });
});
