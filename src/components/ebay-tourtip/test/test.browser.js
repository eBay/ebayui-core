import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent, cleanup } from '@marko/testing-library';
import template from '..';
import componentB from '../component-browser';
import * as mock from './mock';

componentB.renderer = template._; // Allow re-rendering the split component for testing.
use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the default tourtip', () => {
    const input = mock.Basic;

    beforeEach(async () => {
        component = await render(template, input);
    });

    thenItIsOpen();
    thenItCanBeClosed();

    describe('after it is rerendered', () => {
        beforeEach(async () => {
            await component.rerender(Object.assign({}, input, { disabled: false }));
        });

        thenItIsOpen();
        thenItCanBeClosed();
    });

    function thenItIsOpen() {
        it('then it is open', () => {
            expect(component.getByText(input.host.renderBody.text).parentElement).has.attr(
                'aria-expanded',
                'true'
            );
        });
    }

    function thenItCanBeClosed() {
        describe('when the close button is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText(input.a11yCloseText));
            });

            it('then it emits the collapse event', () => {
                expect(component.emitted('collapse')).has.length(1);
            });

            it('then it is closed', () => {
                expect(component.getByText(input.host.renderBody.text).parentElement).has.attr(
                    'aria-expanded',
                    'false'
                );
            });
        });
    }
});
